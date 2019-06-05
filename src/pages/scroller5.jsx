import React, { useState, useRef } from 'react'

import styled, { keyframes } from 'styled-components'
import { animated, useTransition, useSpring } from 'react-spring'

import VisibilitySensor from 'react-visibility-sensor'

import Logo from '../components/Logo'

import MainTitle from '../components/MainTitle'

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
  grid-template-rows: repeat(20, 1fr);
  grid-template-columns: repeat(20, 1fr);
`

// const TitleContainer = styled(animated.div)`
//   grid-column-start: 3;
//   grid-column-end: 15;
//   grid-row-start: 11;
//   grid-row-end: 18;
//   border: 2px solid white;
//   padding-left: 8%;
//   padding-top: 12%;
//   line-height: 70px;
// `

// const TitleChunk = styled(animated.div)`
//   color: white;
//   font-family: roboto;
//   font-size: 64px;
//   font-weight: 300;
// `

// const TitleContainer = styled(animated.div)`
//   grid-column-start: 3;
//   grid-column-end: 15;
//   grid-row-start: 11;
//   grid-row-end: 18;
//   border: 2px solid white;
//   padding-left: 8%;
//   padding-top: 12%;
//   line-height: 70px;
// `

// const TitleChunk = styled(animated.div)`
//   color: white;
//   font-family: roboto;
//   font-size: 64px;
//   font-weight: 300;
// `

const TitleContainer = styled(animated.div)`
  grid-column-start: 3;
  grid-column-end: 15;
  grid-row-start: 11;
  grid-row-end: 18;
  padding-left: 8%;
  padding-top: 12%;
  z-index: 1000;
`

const LandingPage = () => {
  const [visible, setVisible] = useState(false)

  // const {
  //   borderDashOffset,
  //   titleChunkColor,
  //   titleChunkBackgroundColor,
  //   titleChunkOpacity,
  //   titleChunkWidth,
  // } = useSpring({
  //   from: {
  //     borderDashOffset: 0,
  //     titleChunkColor: 255,
  //     titleChunkBackgroundColor: 0,
  //     titleChunkOpacity: 0,
  //     titleChunkWidth: `0%`,
  //   },
  //   to: [
  //     {
  //       borderDashOffset: visible ? `100%` : `0%`,
  //       titleChunkColor: visible ? 0 : 255,
  //       titleChunkBackgroundColor: visible ? 255 : 0,
  //       titleChunkOpacity: visible ? 1 : 0,
  //       titleChunkWidth: visible ? `100%` : `0%`,
  //     },
  //   ],
  // })

  return (
    <VisibilitySensor onChange={e => setVisible(e)}>
      <LandingPageContainer>
        <TitleContainer>
          <MainTitle />
        </TitleContainer>
      </LandingPageContainer>
    </VisibilitySensor>
  )
}

const SchedulingPageContainer = styled(animated.div)`
  background: black;
  z-index: -1;
  height: 100vh;
  width: 100vw;
  font-family: roboto;
  display: grid;
  grid-template-rows: 10% 10% 10% 10% 10% 10% 10% 10% 10% 10%;
  grid-template-columns: 20% 20% 20% 20% 20%;
  grid-template-areas:
    'title title title . .'
    '. statement statement statement statement'
    '. statement statement statement statement'
    '. promise promise promise .'
    '. promise promise promise .'
    '. . . . .'
    '. form form form .'
    '. form form form .'
    '. form form form .'
    '. . . . .';
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

const StatementContainer = styled(animated.div)`
  display: flex;
  grid-area: statement;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  white-space: nowrap;
`

const StatementThing = styled(animated.div)`
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

const Promise = styled(animated.div)`
  color: white;
  font-family: roboto;
  font-weight: 300;
`

const PromiseContainer = styled(animated.div)`
  grid-area: promise;
  display: flex;
  flex-direction: column;
`

const Input = styled(animated.input)`
  border: none;

  font-family: roboto;
  background: transparent;

  text-align: center;
  width: 100%;
  outline: none;
  box-shadow: none;
  line-height: 42px;

  font-size: 24px;
  font-weight: 300;
  color: white;
  border-bottom: 1px solid white;

  &:placeholder-shown {
    font-size: 36px;
    border-bottom: 1px solid #5a5a5a !important;
    color: #5a5a5a;
  }

  &:focus::-webkit-input-placeholder {
    color: transparent !important;
    border-bottom: 1px solid white !important;
  }

  &:focus::-moz-placeholder {
    color: transparent !important;
    border-bottom: 1px solid white !important;
  }

  &:-webkit-autofill {
    background-color: #faffbd !important;
  }

  &:focus:-moz-placeholder {
    color: transparent !important;
    border-bottom: 1px solid white !important;
  }
`

const Submit = styled(animated.input)`
  color: #5a5a5a;
  font-family: roboto;
  font-weight: 300;
  background: transparent;
  border: none;
  font-size: 36px;
`

const SchedulingForm = styled(animated.form)`
  grid-area: form;
  display: grid;
  grid-template-rows: 30% 30% 10% 30%;
  grid-template-columns: 25% 25% 25% 25%;
  grid-template-areas:
    'phone phone phone phone'
    'email email email email'
    '. . . .'
    '. . submit submit';
`

const HomeLink = styled(animated.div)`
  grid-area: title;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`

