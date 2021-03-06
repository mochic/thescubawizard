import React, { Component } from 'react'

import styled from 'styled-components'

import WaterSVG from '../images/water-darker-longer.svg'

const CoverImage = styled.img`
  height: 1000px;
  width: 1000px;
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
