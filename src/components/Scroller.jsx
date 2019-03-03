import React, { Component } from 'react'

import styled, { keyframes } from 'styled-components'

import { ScrollDarkSVG } from '../images/scroll-dark-clean.svg'
import { ScrollLightSVG } from '../images/scroll-light-clean.svg'

const ScrollerContainer = styled.div``

const LightScrollerImg = styled.div`
  height: 60px;
  margin: 0;
  border: 0;

  & svg > #scroll-dot {
    fill: #ff0000;
  }
`
const DarkScrollerImg = styled.img`
  height: 60px;
  margin: 0;
  border: 0;
`

// const ScrollLight = styled(ScrollLightSVG)`
//   & > #scroll-dot {
//     fill: #ff0000;
//   }
// `

const LightScrollerContainer = styled.div`
  z-index: 1;
  position: absolute;
`

const DarkScrollerContainer = styled.div`
  z-index: 0;
`

const Scroller = () => {
  return (
    <>
      <LightScrollerContainer>
        <ScrollLightSVG />
      </LightScrollerContainer>
      <DarkScrollerContainer>
        <DarkScrollerImg src={ScrollDarkSVG} />
      </DarkScrollerContainer>
    </>
  )
}

export default Scroller
