import React, { useRef, useState } from 'react'

import { animated, useChain, useTransition, useSpring } from 'react-spring'
import styled from 'styled-components'
import VisibilitySensor from 'react-visibility-sensor'

// const Page = styled(animated.div)`
//   height: 100vh;
//   width: 100vw;
// `

// const Container = styled(animated.div)`
//   background: green;
// `

// export default () => {
//   const [revealed, setRevealed] = useState([0])

//   //   const transitions = useTransition(items, null, {
//   //     to: [{ pageTransform: `` }],
//   //   })

//   // const Page0Spring = null
//   // const page1Spring = null

//   const containerSpringRef = useRef()
//   const containerSpring = useSpring({
//     ref: containerSpringRef,
//     from: { transform: `translate3d(0,0vh,0)` },
//     to: { transform: `translate3d(0,0vh,0)` },
//   })

//   const landingPageSpringRef = useRef()
//   const landingPageSpring = useSpring({
//     ref: landingPageSpringRef,
//     from: { opacity: 0 },
//     to: { opacity: revealed.contains(0) ? 1 : 0 },
//   }) // we can add other springs separately supply them to same page

//   const schedulingPageSpringRef = useRef()
//   const schedulingPageSpring = useSpring({
//     from: { opacity: 0 },
//     to: { opacity: revealed.contains(0) ? 1 : 0 },
//   })

//   // useChain([containerSpringRef, landingPageSpringRef, page1SpringRef, ])

//   return (
//     <Container>
//       <LandingPage springs={[landingPageSpring]} />
//       <SchedulingPage springs={[schedulingPageSpring]} />
//     </Container>
//   )
// }

const Page = styled(animated.div)`
  height: 100vh;
  width: 100vw;
  background: black;
  font-family: roboto;
`

const Header = styled(animated.div)`
  font-weight: 900;
  font-size: 60px;
  color: white;
  line-height: 1;
`

const Divider = styled(animated.div)`
  background: #ffb800;
  height: 7px;
  margin-top: 10%;
  margin-bottom: 10%;
`

const EmailInput = styled(animated.input)``

const PhoneInput = styled(animated.input)``

export default () => {
  const [visible, setVisible] = useState(false)
  const { headerOpacity, headerTransform, dividerWidth } = useSpring({
    from: {
      headerOpacity: 0,
      headerTransform: `translate3d(-40px,0,0)`,
      dividerWidth: `0%`,
    },
    to: [
      {
        headerOpacity: visible ? 1 : 0,
        headerTransform: visible
          ? `translate3d(0px,0,0)`
          : `translate3d(-40px,0,0)`,
        dividerWidth: visible ? `100%` : `0%`,
      },
    ],
  })
  return (
    <VisibilitySensor onChange={() => setVisible(true)}>
      <Page>
        <Header style={{ opacity: headerOpacity, transform: headerTransform }}>
          schedule
        </Header>
        <Divider style={{ width: dividerWidth }} />
        <PhoneInput placeholder={`phone`} />
        <EmailInput placeholder={`email`} />
      </Page>
    </VisibilitySensor>
  )
}
