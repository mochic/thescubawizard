import React from 'react'

import styled from 'styled-components'
import { animated } from 'react-spring'

const MainLabelContainer = styled(animated.div)``

export const MainLabel = ({ item: { text }, key, props }) => {
  return (
    <MainLabelContainer key={key} style={props}>
      {text}
    </MainLabelContainer>
  )
}

const LabelContainer = styled(animated.span)``

export const Label = ({ item: { text }, key, props }) => {
  return (
    <LabelContainer key={key} style={props}>
      {text}
    </LabelContainer>
  )
}
