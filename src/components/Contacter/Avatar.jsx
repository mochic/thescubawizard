import React from 'react'

import styled from 'styled-components'
import animated, { useTransition } from 'react-spring'

import Icon from './Icon'
import NashDiverSVG from './assets/nash-diver.svg'

const AvatarIcon = styled(Icon)``

const AvatarContainer = styled(animated.div)``

export default ({ children }) => {
  const transition = useTransition()
  return (
    <>
      <AvatarContainer key={transition.key} style={transition.props}>
        <AvatarIcon icon={NashDiverSVG} />
      </AvatarContainer>
    </>
  )
}
