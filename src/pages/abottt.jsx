import React, { Component } from 'react'

import styled from 'styled-components'
import { animated, useSpring } from 'react-spring'

import WaterLayer from '../components/WaterLayer'

// icon is -1 zindex
// background is -2 zindex
// foreground is 0 zindex
// page content is 1 zindex typically?

const WaterForegroundContainer = styled(animated.div)`
  z-index: 0;
  position: absolute;
  top: 90%;
  left: -30%;
`
const WaterBackgroundContainer = styled(animated.div)`
  z-index: -2;
  position: absolute;
  top: 82%;
  left: -70%;
`

class AboutPage extends Component {
  render = () => {
    return (
      <>
        <WaterForegroundContainer>
          <WaterLayer />
        </WaterForegroundContainer>
        <WaterBackgroundContainer>
          <WaterLayer />
        </WaterBackgroundContainer>
      </>
    )
  }
}

export default AboutPage
