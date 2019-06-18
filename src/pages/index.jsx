import React, { useState, useEffect } from 'react'

import styled from 'styled-components'
import { animated, useSpring } from 'react-spring'

import debounce from 'lodash/debounce'

import VisibilitySensor from 'react-visibility-sensor'
import Logo from '../components/Logo'

// short landing page for quick switch trick?
const LandingPage = styled(animated.div)`
  background: red;
  height: 20vh;
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

const SchedulingPageContainer = styled(animated.div)`
  background: green;
  height: 100vh;
  width: 100vw;
`

const SchedulingPage = ({ show }) => {
  const headerProps = useSpring({ opacity: show ? 1 : 0 })

  return (
    <SchedulingPageContainer>
      <animated.div style={headerProps}>wut is this</animated.div>
    </SchedulingPageContainer>
  )
}

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

// export default () => {
//   const [revealed, setRevealed] = useState([])
//   const check = debounce(e => {
//     console.log(e)
//   }, 100)

//   useEffect(() => {
//     window.addEventListener('scroll', check)
//     return () => {
//       window.removeEventListener('scroll', check)
//     }
//   })
//   return (
//     <>
//       <LandingBackgroundNavitationThing isLanding={!revealed} />
//       <LandingPage />
//       <WierdThing wut={}/>
//       <VisibilitySensor
//         active={!revealed.includes(`landing`)}
//         scrollCheck
//         partialVisibility={`bottom`}
//         onChange={isVisible => {
//           if (isVisible) {
//             setRevealed([...revealed, `landing`])
//           }
//         }}
//       >
//         <SchedulingPage show={revealed.includes(`landing`)} />
//       </VisibilitySensor>
//     </>
//   )
// }

export default () => {
  const [revealed, setRevealed] = useState(0)
  const check = debounce(e => {
    console.log(window.scrollY, window.innerHeight)
    setRevealed(window.scrollY / window.innerHeight)
  }, 100)

  useEffect(() => {
    window.addEventListener('scroll', check)
    return () => {
      window.removeEventListener('scroll', check)
    }
  })
  return (
    <>
      <LandingBackgroundNavitationThing isLanding={!revealed} />
      <LandingPage />
      <WierdThing percent={revealed} />
      <div style={{ height: `100vh`, color: `blue` }} />
    </>
  )
}
