import React, { Component } from 'react'

import PropTypes from 'prop-types'
import styled from 'styled-components'
import { animated, useSpring } from 'react-spring'

const SalutionContainer = styled(animated.div)``

const Salutation = () => <SalutionContainer>Hey</SalutionContainer>

const DiveAvatarContainer = styled(animated.div)``

const DiveAvatar = () => <DiveAvatarContainer>diver</DiveAvatarContainer>

const IntroductionTextContainer = styled(animated.div)``

// I even got my degree in diving from the Diver's institute here in Seattle.
const IntroductionText = () => (
  <IntroductionTextContainer>
    My name's Nash Lapping. I'm an ACDE certified diver with more than 100
    working hours in the Puget Sound.
  </IntroductionTextContainer>
)

const IntroductionContainer = styled(animated.div)``

const Introduction = ({ isVisible }) => {
  const props = useSpring({ to: { opacity: isVisible ? 1 : 0 }, delay: 3000 })
  console.log(isVisible, props)
  return (
    <IntroductionContainer style={props}>
      <Salutation />
      <DiveAvatar />
      <IntroductionText />
    </IntroductionContainer>
  )
}

Introduction.propTypes = {
  isVisible: PropTypes.bool,
}

Introduction.defaultProps = {
  isVisible: false,
}

export default Introduction
