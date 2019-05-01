import React from 'react'

import styled from 'styled-components'
import { animated } from 'react-sprimg'

const Divider = styled(animated.div)`
  color: #ffb800;
  height: 1px;
`

export const HorizontalDivider = ({ props }) => {
  return <Divider style={props} />
}
