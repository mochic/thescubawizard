import React, { useRef } from 'react'

import styled from 'styled-components'
import { animated, useSpring, useChain, config } from 'react-spring'

import Logo from './Logo'
import LandingTitle from './LandingTitle2'

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
    titleFilter,
    titleColor,
    titleOpacity,
  } = useSpring({
    from: {
      logoTransform: `scale(1)`,
      logoOpacity: 0.5,
      logoFilter: `blur(20px)`,
      titleColor: 255,
      titleTransform: `translate3d(0,40px,0)`,
      titleFilter: `blur(2px)`,
      titleOpacity: 0,
    },
    to: [
      {
        logoTransform: `scale(1)`,
        logoFilter: `blur(2px)`,
        logoOpacity: 1,
      },
      {
        titleTransform: `translate3d(0,0px,0)`,
        titleColor: 0,
        titleFilter: `blur(0px)`,
        titleOpacity: 1,
      },
    ],
    delay: 50,
    config: { duration: 2000 },
  })

  const logoRef = useRef()
  const logoProps = useSpring({
    ref: logoRef,
  })

  const titleRef = useRef()
  const titleProps = useSpring({
    ref: titleRef,
  })

  return (
    <>
      <LandingPage>
        <TitleContainer>
          <LandingTitle
            opacity={titleOpacity}
            color={titleColor}
            transform={titleTransform}
            filter={titleFilter}
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
