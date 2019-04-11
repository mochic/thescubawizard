import React, { useState } from 'react'

import styled, { keyframes } from 'styled-components'
import { animated, useSpring } from 'react-spring'

import { MdExpandLess, MdExpandMore } from 'react-icons/md'

// const IconSVG = styled.svg`
//   display: inner-block;
//   verticalalign: middle;
// `

// const IconPath = styled.path`
//   fill: ${props => props.iconFill};
// `

// const Icon = ({ icon, size, color }) => {
//   return (
//     <IconSVG width={`${size}px`} height={`${size}px`} viewBox="0 0 1024 1024">
//       <IconPath d={icon} iconFill={color} />
//     </IconSVG>
//   )
// }

// Icon.defaultProps = {
//   size: 16,
// }

const FadeDownKeys = keyframes`
  from {
    opacity: 1;
    margin-top: 20px;
  }

  to {
    opacity: 0;
    margin-top: 30px; 
  }
`

const FadeUpKeys = keyframes`
  from {
    opacity: 1;
    margin-top: 20px;
  }

  to {
    opacity: 0;
    margin-top: 10px; 
  }
`

const FadeDownIconContainer = styled(animated.div)`
  color: red;
  text-align: center;
  font-size: 50px;
  height: 50px;
  width: 50px;
  margin-left: 20px;
  margin-right: 20px;

  animation: ${FadeDownKeys} 3s ease-out infinite;
`

const FadeUpIconContainer = styled(animated.div)`
  color: red;
  text-align: center;
  font-size: 50px;
  height: 50px;
  width: 50px;
  margin-left: 20px;
  margin-right: 20px;

  animation: ${FadeUpKeys} 3s ease-out infinite;
`

const SliderContainer = styled(animated.div)`
  background: blue;
  display: flex;
  flex-direction: row-reverse;
  width: 100%;
`

const Slider = ({ children, onClick }) => (
  <SliderContainer onClick={onClick}>{children}</SliderContainer>
)

const LayoutContainer = styled(animated.div)`
  background: black;
  color: white;
  height: 90vh;
  width: 100vw;
`

const Container = styled(animated.div)`
  position: fixed;
  left: 0;
  top: 90vh;
  min-height: 90vh;
  max-height: 90vh;

  ${SliderContainer} {
    height: 15%;
    max-height: 10vh;
    min-height: 10vh;
    overflow: hidden;
  }
`

const SlidingLayout = ({ children }) => {
  const [slid, slide] = useState(false)
  const props = useSpring({
    transform: slid ? `translate3d(0,-100vh,0)` : `translate3d(0,0,0)`,
  })
  return (
    <Container style={props}>
      <Slider
        onClick={() => {
          slide(!slid)
          console.log('clicked!')
        }}
      >
        <FadeUpIconContainer>
          <MdExpandLess />
          <MdExpandLess />
        </FadeUpIconContainer>
      </Slider>
      <LayoutContainer>{children}</LayoutContainer>
      <Slider onClick={() => slide(!slid)}>
        <FadeDownIconContainer>
          <MdExpandMore />
          <MdExpandMore />
        </FadeDownIconContainer>
      </Slider>
    </Container>
  )
}

export default SlidingLayout
