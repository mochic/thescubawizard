import React from 'react'

import styled from 'styled-components'
import { animated, useSpring } from 'react-spring'

const PageContainer = styled(animated.div)`
  height: 100vh;
  width: 100vw;
`

const Statement = styled(animated.div)`
  font-family: roboto;
  font-weight: 300;
`

export default ({ revealed, post_schedule }) => {
  const { statementBackground, statementColor, statementWidth } = useSpring({
    to: {
      statementWidth: revealed ? `100%` : `0%`,
      statementColor: revealed ? 255 : 0,
      statementBackground: revealed ? 0 : 255,
    },
  })
  return (
    <PageContainer>
      <Statement
        style={{
          background: statementBackground.interpolate(
            v => `rgb(${v},${v},${v})`
          ),
          color: statementColor.interpolate(v => `rgb(${v},${v},${v})`),
          width: statementWidth,
        }}
      />
    </PageContainer>
  )
}
