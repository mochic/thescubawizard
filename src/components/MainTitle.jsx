import React from 'react'

import styled from 'styled-components'
import { animated, useTransition } from 'react-spring'

import TitleSVG from '../images/main-title.svg'

const SVGTitle = styled(animated.img)`
  height: 245px;
  width: 220px;
  min-width: 220px;
  object-fit: cover;
  margin: 0;
  padding: 0;
`

const SVGContainer = styled(animated.svg)``

const BorderPath = styled(animated.path)`
  fill: none;
  stroke: white;
  stroke-width: 5px;
`

const topPath = `M0 2.5L220 2.5`
const leftPath = `M2.5 0L2.5 245`
const bottomPath = `M0 242.5L220 242.5`
const rightPath = `M217.5 0L217.5 245`

const TitleChunk = styled(animated.text)`
  font-size: 2.5em;
  text-anchor: left;
  font-family: roboto;
  stroke: white;
  fill: white;
  font-weight: 300;
`

export default ({
  dasharray,
  dashoffset,
  titleBackgroundColor,
  titleOpacity,
}) => {
  return (
    <>
      <SVGContainer viewBox="0 0 220 245" width="220" height="245">
        <SVGTitle src={TitleSVG} height="245px" width="220px" x="0" y="0" />
        <BorderPath
          strokeDasharray={1000}
          strokeDashoffset={dashoffset}
          d={topPath}
        />
        <BorderPath
          strokeDasharray={1000}
          strokeDashoffset={dashoffset}
          d={bottomPath}
        />
        <BorderPath
          strokeDasharray={1000}
          strokeDashoffset={dashoffset}
          d={leftPath}
        />
        <BorderPath
          strokeDasharray={1000}
          strokeDashoffset={dashoffset}
          d={rightPath}
        />
        <TitleChunk x={`20%`} y={`35%`}>{`the`}</TitleChunk>
        <TitleChunk x={`20%`} y={`55%`}>{`scuba`}</TitleChunk>
        <TitleChunk x={`20%`} y={`75%`}>{`wizard`}</TitleChunk>
      </SVGContainer>
    </>
  )
}
