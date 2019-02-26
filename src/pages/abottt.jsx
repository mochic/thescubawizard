import React, { Component, useState } from 'react'

import styled, { keyframes } from 'styled-components'
import { animated, config, useSpring } from 'react-spring'

import WaterLayer from '../components/WaterLayer'

import Logo from '../components/AlternateLogo'

import Water from '../images/water-darker-longer.svg'

// icon is -1 zindex
// background is -2 zindex
// foreground is 0 zindex
// page content is 1 zindex typically?

// const SlidingForegroundKeys = keyframes`
//     0% {
//         -webkit-transform: translateX(-30%);
//     }

//     20% {
//         -webkit-transform: translateX(-20%);
//     }

//     40% {
//         -webkit-transform: translateX(-10%);
//     }

//     60% {
//         -webkit-transform: translateX(20%);
//     }

//     80% {
//         -webkit-transform: translateX(40%);
//     }

//     100% {
//         -webkit-transform: translateX(10%);
//     }
// `

// const SlidingBackgroundKeys = keyframes`
//     from {
//         -webkit-transform: translateX(-30%);
//     }

//     to {
//         -webkit-transform: translateX(50%);
//     }
// `

// translate right and up
// translate left and down
// const SlidingForegroundKeys = keyframes`
//     50% {
//         transform: translate(70px, -20px);
//     }
//     100% {
//         transform: translate(-70px, 20px);
//     }
// `

// .wave {
//   background: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/85486/wave.svg) repeat-x;
//   position: absolute;
//   top: -198px;
//   width: 6400px;
//   height: 198px;
//   animation: wave 7s cubic-bezier( 0.36, 0.45, 0.63, 0.53) infinite;
//   transform: translate3d(0, 0, 0);
// }

// .wave:nth-of-type(2) {
//   top: -175px;
//   animation: wave 7s cubic-bezier( 0.36, 0.45, 0.63, 0.53) -.125s infinite, swell 7s ease -1.25s infinite;
//   opacity: 1;
// }

// @keyframes wave {
//   0% {
//     margin-left: 0;
//   }
//   100% {
//     margin-left: -1600px;
//   }
// }

// @keyframes swell {
//   0%, 100% {
//     transform: translate3d(0,-25px,0);
//   }
//   50% {
//     transform: translate3d(0,5px,0);
//   }
// }

const TestWave = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/85486/wave.svg'

const WaterDiv = styled.div`
  background: url(${TestWave}) repeat-x;
  height: 1179px;
  width: 6000px;
  transform: translate3d(0, 0, 0);
`

const Wave = keyframes`
  0% {
    margin-left: 0px;
  }
  100% {
    margin-left: -1600px;
  }
`

const Swell = keyframes`
  0%, 100% {
    transform: translate3d(0,-25px,0);
  }
  50% {
    transform: translate3d(0,5px,0);
  }
`

const WaterForegroundContainer = styled(animated.div)`
  z-index: 0;
  position: absolute;
  animation: ${Wave} 14s cubic-bezier(0.36, 0.45, 0.63, 0.53) infinite,
    ${Swell} 7s ease -1.25s infinite;
  width: 1370px;
  transform: translate3d(0, 0, 0);
`
const WaterBackgroundContainer = styled(animated.div)`
  z-index: -2;
  position: absolute;
  left: -10%;
  animation: ${Wave} 7s cubic-bezier(0.36, 0.45, 0.63, 0.53) infinite;
`

// class AboutPage extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             dove: false
//         }
//     }
//   render = () => {
//     const props =

//     return (
//       <>
//         <WaterForegroundContainer>
//           <WaterLayer />
//         </WaterForegroundContainer>
//         <WaterBackgroundContainer>
//           <WaterLayer />
//         </WaterBackgroundContainer>
//       </>
//     )
//   }
// }

const DivingLogo = styled(animated.div)`
  height: 170%;
  width: 170%;
  position: fixed;
  margin-left: 22.2%;
  z-index: -1;
`

const SceneContainer = styled(animated.div)``

const AboutPage = () => {
  const [dove, toggle] = useState(false)
  // assisted slide + other
  const foregroundProps = useSpring({
    top: dove ? '-50%' : '70%',
    config: config.molasses,
  })

  const backgroundProps = useSpring({
    top: dove ? '-50%' : '50%',
    config: config.molasses,
  })

  const logoProps = useSpring({
    top: dove ? '10%' : '5%',
    config: config.wobbly,
  })

  return (
    <SceneContainer onClick={() => toggle(!dove)}>
      <DivingLogo style={logoProps}>
        <Logo />
      </DivingLogo>
      <WaterForegroundContainer style={foregroundProps}>
        <WaterDiv />
      </WaterForegroundContainer>
      <WaterBackgroundContainer style={backgroundProps}>
        <WaterDiv />
      </WaterBackgroundContainer>
    </SceneContainer>
  )
}

export default AboutPage
