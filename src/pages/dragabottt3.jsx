import React, { Component, useState } from 'react'

import clamp from 'lodash-es/clamp'
import styled, { keyframes } from 'styled-components'
import { animated, config, useSpring } from 'react-spring'
import { useGesture } from 'react-with-gesture'
import { add, scale } from 'vec-la'

import WaterLayer from '../components/WaterLayer'

import Logo from '../components/AlternateLogo'

import Header from '../components/HeaderTemp'

import Scroller from '../components/ScrollerTemp' // toggle within here between mobile and desktop and tablet, provide info with context

import Water from '../images/long-wave.svg'

const WaterDiv = styled.div`
  background: url(${Water}) repeat-x;
  height: 1179px;
  width: 6000px;
  transform: translate3d(0, 0, 0);
`

// each wave svg segment is naturally 640px wide
const Wave = keyframes`
  0% {
    margin-left: 0px;
  }
  100% {
    margin-left: -640px;
  }
`

const Swell = keyframes`
  0%, 100% {
    transform: translate3d(0,-30px,0);
  }
  50% {
    transform: translate3d(0,10px,0);
  }
`

const WaterForegroundContainer = styled(animated.div)`
  z-index: 0;
  position: absolute;
  animation: ${Wave} 43s cubic-bezier(0.36, 0.45, 0.63, 0.53) infinite,
    ${Swell} 43s ease -1.25s infinite;
  width: 1370px;
  left: -350px;
  top: 70%;
  opacity: 0.8;
`

const WaterBackgroundContainer = styled(animated.div)`
  z-index: -2;
  position: absolute;
  width: 1370px;
  animation: ${Wave} 43s cubic-bezier(0.36, 0.45, 0.63, 0.53) infinite,
    ${Swell} 43s ease -1.25s infinite;
  transform: translate3d(0, 0, 0);
  left: -350px;
  top: 46%;
  opacity: 0.8;
`

const LogoSwell = keyframes`
  0%, 100% {
    transform: translate3d(0,15px,0);
  }
  50% {
    transform: translate3d(0,-30px,0);
  }
`

const DivingLogo = styled(animated.div)`
  height: 160vw;
  width: 160vw;
  position: fixed;
  z-index: 0;
  animation: ${Swell} 43s ease -1.25s infinite;
  top: 10vh;
  left: 25vw;
`

const SceneContainer = styled(animated.div)``

const WaterContainerForeground = styled(animated.div)`
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100vw;
  z-index: 0;
`

const WaterContainerBackground = styled(animated.div)`
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100vw;
  z-index: -2;
`

const ScrollerContainer = styled.div`
  position: fixed;
  bottom: 10px;
  translateX(50%);
  display: flex;
  justify-content: center;
  width: 100%;
`

const AboutPage = () => {
  const [dove, toggle] = useState(false)

  const foregroundFloat = 60
  const foregroundDove = 5

  const backgroundFloat = 46
  const backgroundDove = 3

  const logoFloat = 15
  const logoDove = 24

  const [{ offsetY }, set] = useSpring(() => ({ offsetY: 0 }))

  //   const [
  //     bind,
  //     {
  //       local: [x, y],
  //     },
  //   ] = useGesture()

  const bind = useGesture(
    ({ down, delta, velocity, direction, temp = offsetY.getValue() }) => {
      console.log(delta, temp, direction, velocity)
      set({
        offsetY: delta[1] + temp,
        immediate: down,
        config: { velocity: scale(direction, velocity), decay: true },
      })
      return temp
    }
  )
  // const diveThresold = window.innerHeight * 0.1
  // const [{ diveOffsetY }, set] = useSpring(() => ({ diveOffsetY: 0 }))

  // const bind = useGesture(
  //   ({ down, delta, velocity, direction, distance, cancel }) => {
  //     if (down && distance > window.innerHeight / 5) {
  //     }
  //   }
  // )

  // use interpolate to make it springy for the end animation?
  const logoProps = {
    top: `19%`,
  }

  //   const foregroundProps = {
  //     top: `60%`,
  //     transform: `translateY(${offsetY.interpolate(y => y)}px)`,
  //   }

  const foregroundProps = {
    top: `60%`,
    transform: offsetY.interpolate(y => `translateY(${y}px)`),
  }

  //   const backgroundProps = {
  //     top: `46%`,
  //     transform: `translateY(${offsetY.interpolate(y => y)}px)`,
  //   }

  const backgroundProps = {
    top: `46%`,
    transform: offsetY.interpolate(y => `translateY(${y}px)`),
  }

  return (
    <SceneContainer onClick={() => toggle(!dove)}>
      <Header isLanding={!dove} />
      <DivingLogo style={logoProps}>
        <Logo />
      </DivingLogo>
      <WaterContainerForeground {...bind()} style={foregroundProps}>
        <WaterForegroundContainer>
          <WaterDiv />
        </WaterForegroundContainer>
      </WaterContainerForeground>
      <WaterContainerBackground style={backgroundProps}>
        <WaterBackgroundContainer>
          <WaterDiv />
        </WaterBackgroundContainer>
      </WaterContainerBackground>
      <ScrollerContainer>
        <Scroller />
      </ScrollerContainer>
    </SceneContainer>
  )
}

export default AboutPage
