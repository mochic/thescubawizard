import React from 'react'

import styled from 'styled-components'
import { animated } from 'react-spring'

const TitleChunk = styled(animated.div)`
  font-size: 64px;
  line-height: 1;
`

const TitleContainer = styled(animated.div)`
  color: #cde6ae;
  font-family: roboto;
  font-weight: 300;
`

export default ({ color, filter, transform, opacity }) => {
  return (
    <TitleContainer>
      <TitleChunk style={{ opacity, filter, transform, color }}>the</TitleChunk>
      <TitleChunk style={{ opacity, filter, transform, color }}>
        scuba
      </TitleChunk>
      <TitleChunk style={{ opacity, filter, transform, color }}>
        wizard
      </TitleChunk>
    </TitleContainer>
  )
}
