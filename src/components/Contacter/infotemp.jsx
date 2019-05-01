import React from 'react'

import styled from 'styled-components'
import { animated } from 'react-spring'

const Label = styled(animated.div)`
  color: white;
  font-family: roboto;
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

const PhoneInfoContainer = styled(animated.div)``

export const PhoneInfo = ({ item: { area, prefix, line }, key, props }) => {
  return (
    <PhoneInfoContainer key={key} style={props}>
      <Label>phone</Label>
      <PhoneContainer>
        <Area>{`(${area})`}</Area>
        <Number>{`${prefix} - ${line}`}</Number>
      </PhoneContainer>
    </PhoneInfoContainer>
  )
}

const AddressContainer = styled(animated.div)`
  font-family: roboto;
`

const LocalPart = styled(animated.div)`
  color: white;
`

const Domain = styled(animated.div)`
  color: #ffb800;
`

const EmailInfoContainer = styled(animated.div)``

export const EmailInfo = ({ item: { local, domain }, key, props }) => {
  return (
    <EmailInfoContainer key={key} style={props}>
      <Label>email</Label>
      <AddressContainer>
        <LocalPart>{local}</LocalPart>
        <Domain>{`@${domain}`}</Domain>
      </AddressContainer>
    </EmailInfoContainer>
  )
}