const Link = styled(animated.div)`
  border: 2px solid white;
  color: white;
  font-family: roboto;
  font-size: 24px;
  font-weight: 300;
  padding-top: 2px;
  padding-bottom: 2px;
  padding-left: 3px;
  padding-right: 3px;
  margin: 1px;
`

const SchedulingFormContainer = styled(animated.form)`
  margin: 0;
  background: black;
  z-index: -1;
  height: 100vh;
  width: 100vw;
  font-family: roboto;
  display: grid;
  grid-template-rows: 10% 10% 10% 10% 10% 10% 10% 10% 10% 10%;
  grid-template-columns: 20% 20% 20% 20% 20%;
  grid-template-areas:
    'title title title . .'
    '. statement statement statement statement'
    '. statement statement statement statement'
    '. promise promise promise .'
    '. promise promise promise .'
    '. phone phone phone .'
    '. email email email .'
    '. . . . .'
    '. . . submit submit'
    '. . . submit submit';
`

const SubmitContainer = styled(animated.div)``

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
    schaffoldOpacity,
    schaffoldTransform,
    promiseTransform,
    promiseOpacity,
    phoneInputHeight,
    phoneInputOpacity,
    emailInputHeight,
    emailInputOpacity,
    submitInputTransform,
    submitInputOpacity,
    homeLinkOpacity,
    homeLinkTransform,
  } = useSpring({
    from: {
      headerOpacity: 0,
      headerTransform: `translate3d(-40px,0,0)`,
      dividerWidth: `0%`,
      statementOpacity: 0,
      statementTransform: `translate3d(-40px,0,0)`,
      statementColor: 255,
      statementWidth: 100,
      schaffoldOpacity: 1,
      schaffoldTransform: `translate3d(0,0px,0)`,
      formOpacity: 0,
      promiseTransform: `translate3d(0,0px,0)`,
      promiseOpacity: 0,
      phoneInputHeight: `0%`,
      phoneInputOpacity: 0,
      emailInputHeight: `0%`,
      emailInputOpacity: 0,
      submitInputTransform: `translate3d(0,40px,0)`,
      submitInputOpacity: 0,
      homeLinkOpacity: 0,
      homeLinkTransform: `translate3d(-100px,0,0)`,
    },
    to: [
      {
        statementOpacity: visible ? 1 : 0,
        statementTransform: visible
          ? `translate3d(0px,0,0)`
          : `translate3d(-40px,0,0)`,
        statementWidth: visible ? 100 : 0,
        statementColor: visible ? 0 : 255,
        headerOpacity: visible ? 1 : 0,
        headerTransform: visible
          ? `translate3d(0px,0,0)`
          : `translate3d(-40px,0,0)`,
        dividerWidth: visible ? `100%` : `0%`,
        homeLinkOpacity: visible ? 1.0 : 0.0,
        homeLinkTransform: visible
          ? `translate3d(0px,0,0)`
          : `translate3d(-100px,0,0)`,
      },
      {
        promiseTransform: visible
          ? `translate3d(0px,0,0)`
          : `translate3d(-40px,0,0)`,
        promiseOpacity: visible ? 1 : 0,
      },
      {
        phoneInputHeight: visible ? `100%` : `0%`,
        phoneInputOpacity: visible ? 1 : 0,
        emailInputHeight: visible ? `100%` : `0%`,
        emailInputOpacity: visible ? 1 : 0,
        submitInputOpacity: visible ? 1 : 0,
        submitInputTransform: visible
          ? `translate3d(0,10px,0)`
          : `translate3d(0,40px,0)`,
      },
    ],
  })

  return (
    <VisibilitySensor
      onChange={e => {
        if (e === true) {
          setVisible(true)
        }
      }}
    >
      <SchedulingFormContainer>
        <HomeLink
          style={{
            backgroundColor: homeLinkOpacity.interpolate(
              v => `rgba(255,255,255,${255 - 255 * v})`
            ),
          }}
        >
          <Link style={{ opacity: homeLinkOpacity }}>the scuba wizard</Link>
        </HomeLink>
        <StatementContainer>
          <StatementThing
            style={{
              opacity: statementOpacity,
              color: statementColor.interpolate(v => `rgb(${v},${v},${v})`),
              width: statementWidth.interpolate(v => `${v}%`),
            }}
          >
            schedule a chat.
          </StatementThing>
        </StatementContainer>
        <PromiseContainer>
          <Promise
            style={{ opacity: promiseOpacity, transform: promiseTransform }}
          >
            - We typically respond within 24-48 hours.
          </Promise>
          <Promise
            style={{ opacity: promiseOpacity, transform: promiseTransform }}
          >
            - We wont use your information to spam you.
          </Promise>
        </PromiseContainer>
        <Input
          style={{
            gridArea: `phone`,
            height: phoneInputHeight,
            opacity: phoneInputHeight.interpolate(v => (v !== `0%` ? 1.0 : 0)),
          }}
          placeholder="phone"
          type="tel"
          autoComplete="tel"
          name="phone"
        />
        <Input
          style={{
            gridArea: `email`,
            height: emailInputHeight,
            opacity: emailInputHeight.interpolate(v => (v !== `0%` ? 1.0 : 0)),
          }}
          placeholder="email"
          type="email"
          autoComplete="email"
          name="email"
        />
        <SubmitContainer style={{ gridArea: `submit` }}>
          <Submit
            style={{
              transform: submitInputTransform,
              opacity: submitInputOpacity,
            }}
            type="submit"
            value="send"
          />
        </SubmitContainer>
      </SchedulingFormContainer>
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
