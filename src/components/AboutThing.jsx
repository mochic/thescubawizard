import React, { useState } from 'react'

import styled from 'styled-components'
import { animated, useTransition } from 'react-spring'

const Statements = [
  `Hello,``My name is Nash Lapping`,
  `I'm an ACDE certified diver with over 100 working dive hours in the Puget Sound`,
  `and I'd like to perform your next`,
  `hull cleaning`,
  `zinc replacement`,
  `lost item recovery`,
]

const StatementContainer = styled(animated.div)``

export default () => {
  const [show, toggle] = useState(false)

  return <StatementContainer>why...</StatementContainer>
}
