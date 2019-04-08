import React, { useEffect, useRef, useState } from 'react'

import styled from 'styled-components'
import { animated, useTransition } from 'react-spring'

const SERVICES = [
  [
    { key: `text-chunk-0`, text: `hull cleaning` },
    // { key: `text-chunk-1`, text: `` },
  ],
  [
    { key: `text-chunk-2`, text: `zinc replacement` },
    // { key: `text-chunk-3`, text: `` },
  ],
  [
    { key: `text-chunk-4`, text: `lost item recovery` },
    // { key: `text-chunk-5`, text: `` },
  ],
]

const Text = styled(animated.div)`
  color: #ffb800;
  font-family: roboto;
  position: absolute;
  width: 100%;
  display: flex;
  flex-direction: row;
`

const SlideInText = ({ updateInterval }) => {
  const [items, set] = useState([])
  const transitions = useTransition(items, item => item.key, {
    from: { transform: `translate3d(0,40px,0)`, opacity: 0 },
    enter: { transform: `translate3d(0,0,0)`, opacity: 1 },
    leave: { opacity: 0 },
  })
  const serviceIndex = useRef(0)
  let currentServiceIndex = serviceIndex.current
  useEffect(() => {
    serviceIndex.current = currentServiceIndex
  })
  currentServiceIndex += 1
  setTimeout(() => {
    set(SERVICES[currentServiceIndex % SERVICES.length])
  }, updateInterval)

  return transitions.map(({ item, props, key }) => {
    return (
      <Text key={key} style={props}>
        {item.text}
      </Text>
    )
  })
}

SlideInText.defaultProps = {
  updateInterval: 2000,
}

export default SlideInText
