import React from 'react'

import styled from 'styled-components'
import { animated } from 'react-spring'

const EmailLabel = styled(animated.span)``

const EmailChunk = styled.span``

const Email = styled(animated.div)``

const EmailInfoContainer = styled(animated.div)``

export default () => (
  <EmailInfoContainer>
    <EmailLabel>Email</EmailLabel>
    <Email>
      <EmailChunk>thescubawizard</EmailChunk>
      <EmailChunk>@gmail.com</EmailChunk>
    </Email>
  </EmailInfoContainer>
)
