import React, { useState } from 'react'

import styled from 'styled-components'
import { animated, useSpring, useTransition } from 'react-spring'

const InvitationChunk = styled(animated.span)`
  color: white;
  font-family: -apple-system, roboto;
  font-size: 56px;
  padding-bottom: 4px;
`

export const InvitationContainer = styled(animated.div)`
  width: 70%;
  margin: 8%;
`

export default ({ invitationChunks }) => {
  const [chunks, setChunks] = useState(invitationChunks)
  const transitions = useTransition(chunks, item => item.key, {
    from: {
      opacity: 0,
    },
    enter: {
      opacity: 1,
    },
    leave: {
      opacity: 0,
    },
    trail: 300,
  })

  return (
    <InvitationContainer>
      {transitions.map(({ item, key, props }) => {
        return (
          <InvitationChunk key={key} style={props}>
            {item.text}
          </InvitationChunk>
        )
      })}
    </InvitationContainer>
  )
}
