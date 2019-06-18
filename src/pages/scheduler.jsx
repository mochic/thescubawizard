import React, { useState, useEffect } from 'react'

import styled from 'styled-components'
import { animated, useSpring, config } from 'react-spring'

import debounce from 'lodash/debounce'

import VisibilitySensor from 'react-visibility-sensor'
import Logo from '../components/Logo'
import SchedulePage from '../components/ScheduleFinal'
import Navigator from '../components/Navigator'

// short landing page for quick switch trick?
const LandingPage = styled(animated.div)`
  background: #2f2f2f;
  height: 50vh;
  width: 100vw;
`

const NavigationButton = styled(animated.div)``

const LandingBackgroundNavitationThing = ({ isLanding }) => {
  // probably put this in browser
  // always partially shown, visibility just triggers the logo icon to zoom in fade etc, and other shit...
  const logoProps = useSpring({
    from: { opacity: 0 },
    to: { opacity: isLanding ? 1 : 0 },
  })
  const titleProps = useSpring({
    from: { opacity: 0 },
    to: { opacity: isLanding ? 1 : 0 },
  })
  const navButtonProps = useSpring({
    from: { opacity: 0 },
    to: { opacity: isLanding ? 1 : 0 },
  })
  return (
    <>
      <div style={logoProps}>logo goes here</div>
      <div style={titleProps}>title goes here</div>
      <NavigationButton style={navButtonProps}>schedule</NavigationButton>
    </>
  )
}

// const SchedulingPageContainer = styled(animated.div)`
//   height: 100vh;
//   width: 100vw;
//   background: #2f2f2f;
// `

// const SchedulingPage = ({ show }) => {
//   const headerProps = useSpring({ opacity: show ? 1 : 0 })

//   return (
//     <SchedulingPageContainer>
//       <animated.div style={headerProps}>wut is this</animated.div>
//     </SchedulingPageContainer>
//   )
// }

const NavigationContainer = styled(animated.div)``

const WierdThingContainer = styled(animated.div)`
  position: fixed;
  text-align: center;
  width: 716px;
  height: 707px;
`

const WierdThing = ({ percent }) => {
  console.log(percent)
  return (
    <WierdThingContainer
      name={`weird-thing`}
      style={{ filter: `blur(${20 * percent}px)` }}
    >
      <Logo />
    </WierdThingContainer>
  )
}

const Containr = styled(animated.div)`
  text-align: center;
  width: 716px;
  height: 707px;
  position: fixed;
  top: 0px;
  left: 0px;
`

const LandingLogo = ({ percent }) => {
  const containrProps = useSpring({
    from: { filter: `blur(20px)` },
    to: { filter: `blur(${percent * 20}px)` },
    config: { ...config.wobbly, duration: percent < 1 ? 1500 : null },
  })

  const wiggleProps = useSpring({})

  return (
    <Containr style={containrProps}>
      <Logo />
    </Containr>
  )
}

const MainContainr = styled(animated.div)`
  position: absolute;
  height: 150vh;
  width: 100vw;

  background: linear-gradient(
    180deg,
    rgba(39, 167, 125, 0.9) 0%,
    rgba(12, 48, 36, 0.9) 43.23%,
    rgba(1, 0, 0, 0.9) 91.15%
  );
  z-index: 1;
  top: 0px;
`

// const NavigatorContainr = styled(animated.div)`
//   position: fixed;
//   bottom: 80%;
//   z-index: 100000;
//   background: red;
// `

export default () => {
  const [windowsRevealed, setRevealed] = useState(0)
  const check = debounce(e => {
    console.log(
      window.scrollY,
      window.innerHeight,
      window.scrollY / window.innerHeight
    )
    setRevealed(window.scrollY / window.innerHeight)
  }, 10)

  useEffect(() => {
    window.addEventListener('scroll', check)
    return () => {
      window.removeEventListener('scroll', check)
    }
  })
  return (
    <>
      <LandingPage>
        {/* <LandingLogo percent={windowsRevealed} /> */}
      </LandingPage>
      <SchedulePage show={windowsRevealed >= 0.5} />
      <Navigator />
      {/* <MainContainr /> */}
    </>
  )
}
