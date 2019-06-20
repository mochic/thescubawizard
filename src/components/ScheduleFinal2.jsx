import React, { useRef, useState } from 'react'

import {
  animated,
  useSpring,
  useTransition,
  useChain,
  config,
} from 'react-spring'
import styled from 'styled-components'

const handleSubmitPlaceholder = e => {
  console.log(e)
}

const AnimatedH2 = styled(animated.h2)`
  color: #f2f2f2;
  font-weight: 300;
  margin: 0;
  padding: 0;
  font-family: inconsolata;
  font-size: 36px;
  line-height: 1;
  text-align: right;
  width: 100%;
`

const Page = styled(animated.div)`
  height: 100vh;
  width: 100vw;
  display: grid;
  grid-template-rows: repeat(24, 1fr);
  grid-template-columns: repeat(24, 1fr);
  z-index: 1000;
  background: #2f2f2f;
`

const SchedulerContainer = styled(animated.form)`
  display: grid;
  grid-template-rows: repeat(24, 1fr);
  grid-template-columns: repeat(24, 1fr);
  margin: 0;
  padding: 0;
  background: red;
  font-family: roboto;
`

const TextToggle = styled(animated.button)`
  margin: 0;
  padding: 0;
  border: none;
  font-family: roboto;
  font-weight: 300;
  background: transparent;
  font-size: 22px;
  outline-style: none;
  box-shadow: none;
  border-color: transparent;
`

const TextDivider = styled(animated.div)`
  margin: 0;
  padding: 0;
  border: none;
  font-family: roboto;
  font-weight: 300;
  font-size: 22px;
`

const Input = styled(animated.input)``

const Switch = styled(animated.div)`
  display: flex;
  background: yellow;
  align-items: center;
  justify-content: space-evenly;
  overflow: hidden;
`

