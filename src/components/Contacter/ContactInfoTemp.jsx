import React, { useState, useRef } from 'react'

import styled from 'styled-components'
import { animated, useChain, useSpring, useTransition } from 'react-spring'

const InfoItemName = styled(animated.span)``
const InfoItemValue = styled(animated.span)``
const InfoItemContainer = styled(animated.div)``

const Label = styled(animated.div)`
  color: red;
`
const Divider = styled(animated.div)`
  height: 1px;
  background: black;
  margin-left: 10%;
  margin-right: 10%;
`

export default ({ phone, email }) => {
  const labelSpringRef = useRef()
  const labelProps = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    ref: labelSpringRef,
  })

  const dividerSpringRef = useRef()
  const dividerProps = useSpring({
    from: { width: `0%` },
    to: { width: `80%` },
    ref: dividerSpringRef,
  })

  const infoItems = [
    {
      key: 'phone-info',
      name: `phone`,
      value: `(${phone.area}) ${phone.prefix} - ${phone.line}`,
    },
    { key: 'email-info', name: `email`, value: email },
  ]

  const infoItemTransitionRef = useRef()
  const infoItemTransitions = useTransition(infoItems, item => item.key, {
    ref: infoItemTransitionRef,
    trail: 300,
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  })

  useChain([labelSpringRef, dividerSpringRef, infoItemTransitionRef])

  return (
    <>
      <Label style={labelProps}>contact</Label>
      <Divider style={dividerProps} />
      {infoItemTransitions.map(({ item, key, props }) => {
        return (
          <InfoItemContainer key={key} style={props}>
            <InfoItemName>{item.name}</InfoItemName>
            <InfoItemValue>{item.value}</InfoItemValue>
          </InfoItemContainer>
        )
      })}
    </>
  )
}
