import React, { useState } from 'react'

import styled from 'styled-components'
import { animated, useSpring, useTransition } from 'react-spring'

const Gradient = styled(animated.div)`
  background: linear-gradient(
    180deg,
    rgba(39, 167, 125, 0.9) 0%,
    rgba(1, 0, 0, 0.9) 100%
  );
  z-index: 1;
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
`

const Container = styled(animated.div)`
  height: 100vh;
  width: 100vw;
  background: blue;
  display: grid;
  grid-template-rows: repeat(24, 1fr);
  grid-template-columns: repeat(24, 1fr);
`

const SchedulerContainer = styled(animated.form)`
  display: grid;
  grid-template-rows: repeat(24, 1fr);
  grid-template-columns: repeat(24, 1fr);
  grid-row-start: 15;
  grid-row-end: 22;
  grid-column-start: 3;
  grid-column-end: 21;
  margin: 0;
  padding: 0;
  background: red;
`

const TextToggle = styled(animated.button)`
  margin: 0;
  padding: 0;
  border: none;
  font-family: roboto;
  font-weight: 300;
`

const Input = styled(animated.input)``

const InputContainer = styled(animated.div)`
  background: green;
  grid-row-start: 14;
  grid-column: 2 / span 20;
`

const Submit = styled(animated.input)`
  grid-row-start: 20;
  grid-column: span 10 / 20;
`

const TextSpan = styled(animated.span)``

const Switch = styled(animated.div)`
  display: flex;
  grid-column: 0 / span 24;
  grid-row-start: 0;
  background: yellow;
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
    from: { opacity: 0 },
    enter: { opacity: 1 },
  })

  return (
    <SchedulerContainer>
      <Switch>
        <TextToggle
          onClick={e => {
            e.preventDefault()
            setScheduleType(`phone-input`)
          }}
        >
          phone
        </TextToggle>
        <TextSpan>or</TextSpan>
        <TextToggle
          onClick={e => {
            e.preventDefault()
            setScheduleType(`email-input`)
          }}
        >
          email
        </TextToggle>
      </Switch>
      <InputContainer>
        {inputTransitions.map(({ key, item, props }) => {
          console.log(key, item, props)
          return (
            item.key === scheduleType && (
              <Input {...item} style={{ ...props }} />
            )
          )
        })}
      </InputContainer>
      <Submit
        type="submit"
        onChange={e => {
          e.preventDefault()
          return handleSubmit(e)
        }}
      />
    </SchedulerContainer>
  )
}

const ScheduleHeader = styled(animated.div)`
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

const ScheduleStatement = styled(animated.div)`
  font-weight: 300;
  font-family: roboto;
  color: #f2f2f2;
  font-size: 36px;
  grid-row-start: 2;
  line-height: 1;
  grid-column: 3 / span 20;
  grid-row-start: 10;
`

const ScheduleQuestion = styled(animated.div)`
  font-weight: 300;
  font-family: roboto;
  color: #f2f2f2;
  font-size: 36px;
  grid-row-start: 3;
  line-height: 1;
  grid-column: 3 / span 20;
  grid-row-start: 14;
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
        <ScheduleStatement>
          Let's talk about that next dive job.
        </ScheduleStatement>
        <ScheduleQuestion>
          How would you like me to get back to you?
        </ScheduleQuestion>
        <Scheduler style={{ transform: schedulerTransform }} />
      </Container>
      {/* <Gradient /> */}
    </>
  )
}
