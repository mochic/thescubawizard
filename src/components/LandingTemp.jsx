import React from 'react'

import styled from 'styled-components'
import { animated, useSpring, config } from 'react-spring'

import Logo from './Logo'
import LandingTitle from './LandingTitle'

// apply transforms to this
const LogoContainer = styled(animated.div)`
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: -2;
  text-align: center;
  width: 716px;
  height: 707px;
`

const LandingPage = styled(animated.div)`
  background: linear-gradient(
    180deg,
    rgba(44, 145, 147, 0.9) 0%,
    rgba(1, 0, 0, 0.9) 100%
  );
  z-index: 1;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  display: grid;
  grid-template-rows: repeat(24, 1fr);
  grid-template-columns: repeat(24, 1fr);
`

const TitleContainer = styled(animated.div)`
  grid-row-start: 18;
  grid-column-start: 8;
`

export default ({ show }) => {
  const {
    logoTransform,
    logoOpacity,
    logoFilter,
    titleTransform,
    titleFreq,
    titleScale,
    titleOpacity,
  } = useSpring({
    from: {
      logoTransform: `scale(1)`,
      logoOpacity: 0.5,
      logoFilter: 10,
      titleTransform: `scale(0.9)`,
      titleFreq: '0.0175, 0.0',
      titleScale: 20,
      titleOpacity: 0,
    },
    to: [
      {
        logoTransform: show ? `scale(1)` : `scale(1)`,
        logoFilter: 2,
        logoOpacity: show ? 1 : 0,
      },
      {
        titleTransform: show ? `scale(1)` : `scale(0.9)`,
        titleFreq: show ? '0.0, 0.0' : '0.0175, 0.0',
        titleScale: show ? 150 : 10,
        titleOpacity: show ? 1 : 0,
      },
    ],
    delay: 50,
    config: { duration: 2000 },
  })

  return (
    <>
      <LandingPage>
        <TitleContainer>
          <LandingTitle
            freq={titleFreq}
            opacity={titleOpacity}
            scale={titleScale}
            transform={titleTransform}
          />
        </TitleContainer>
      </LandingPage>
      <LogoContainer
        style={{
          transform: logoTransform,
          opacity: logoOpacity,
          filter: logoFilter.interpolate(v => `blur(${v}px)`),
        }}
      >
        <Logo />
      </LogoContainer>
    </>
  )
}
