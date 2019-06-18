import React, { useState } from 'react'

import styled from 'styled-components'
import { animated, useSpring, useTransition, config } from 'react-spring'

import { FaChevronDown } from 'react-icons/fa'

const CenteringContainr = styled(animated.div)`
  background: red;
  text-align: center;
`

const ScheduleHintContainer = styled(animated.div)`
  color: #f2f2f2;
  position: fixed;
  top: 91.5%;
  left: 0%;
  width: 100%;
`

const ScheduleHintLabel = styled(animated.div)`
  font-family: roboto;
  font-weight: 300;
  color: #2f2f2f;
  text-align: center;
  font-size: 20px;
  line-height: 28px;
`

const ScheduleHintIconContainer = styled(animated.div)`
  font-size: 24px;
  color: #2f2f2f;
  text-align: center;
`

const NavigationHint = () => {
  const [page, setPage] = useState([])

  setTimeout(() => setPage([{ key: `page-index-0`, name: `schedule` }]))

  const pageHintTransitions = useTransition(page, page => page.key, {
    from: { opacity: 0, transform: `translate3d(0,40px,0)` },
    enter: { opacity: 1, transform: `translate3d(0,0px,0)` },
    leave: { opacity: 0, transform: `translate3d(0,-40px,0)` },
    config: config.slow,
    delay: 2000,
  })

  return (
    <>
      {pageHintTransitions.map(({ key, props, item: { name } }) => (
        <ScheduleHintContainer key={key} style={props}>
          <ScheduleHintLabel>{name}</ScheduleHintLabel>
          <ScheduleHintIconContainer>
            <FaChevronDown />
          </ScheduleHintIconContainer>
        </ScheduleHintContainer>
      ))}
    </>
  )
}

export default ({ currentRoute, nextRoute }) => {
  return <NavigationHint />
}
