import React, { useState, useRef } from 'react'

import styled, { keyframes } from 'styled-components'
import { animated, useTransition, useSpring } from 'react-spring'

import VisibilitySensor from 'react-visibility-sensor'

import { FaChevronDown } from 'react-icons/fa'

import Logo from '../components/Logo'

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

const StatementContainerThing = styled(animated.div)`
  background: blue;
`

// const SchedulingStatementContainer = styled(animated.div)`
//   position: -webkit-sticky;
//   position: sticky;
//   top: 0;
//   width: 100vw;
//   background: purple;
//   z-index: 1000;
// `

const SchedulingStatementContainer = styled(animated.div)`
  position: fixed;
  top: 120vh;
  width: 100vw;
  background: purple;
  z-index: 1000;
`

const SchedulingStatement = () => {
  const [visible, setVisible] = useState(false)

  const { statementOpacity, statementTransform } = useSpring({
    from: {
      statementOpacity: 0,
      statementTransform: `translate3d(-40px,0,0)`,
    },
    to: [
      {
        statementOpacity: visible ? 1 : 0,
        statementTransform: visible
          ? `translate3d(0px,0,0)`
          : `translate3d(-40px,0,0)`,
      },
    ],
    delay: 500,
  })

  return (
    <VisibilitySensor onChange={e => setVisible(e)}>
      <SchedulingStatementContainer>
        <StatementContainerThing style={{ opacity: statementOpacity }}>
          schedule a chat.
        </StatementContainerThing>
      </SchedulingStatementContainer>
    </VisibilitySensor>
  )
}

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
  grid-template-rows: 20% 20% 20% 20% 20%;
  grid-template-columns: 10% fr 10%;
  grid-template-areas:
    '. . .'
    '. statement .'
    '. statement .'
    '. statement .'
    '. . .';
`

const StatementScaffold = styled(animated.div)`
  height: 100vh;
  width: 100vw;
  position: absolute;
  top: 100vh;
  left: 0;
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  white-space: nowrap;
`

const StatementThing = styled(animated.div)`
  color: black;
  font-family: roboto;
  font-weight: 300;
  line-height: 42px;
  font-size: 36px;
  background: white;
  float: left;
`

const Scheduler = styled(animated.div)`
  background: green;
`

const SchedulerHeader = styled(animated.div)`
  background: blue;
  font-family: roboto;
  font-weight: 300;
  color: white;
`

const SchedulingPage = () => {
  const [visible, setVisible] = useState(false)

  const {
    statementOpacity,
    statementTransform,
    statementWidth,
    statementColor,
    formOpacity,
    headerOpacity,
    headerTransform,
    dividerWidth,
    emailInputOpacity,
    phoneInputOpacity,
    schaffoldOpacity,
    schaffoldTransform,
  } = useSpring({
    from: {
      headerOpacity: 0,
      headerTransform: `translate3d(-40px,0,0)`,
      dividerWidth: `0%`,
      emailInputOpacity: 0,
      phoneInputOpacity: 0,
      statementOpacity: 0,
      statementTransform: `translate3d(-40px,0,0)`,
      statementColor: 0,
      statementWidth: 100,
      schaffoldOpacity: 1,
      schaffoldTransform: `translate3d(0,0px,0)`,
      formOpacity: 0,
    },
    to: [
      {
        statementOpacity: visible ? 1 : 0,
        statementTransform: visible
          ? `translate3d(0px,0,0)`
          : `translate3d(-40px,0,0)`,
        statementWidth: visible ? 100 : 0,
        statementColor: visible ? 255 : 0,
        headerOpacity: visible ? 1 : 0,
        headerTransform: visible
          ? `translate3d(0px,0,0)`
          : `translate3d(-40px,0,0)`,
        dividerWidth: visible ? `100%` : `0%`,
      },
      //   {
      //     schaffoldOpacity: visible ? 0 : 1,
      //     schaffoldTransform: visible
      //       ? `translate3d(0,-40px,0)`
      //       : `translate3d(0,0px,0)`,
      //   },
      //   {
      //     statementWidth: visible ? `0vh` : `100vh`,
      //   },
      //   {
      //     emailInputOpacity: visible ? 1 : 0,
      //     phoneInputOpacity: visible ? 1 : 0,
      //   },
      {
        formOpacity: visible ? 1 : 0,
        formTransform: visible
          ? `translate3d(40px,0,0)`
          : `translate3d(0px,0,0)`,
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
        <StatementScaffold
          style={{ opacity: schaffoldOpacity, transform: schaffoldTransform }}
        >
          <StatementThing
            style={{
              opacity: statementOpacity,
              width: statementWidth.interpolate(v => `${v}%`),
            }}
          >
            schedule a chat.
          </StatementThing>
        </StatementScaffold>
        <Scheduler style={{ opacity: formOpacity }}>
          <SchedulerHeader>schedule</SchedulerHeader>
        </Scheduler>
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
      <SchedulingStatement />
      <SchedulingPage />
    </Container>
  )
}
