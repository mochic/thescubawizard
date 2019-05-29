import React, { useState, useRef } from 'react'

import styled, { keyframes } from 'styled-components'
import { animated, useTransition, useSpring } from 'react-spring'

import VisibilitySensor from 'react-visibility-sensor'

import { FaChevronDown } from 'react-icons/fa'

import Logo from '../components/Logo'

const ScrollListener = () => {
  return
}

const Container = styled(animated.div)`
  overflow-y: scroll;
  overflow-x: hidden;
  height: 200vh;
  width: 100vw;
`

const ContainerGradient = styled(animated.div)`
  background: linear-gradient(180deg, #2c9193 0%, #010000 100%);
  z-index: -3;
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0px;
  left: 0px;
`

const Page = styled(animated.div)`
  height: 100vh;
  width: 100vw;
`

const LogoContainer = styled(animated.div)`
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: -2;
  height: 707px;
  width: 716px;
  text-align: center;
`

const LandingPageContainer = styled(animated.div)`
  background: linear-gradient(
    180deg,
    rgba(44, 145, 147, 0.9) 0%,
    rgba(1, 0, 0, 0.9) 100%
  );
  z-index: -1;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  display: grid;
  grid-template-rows: 93% 50px 1fr;
  grid-template-columns: 1fr 100px 1fr;
  grid-template-areas:
    '. . .'
    '. hint .'
    '. . .';
`

const TitleContainer = styled(animated.div)`
  border: 2px solid #ffffff;
  width: 220px;
  height: 245px;
  margin-left: 50%;
`

const TitleChunk = styled(animated.div)`
  font-family: roboto;
  font-style: normal;
  font-weight: 300;
  font-size: 64px;
  line-height: 75px;
  color: white;
`

// const Title = ({ titleChunks }) => {
//   return (
//     <TitleContainer>
//       {titleChunks.map(({ key, text }) => (
//         <TitleChunk key={key}>{text}</TitleChunk>
//       ))}
//     </TitleContainer>
//   )
// }

const TitleChunks = [
  { key: `title-chunk-0`, text: `the` },
  { key: `title-chunk-1`, text: `scuba` },
  { key: `wizard`, text: `wizard` },
]

const FadeDownKeys = keyframes`
    from {
        opacity: 1;
        transform: translate3d(0,-16px,0);
    } to {
        opacity: 0;
        transform: translate3d(0,0px,0);
    }
`

// const ScheduleHintContainer = styled(animated.div)`
//   grid-area: hint;
//   color: #f2f2f2;
//   animation: ${FadeDownKeys} 4s ease-out infinite;
// `

// const ScheduleHintContainer = styled(animated.div)`
//   animation: ${FadeDownKeys} 4s ease-out infinite;
//   color: #f2f2f2;
//   position: fixed;
//   top: 93%;
//   left: 0%;
//   width: 100%;
// `

const ScheduleHintContainer = styled(animated.div)`
  color: #f2f2f2;
  position: fixed;
  top: 93%;
  left: 0%;
  width: 100%;
`

const ScheduleHintLabel = styled(animated.div)`
  font-family: roboto;
  font-weight: 300;
  color: #2f2f2f;
  text-align: center;
  font-size: 20px;
  line-height: 28px;
`

const ScheduleHintIconContainer = styled(animated.div)`
  font-size: 24px;
  color: #2f2f2f;
  text-align: center;
`

const ScheduleHint = () => {
  const props = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
  })

  return (
    <ScheduleHintContainer style={props}>
      <ScheduleHintLabel>schedule</ScheduleHintLabel>
      <ScheduleHintIconContainer>
        <FaChevronDown />
      </ScheduleHintIconContainer>
    </ScheduleHintContainer>
  )
}

const LandingPage = () => {
  return (
    <LandingPageContainer>
      <ScheduleHint />
    </LandingPageContainer>
  )
}

const SchedulingPageContainer = styled(animated.div)`
  background: black;
  z-index: -1;
  height: 100vh;
  width: 100vw;
  font-family: roboto;
  display: grid;
  grid-template-rows: 20% 20% 40% 20%;
  grid-template-columns: 10% fr 10%;
  grid-template-areas:
    '. header .'
    '. . .'
    '. form .'
    '. . .';
`

const SchedulingHeader = styled(animated.div)`
  font-weight: 300;
  font-size: 60px;
  color: #f2f2f2;
  line-height: 1;
`

const SchedulingDivider = styled(animated.div)`
  background: #ffb800;
  height: 1px;
  margin-top: 10%;
  margin-bottom: 10%;
`

// const EmailInput = styled(animated.input)``

// const PhoneInput = styled(animated.input)``

// const SchedulingFormContainer = styled(animated.form)`
//   background: red;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
// `

const EmailInput = styled(animated.input)`
  margin-left: 30%;
  margin-right: 30%;
`

const PhoneInput = styled(animated.input)`
  margin-left: 30%;
  margin-right: 30%;
`

const SchedulingHeaderContainer = styled(animated.div)`
  grid-area: header;
`

const SchedulingFormContainer = styled(animated.form)`
  grid-area: form;
  background: red;
`

const FormDivider = styled(animated.div)`
  background: #ffb800;
  height: 1px;
  margin-top: 10%;
  margin-bottom: 10%;
`

const SchedulingPage = () => {
  const [visible, setVisible] = useState(false)
  const {
    headerOpacity,
    headerTransform,
    dividerWidth,
    emailInputOpacity,
    phoneInputOpacity,
  } = useSpring({
    from: {
      headerOpacity: 0,
      headerTransform: `translate3d(-40px,0,0)`,
      dividerWidth: `0%`,
      emailInputOpacity: 0,
      phoneInputOpacity: 0,
    },
    to: [
      {
        headerOpacity: visible ? 1 : 0,
        headerTransform: visible
          ? `translate3d(0px,0,0)`
          : `translate3d(-40px,0,0)`,
        dividerWidth: visible ? `100%` : `0%`,
      },
      {
        emailInputOpacity: visible ? 1 : 0,
        phoneInputOpacity: visible ? 1 : 0,
      },
    ],
  })

  return (
    <VisibilitySensor
      onChange={e => {
        setVisible(e)
        console.log('triggered!', e)
      }}
    >
      <SchedulingPageContainer>
        <SchedulingHeaderContainer>
          <SchedulingHeader
            style={{ opacity: headerOpacity, transform: headerTransform }}
          >
            schedule
          </SchedulingHeader>
          <SchedulingDivider style={{ width: dividerWidth }} />
        </SchedulingHeaderContainer>
        <SchedulingFormContainer>
          <PhoneInput
            type="number"
            id="quantity"
            name="quantity"
            pattern="[0-9]*"
            inputmode="numeric"
            placeholder="phone"
            style={{ opacity: phoneInputOpacity }}
          />
          <FormDivider />
          <EmailInput
            placeholder="email"
            type="email"
            style={{ opacity: emailInputOpacity }}
          />
        </SchedulingFormContainer>
      </SchedulingPageContainer>
    </VisibilitySensor>
  )
}

export default () => {
  return (
    <Container>
      <LogoContainer>
        <Logo />
      </LogoContainer>
      <ContainerGradient />
      <LandingPage />
      <SchedulingPage />
    </Container>
  )
}
