import React, { Component } from 'react'

import styled from 'styled-components'

import WaterSVG from '../images/water-darker.svg'

const CoverImage = styled.img`
  height: 860px;
  width: 100vh;
  object-fit: cover;
  margin: 0;
  padding: 0;
`

// simple svgs are more efficient just packed in?

const ForegroundWater = () => (
  <>
    <CoverImage src={WaterSVG} />
  </>
)

export default ForegroundWater
