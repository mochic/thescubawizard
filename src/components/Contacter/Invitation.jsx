import React from 'react'

import styled from 'styled-components'
import { animated, useSpring, useTransition } from 'react-spring'

const InvitationChunk = styled(animated.span)``

export const InvitationContainer = styled(animated.div)``

export default () => {
  return (
    <InvitationContainer>
      <InvitationChunk>Let's</InvitationChunk>
      <InvitationChunk>talk</InvitationChunk>
      <InvitationChunk>about</InvitationChunk>
      <InvitationChunk>your</InvitationChunk>
      <InvitationChunk>next</InvitationChunk>
    </InvitationContainer>
  )
}
