import React, { Component } from 'react'

import styled from 'styled-components'
import { animted, useSpring } from 'react-spring'
// z-index 0 is the plane of the floating logo + background
// z-index 1 is the water
// z-index 2 is the page content

const WaterSceneContainer = styled.div``

export default class WaterSceneComponent extends Component {
  render = () => {
    return <WaterSceneContainer />
  }
}
