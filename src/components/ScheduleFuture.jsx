import React, { useState } from 'react'

import styled from 'styled-components'
import { animated, useSpring, useTransition, useChain } from 'react-spring'

const Gradient = styled(animated.div)`
  background: linear-gradient(
    180deg,
    rgba(39, 167, 125, 0.9) 0%,
    rgba(1, 0, 0, 0.9) 100%
  );
  z-index: 1;
  height: 100vh;
  width: 100vw;
  position: absolute;
`

// const Background = styled(animated.div)`
//   position: fixed;
//   top: 100vh;
//   left: 0;
//   height: 100vh;
//   width: 100vw;
//   background: #2f2f2f;
//   z-index: -4;
// `

const Container = styled(animated.div)`
  height: 100vh;
  width: 100vw;
  display: grid;
  grid-template-rows: repeat(24, 1fr);
  grid-template-columns: repeat(24, 1fr);
`

const SchedulerContainer = styled(animated.form)`
  display: grid;
  grid-template-rows: repeat(24, 1fr);
  grid-template-columns: repeat(24, 1fr);
  grid-row-start: 10;
  grid-row-end: 22;
  grid-column: 3 / span 20;
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

const HidingContainer = styled(animated.div)`
  background: pink;
  overflow: hidden;
`

const Scheduler = ({ handleSubmit }) => {
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
    <SchedulerContainer>
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

const ScheduleHeader = styled(animated.h2)`
  font-weight: 300;
  font-family: roboto;
  color: #f2f2f2;
  font-size: 36px;
  line-height: 1;
  grid-column: 3 / span 20;
  grid-row-start: 3;
  text-align: right;
  width: 100%;
`

export default ({
  headerTransform,
  statementTransform,
  questionTransform,
  schedulerTransform,
}) => {
  return (
    <>
      <Container>
        <ScheduleHeader>schedule a chat.</ScheduleHeader>
        <OnColorP style={{ gridColumn: `3 / span 20`, gridRow: `7 / auto` }}>
          Let's talk about that next dive job.
        </OnColorP>
        <Scheduler style={{ transform: schedulerTransform }} />
        <Gradient />
      </Container>
      {/* <Background /> */}
    </>
  )
}
