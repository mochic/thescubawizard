import React, { useRef, useState } from 'react'

import styled from 'styled-components'
import { animated, useSprings } from 'react-spring'
import { useGesture } from 'react-with-gesture'

const LandingContainer = styled(animated.div)`
  height: 100vh;
  width: 100vw;
`
const ContentContainer = styled(animated.div)`
  height: 100vh;
  width: 100vw;
`
const LayoutContainer = styled(animated.div)``

const LandingLayout = () => {
  const diving = useRef(false)
  const offsets = [[0, -1000], [0, 5]]

  // foreground, background, logo
  const [[divingSpring, logoSpring], set] = useSprings(2, idx => ({
    y: offsets[idx],
    overflow: 'hidden',
  }))

  const bind = useGesture(
    ({
      delta: [xDelta, yDelta],
      down,
      direction: [xDir, yDir],
      distance,
      cancel,
    }) => {
      if (down && distance > window.innerHeight / 5) {
        cancel((diving.current = diving ? yDir > 0 : yDir < 0))
      }
      set(i => {
        return {
          y: down ? yDelta : offsets[i][diving.current ? 1 : 0],
          overflow: diving.current ? 'scroll' : 'hidden',
        }
      })
    }
  )

  const divingProps = {
    top: `0%`,
    overflow: divingSpring.overflow.interpolate(overflow => overflow),
    y: divingSpring.y.interpolate(y => y),
  }

  return (
    <LayoutContainer>
      <LandingContainer {...bind()}>landing</LandingContainer>
      <ContentContainer>content</ContentContainer>
    </LayoutContainer>
  )
}

export default LandingLayout
