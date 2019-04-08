import React from 'react'

import styled from 'styled-components'
import { animated, useSpring } from 'react-spring'
import VisibilitySensor from 'react-visibility-sensor'

const introduction = [
  `Hey, ``My name is Nash Lapping`,
  `I'm an ACDE certified diver with `,
  `more than 100 working hours in the Puget Sound`,
]

const Salutation = styled.div``

const RevealingContentContainer = styled.div``

const RevealingIntroduction = ({ isVisible }) => {
  const props = useSpring({ opacity: isVisible ? 1 : 0 })

  return (
    <RevealingContentContainer style={props}>
      {introduction}
    </RevealingContentContainer>
  )
}

const ContentContainer = styled.div``

export default () => {
  return (
    <ContentContainer>
      <VisibilitySensor>
        <AboutContent />
      </VisibilitySensor>
    </ContentContainer>
  )
}
