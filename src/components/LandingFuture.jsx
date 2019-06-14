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
    rgba(39, 167, 125, 0.9) 0%,
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

const Gradient = styled(animated.div)`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background: #2f2f2f;
  z-index: -4;
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
      logoFilter: `blur(20px)`,
      titleTransform: `scale(0.9)`,
      titleFreq: '0.0175, 0.0',
      titleScale: 10,
      titleOpacity: 0,
    },
    to: [
      {
        logoTransform: `scale(1)`,
        logoFilter: `blur(2px)`,
        logoOpacity: 1,
      },
      {
        titleTransform: `scale(1)`,
        titleFreq: `0.0, 0.0`,
        titleScale: 150,
        titleOpacity: 1,
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
          filter: logoFilter,
        }}
      >
        <Logo />
      </LogoContainer>
      <Gradient />
    </>
  )
}
