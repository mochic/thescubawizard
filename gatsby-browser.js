import React, { useState, useEffect, useRef } from 'react'

// import navigate from 'gatsby'
// import posed, { PoseGroup } from 'react-pose'
import styled, {
  createGlobalStyle,
  keyframes,
  ThemeProvider,
} from 'styled-components'

import Logo from './src/components/AlternateLogo'
import { animated, useSpring, useTransition, config } from 'react-spring'

import { FaChevronDown } from 'react-icons/fa'

const GlobalStyle = createGlobalStyle`
    html, body {
    }
    body {
        margin: 0;
        padding: 0;
    }
`

const LogoContainer = styled.div`
  height: 170%;
  width: 170%;
  position: fixed;
  margin-left: 22.2%;
  margin-top: 22%;
  z-index: -1;
`

const SliderStackLayout = styled(animated.div)``

const SliderLayoutContainer = styled(animated.div)``

const FadeDownKeys = keyframes`
    from {
        opacity: 1;
        transform: translate3d(0,-16px,0);
    } to {
        opacity: 0;
        transform: translate3d(0,0px,0);
    }
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

// const

export const replaceComponentRenderer = ({ props, ...other }) => (
  <>
    <GlobalStyle />
    {/* <LogoContainer>
      <Logo />
    </LogoContainer> */}
    {React.createElement(props.pageResources.component, props)}
    {/* <NavigationHint /> */}
  </>
)