const InputContainer = styled(animated.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  grid-row: 8 / 16;
  grid-column: 2 / 24;
  background: green;
`

const OnColorP = styled(animated.p)`
  font-weight: 300;
  font-family: roboto;
  color: #f2f2f2;
  font-size: 36px;
  line-height: 1;
`

const Containr = styled(animated.div)`
  display: grid;
  grid-template-columns: repeat(24, 1fr);
  grid-template-rows: repeat(24, 1fr);
`

const HidingContainer = styled(animated.div)`
  background: pink;
  overflow: hidden;
`

const OtherHidingContainr = styled(animated.div)`
  background: teal;
  overflow: hidden;
`

const SchedulerContext = React.createContext({})

const Scheduler = ({
  questionProps,
  switchProps,
  submitProps,
  phoneToggleProps,
  emailToggleProps,
  textDividerProps,
  phoneInputProps,
  emailInputProps,
  handleSwitch,
  handleSubmit,
  handlePhoneChange,
  handleEmailChange,
  style,
}) => {
  const phoneRef = useRef(null)
  const emailRef = useRef(null)

  const getInputValues = () => {
    return {
      phone: phoneRef.current.value,
      email: emailRef.current.value,
    }
  }

  return (
    <SchedulerContainer
      onSubmit={e => {
        e.preventDefault()
        console.log(e, getInputValues())
        return handleSubmit(e)
      }}
      style={style}
    >
      <HidingContainer
        style={{ gridArea: `2 / 1 / 8 / 25`, overflow: `hidden` }}
      >
        <OnColorP style={questionProps}>
          How should I get a hold of you?
        </OnColorP>
      </HidingContainer>
      <Switch style={{ gridArea: `8 / 2 / 13 / 24` }}>
        <TextToggle
          onClick={e => {
            e.preventDefault()
            handleSwitch(`phone`)
          }}
          style={phoneToggleProps}
        >
          phone
        </TextToggle>
        <TextDivider style={textDividerProps}>or</TextDivider>
        <TextToggle
          onClick={e => {
            e.preventDefault()
            handleSwitch(`email`)
          }}
          style={emailToggleProps}
        >
          email
        </TextToggle>
      </Switch>
      <InputContainer style={{ gridArea: `14 / 1 / 18 / 25` }}>
        <Input
          key="phone-input"
          type="tel"
          name="phone"
          placeholder="phone number"
          autoComplete="tel"
          style={phoneInputProps}
          ref={phoneRef}
          onChange={handlePhoneChange}
        />
        <Input
          key="email-input"
          type="email"
          name="email"
          placeholder="email address"
          autoComplete="email"
          style={emailInputProps}
          ref={emailRef}
          onChange={handleEmailChange}
        />
      </InputContainer>
      <Input
        value="submit"
        type="submit"
        style={{
          gridArea: `19 / 16 / 22 / 24`,
          ...submitProps,
        }}
      />
    </SchedulerContainer>
  )
}

// we reveal...maybe render for first to make it as efficient as possible...
export default ({ show }) => {
  const [inputType, setInputType] = useState(null)
  const [inputState, setInputState] = useState({})

  const { h2Transform, pTransform, h2Opacity, pOpacity } = useSpring({
    from: {
      h2Transform: `translate3d(0,40px,0)`,
      h2Opacity: 0,
      pTransform: `translate3d(0,40px,0)`,
      pOpacity: 0,
    },
    to: {
      h2Transform: show ? `translate3d(0,0px,0)` : `translate3d(0,40px,0)`,
      pTransform: show ? `translate3d(0,0px,0)` : `translate3d(0,40px,0)`,
      h2Opacity: show ? 1 : 0,
      pOpacity: show ? 1 : 0,
    },
  })

  const questionProps = useSpring({
    to: {
      transform: show ? `translate3d(0px,0,0)` : `translate3d(-80px,0,0)`,
      opacity: show ? 1 : 0,
    },
  })

  const phoneToggleRef = useRef()
  const phoneToggleProps = useSpring({
    from: {
      opacity: 0,
      transform: `translate3d(0,20px,0)`,
    },
    to: {
      opacity: 1,
      transform: `translate3d(0,0px,0)`,
    },
    // config: { ...config.wobbly, duration: 5000 },
    ref: phoneToggleRef,
  })

  const textDividerRef = useRef()
  const textDividerProps = useSpring({
    from: { opacity: 0 },
    to: {
      opacity: 1,
    },
    // config: { ...config.stiff, duration: 500 },
    ref: textDividerRef,
  })

  const emailToggleRef = useRef()
  const emailToggleProps = useSpring({
    from: {
      opacity: 0,
      transform: `translate3d(0,20px,0)`,
    },
    to: {
      opacity: 1,
      transform: `translate3d(0,0px,0)`,
    },
    // config: { ...config.wobbly, duration: 500 },
    ref: emailToggleRef,
  })

  useChain([phoneToggleRef, textDividerRef, emailToggleRef])

  const submitSpringRef = useRef()
  const submitProps = useSpring({
    to: { opacity: inputState.phone || inputState.email ? 1 : 0 },
    ref: submitSpringRef,
  })

  const handlePhoneChange = ({ target }) => {
    console.log(target)
    setInputState({
      ...inputState,
      phone: target && target.value,
    })
  }

  const handleEmailChange = ({ target }) => {
    console.log(target)
    setInputState({
      ...inputState,
      email: target && target.value,
    })
  }

  return (
    <Page>
      <AnimatedH2
        style={{
          gridArea: `3 / 3 / 5 / span 20`,
          transform: h2Transform,
          opacity: h2Opacity,
        }}
      >
        schedule a chat.
      </AnimatedH2>
      <OnColorP
        style={{
          gridArea: `7 / 3 / 10 / span 20`,
          transform: pTransform,
          opacity: pOpacity,
        }}
      >
        Let's talk about that next dive job.
      </OnColorP>
      {show && (
        <Scheduler
          questionProps={questionProps}
          phoneToggleProps={phoneToggleProps}
          emailToggleProps={emailToggleProps}
          textDividerProps={textDividerProps}
          submitProps={submitProps}
          style={{ gridArea: `11 / 3 / 22 / span 20` }}
          handleSubmit={handleSubmitPlaceholder}
          handleSwitch={setInputType}
          handlePhoneChange={handlePhoneChange}
          handleEmailChange={handleEmailChange}
        />
      )}
    </Page>
  )
}