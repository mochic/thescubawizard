import React from 'react'
import styled from 'styled-components'
import animated, { useTransition } from 'react-spring'

const InfoName = styled(animated.span)`
  font-family: roboto;
  font-weight: light;
  text-transform: uppercase;
  color: grey;
`

const InfoValue = styled(animated.span)`
  font-family: roboto;
  font-weight: bold;
  color: white;
`

export default ({ name, value }) => {
  const [nameTransition, valueTransition] = useTransition(
    [name, value],
    item => item.key,
    {
      from: { transform: `translate3d(0,-40px,0)`, opacity: 0 },
      enter: { transform: `translate3d(0,0,0)`, opacity: 1 },
      leave: { opacity: 0 },
    }
  )

  return (
    <>
      <InfoName key={nameTransition.key} style={nameTransition.props}>
        {nameTransition.item.text}
      </InfoName>
      <InfoValue key={valueTransition.key} style={valueTransition.props}>
        {valueTransition.item.text}
      </InfoValue>
    </>
  )
}
