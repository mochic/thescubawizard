import React, { useEffect, useState } from 'react'

import styled from 'styled-components'
import { animated, useSprings } from 'react-spring'

const Form = styled(animated.form)`
  margin: 0px;
  padding: 0px;
`

const Input = styled(animated.input)``

const Switch = styled(animated.div)``

const Toggle = styled(animated.button)``

const schedulingTypes = [
  { key: `email`, name: `email`, type: `email` },
  { key: `phone`, name: `phone`, type: `email` },
]

export default ({ submitForm }) => {
  const [type, setScheduleType] = useState('email')

  const springs = useSprings(
    schedulingTypes,
    schedulingType => schedulingType.key,
    {
      from: {
        x: 0,
        y: 0,
      },
      to: {},
    }
  )

  return (
    <>
      <Form>
        <Switch>
          <Toggle
            onClick={e => {
              e.preventDefault()
              setScheduleType(`email`)
            }}
          />
          <Toggle
            o
            nClick={e => {
              e.preventDefault()
              setScheduleType(`phone`)
            }}
          />
        </Switch>
        {springs.map(({ key, item, props }) => {
          return <Input key={key} style={props} />
        })}
        <Input
          type="submit"
          onChange={e => {
            e.preventDefault()
            return submitForm()
          }}
        />
      </Form>
    </>
  )
}
