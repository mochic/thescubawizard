import React, { useState, useRef } from 'react'

import styled from 'styled-components'
import { animated, useChain, useSpring, useTransition } from 'react-spring'

const InfoItemName = styled(animated.span)`
  overflow: hidden;
  line-height: 80px;
`
const InfoItemValue = styled(animated.span)`
  line-height: 80px;
`
const InfoItemContainer = styled(animated.div)`
  overflow: hidden;
  font-size: 20px;
  font-family: roboto;
  display: flex;
  justify-content: space-between;
`

const Divider = styled(animated.div)`
  height: 1px;
  background: #ffb800;
  margin-top: 10%;
  margin-bottom: 10%;
`

const LabelChunk = styled(animated.div)`
  color: #ffb800;
  font-size: 64px;
  font-weight: 100;
  font-family: roboto;
`

const LabelContainer = styled(animated.div)`
  display: flex;
`

const LABEL_CHUNKS = [
  { key: `label-0`, text: `c` },
  { key: `label-1`, text: `o` },
  { key: `label-2`, text: `n` },
  { key: `label-3`, text: `t` },
  { key: `label-4`, text: `a` },
  { key: `label-5`, text: `c` },
  { key: `label-6`, text: `t` },
]

const Label = styled(animated.div)`
  color: red;
`

const PhoneContainer = styled(animated.div)`
  font-family: roboto;
`

const Area = styled(animated.span)`
  color: #ffb800;
`

const Number = styled(animated.span)`
  color: white;
`

const PhoneInfo = ({ phone: { area, prefix, line } }) => {
  return (
    <>
      <Label>phone</Label>
      <PhoneContainer>
        <Area>{`(${area})`}</Area>
        <Number>{`${prefix} - ${line}`}</Number>
      </PhoneContainer>
    </>
  )
}

const AddressContainer = styled(animated.div)``

const LocalPart = styled(animated.div)``

const Domain = styled(animated.div)``

const EmailInfo = ({ email: { local, domain } }) => {
  return (
    <>
      <Label>email</Label>
      <AddressContainer>
        <LocalPart>{local}</LocalPart>
        <Domain>{`@${domain}`}</Domain>
      </AddressContainer>
    </>
  )
}

export default ({ phone, email }) => {
  const labelTransitionRef = useRef()
  const labelTransition = useTransition(LABEL_CHUNKS, item => item.key, {
    // from: { opacity: 0, transform: `translate3d(0,-40px,0)` },
    // enter: { opacity: 1, transform: `translate3d(0,0px,0)` },
    // leave: { opacity: 0, transform: `translate3d(0,-40px,0)` },
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    ref: labelTransitionRef,
    trail: 100,
  })

  const dividerSpringRef = useRef()
  const dividerProps = useSpring({
    from: { width: `0%` },
    to: { width: `100%` },
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

  const PHONE = {
    key: `phone-info`,
    area: `206`,
    prefix: `223`,
    line: `4372`,
  }

  const EMAIL = {
    key: `email-info`,
    localPart: `thescubawizard`,
    domain: `gmail.com`,
  }

  const infoItemTransitionRef = useRef()
  const infoItemTransitions = useTransition(infoItems, item => item.key, {
    ref: infoItemTransitionRef,
    trail: 300,
    from: { opacity: 0, height: 0, innerHeight: 0 },
    enter: { opacity: 1, height: 80, innerHeight: 80 },
    leave: { opacity: 0, height: 0, innerHeight: 0 },
  })

  //   useChain([labelSpringRef, dividerSpringRef, infoItemTransitionRef])
  useChain([labelTransitionRef, dividerSpringRef, infoItemTransitionRef])

  return (
    <>
      {/* <Label style={labelProps}>contact</Label> */}
      <LabelContainer>
        {labelTransition.map(({ item, key, props }) => {
          return (
            <LabelChunk key={key} style={props}>
              {item.text}
            </LabelChunk>
          )
        })}
      </LabelContainer>
      <Divider style={dividerProps} />
      {infoItemTransitions.map(
        ({ item, key, props: { innerHeight, ...rest } }) => {
          return (
            <InfoItemContainer key={key} style={rest}>
              <InfoItemName style={{ height: innerHeight }}>
                {item.name}
              </InfoItemName>
              <InfoItemValue style={{ height: innerHeight }}>
                {item.value}
              </InfoItemValue>
            </InfoItemContainer>
          )
        }
      )}
    </>
  )
}
