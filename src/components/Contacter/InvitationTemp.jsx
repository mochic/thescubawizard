import React from 'react'

import styled from 'styled-components'
import { animated } from 'react-spring'

const InvitationChunk = styled(animated.div)`
  color: white;
  font-family: -apple-system, roboto;
  font-size: 56px;
  overflow: hidden;
  line-height: 1;
`

export default ({ item, props }) => {
  return <InvitationChunk style={props}>{item.text}</InvitationChunk>
}
