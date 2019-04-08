import React from 'react'

import styled from 'styled-components'
import animated, { useTransition } from 'react-spring'

import InfoItem from '.InfoItem'

const InfoItemContainer = styled(animated.div)``

export default () => {
  const transitions = useTransition(infoItems, infoItem => infoItem.key, {})
  return transitions.map(({ item, key, props }) => {
    return <InfoItemContainer />
  })
}
