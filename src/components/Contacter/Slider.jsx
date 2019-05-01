import React from 'react'

import styled, { keyframes } from 'styled-components'
import animated from 'react-spring'

import { MdExpandLess, MdExpandMore } from 'react-icons/md'

const Label = styled(animated.div)`
  color: white;
  font-family: roboto;
  font-size: 56px;
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

export const UpSlider = ({ item, key, props, onClick }) => {
  return (
    <>
      <Label key={key} style={props}>
        {item.text}
      </Label>
      <FadeUpIconContainer
        onClick={e => {
          e.preventDefault()
          onClick(e)
        }}
      >
        <MdExpandLess />
      </FadeUpIconContainer>
    </>
  )
}

export const DownSlider = ({ item, key, props, onClick }) => {
  return (
    <>
      <Label key={key} style={props}>
        {item.text}
      </Label>
      <FadeDownIconContainer
        onClick={e => {
          e.preventDefault()
          onClick(e)
        }}
      >
        <MdExpandMore />
      </FadeDownIconContainer>
    </>
  )
}
