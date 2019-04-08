import React from 'react'

import styled from 'styled-components'
import { animated } from 'react-spring'

const PhoneLabel = styled(animated.span)``

const PhoneNumberChunk = styled.span``

const PhoneNumber = styled(animated.div)``

const PhoneInfoContainer = styled(animated.div)``

export default () => (
  <PhoneInfoContainer>
    <PhoneLabel>Phone</PhoneLabel>
    <PhoneNumber>
      <PhoneNumberChunk>(206)</PhoneNumberChunk>
      <PhoneNumberChunk>941-1521</PhoneNumberChunk>
    </PhoneNumber>
  </PhoneInfoContainer>
)
