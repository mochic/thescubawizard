import React, { useState } from 'react'

import { animated, useSpring, useTransition } from 'react-spring'
import styled from 'styled-components'

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

const Scheduler = ({ handleSubmit, style }) => {
  const [scheduleType, setScheduleType] = useState(null)

  const scheduleTypes = [
    {
      key: `email-input`,
      type: `email`,
      placeholder: `email address`,
      autoComplete: `email`,
    },
    {
      key: `phone-input`,
      type: `tel`,
      name: `phone`,
      placeholder: `phone number`,
      autoComplete: `tel`,
    },
  ]

  const { pTransform, pOpacity, eOpacity, eTransform } = useSpring({
    to: {
      pTransform: show ? `translate3d(40px,0,0)` : `translate3d(0px,0,0)`,
      eTransform: show ? `translate3d(40px,0,0,)` : `translate3d(0px,0,0)`,
      pOpacity: show ? 1 : 0,
      eOpacity: show ? 1 : 0,
    },
  })

  const inputTransitions = useTransition(scheduleTypes, item => item.key, {
    from: { transform: `translate3d(0,-40px,0)`, opacity: 0 },
    enter: { transform: `translate3d(0,0px,0)`, opacity: 1 },
    leave: { transform: `translate(0,40px,0)`, opacity: 0 },
  })

  const questionProps = useSpring({
    to: {
      transform: scheduleType
        ? `translate3d(0,-40px,0)`
        : `translate3d(0,0px,0)`,
      opacity: scheduleType ? 0 : 1,
    },
  })

  return (
    <SchedulerContainer style={style}>
      <HidingContainer
        style={{ gridArea: `2 / 2 / 8 / 24`, overflow: `hidden` }}
      >
        <OnColorP style={questionProps}>
          How should I get a hold of you?
        </OnColorP>
      </HidingContainer>
      <Switch style={{ gridArea: `8 / 2 / 13 / 24` }}>
        <TextToggle
          onClick={e => {
            e.preventDefault()
            setScheduleType(`phone-input`)
          }}
        >
          phone
        </TextToggle>
        <TextDivider>or</TextDivider>
        <TextToggle
          onClick={e => {
            e.preventDefault()
            setScheduleType(`email-input`)
          }}
        >
          email
        </TextToggle>
      </Switch>
      <InputContainer style={{ gridArea: `14 / 2 / 18 / 24` }}>
        {inputTransitions.map(({ key, item, props }) => {
          console.log(key, item, props)
          return (
            item.key === scheduleType && (
              <Input {...item} style={{ ...props }} />
            )
          )
        })}
      </InputContainer>
      {scheduleType && (
        <Input
          value="submit"
          type="submit"
          style={{
            gridArea: `19 / 16 / 22 / 24`,
          }}
          onChange={e => {
            e.preventDefault()
            return handleSubmit(e)
          }}
        />
      )}
    </SchedulerContainer>
  )
}

export default ({ show }) => {
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
      <Scheduler style={{ gridArea: `11 / 3 / 22 / span 20` }} />
    </Page>
  )
}
