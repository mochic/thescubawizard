// import React, { useState, useRef } from 'react'

// import { animated, useSpring, useTransition } from 'react-spring'
// import styled, { keyframes } from 'styled-components'

// import { MdExpandLess } from 'react-icons/md'

// const HINT_HEIGHT = 10

// const PAGE_HEIGHT = 100

// const FadeUpKeys = keyframes`
//   from {
//     opacity: 1;
//     transform: translate3d(0,0px,0);
//   }
//   to {
//     opacity: 0;
//     transform: translate3d(0,-10px,0);
//   }
// `

// const Icon = styled(animated.div)`
//   animation: ${FadeUpKeys} 3s ease-out infinite;
//   animation-delay: 5s;
//   color: white;
//   font-size: 36px;
//   margin-bottom: 10px;
// `

// const SliderContainer = styled(animated.div)`
//   font-family: roboto;
//   height: ${PAGE_HEIGHT + HINT_HEIGHT}vh;
//   width: 100vw;
//   background: red;
// `

// const PageContainer = styled(animated.div)`
//   height: ${PAGE_HEIGHT}vh;
//   width: 100vw;
// `

// const HintContainer = styled(animated.div)`
//   height: ${HINT_HEIGHT}vh;
//   width: 100vw;
//   background: green;
//   color: white;
//   padding-right: 10%;
//   padding-left: 6%;
//   padding-top: 8%;
//   font-size: 1.8em;
//   font-weight: 100;
//   display: flex;
//   justify-content: space-between;
// `

// const Header = styled(animated.div)`
//   color: white;
//   font-family: roboto;
// `

// const Body = styled(animated.div)``

// const Footer = styled(animated.div)``

// export default () => {
//   const [expanded, setExpanded] = useState(false)
//   const schedulerTransitionRef = useRef()
//   const schedulerTransition = useTransition(expanded, null, {
//     ref: schedulerTransitionRef,
//     from: {
//       sliderTransform: `translate3d(0,-${HINT_HEIGHT}vh,0)`,
//       headerOpacity: 0,
//       headerTransform: `translate3d(0,-40px,0)`,
//       bodyOpacity: 0,
//       footerOpacity: 0,
//     },
//     enter: [
//       { sliderTransform: `translate3d(0,-${PAGE_HEIGHT + HINT_HEIGHT}vh,0)` },
//       { headerOpacity: 1, headerTransform: `translate3d(0,0px,0)` },
//       { bodyOpacity: 1 },
//       { footerOpacity: 1 },
//     ],
//   })

//   const {
//     props: {
//       sliderTransform,
//       headerOpacity,
//       headerTransform,
//       bodyOpacity,
//       footerOpacity,
//     },
//   } = schedulerTransition[0]

//   return (
//     <>
//       {
//         <SliderContainer style={{ transform: sliderTransform }}>
//           <HintContainer
//             onClick={e => {
//               return setExpanded(true)
//             }}
//           >
//             or schedule a chat
//             <Icon>
//               <MdExpandLess />
//             </Icon>
//           </HintContainer>
//           <PageContainer>
//             <Header
//               style={{ opacity: headerOpacity, transform: headerTransform }}
//             >
//               schedule
//             </Header>
//             <Body style={{ opacity: bodyOpacity }}>placeholder</Body>
//             <Footer style={{ opacity: footerOpacity }}>placeholder</Footer>
//           </PageContainer>
//         </SliderContainer>
//       }
//     </>
//   )
// }

import React from 'react'

import { animated } from 'react-spring'
import styled, { keyframes } from 'styled-components'

import { MdExpandLess } from 'react-icons/md'

export const HINT_HEIGHT = 10
export const PAGE_HEIGHT = 100

const FadeUpKeys = keyframes`
  from {
    opacity: 1;
    transform: translate3d(0,0px,0);
  }
  to {
    opacity: 0;
    transform: translate3d(0,-10px,0);
  }
`

const Icon = styled(animated.div)`
  animation: ${FadeUpKeys} 3s ease-out infinite;
  animation-delay: 5s;
  color: white;
  font-size: 36px;
  margin-bottom: 10px;
`

const SliderContainer = styled(animated.div)`
  font-family: roboto;
  height: ${PAGE_HEIGHT + HINT_HEIGHT}vh;
  width: 100vw;
  background: red;
  position: fixed;
  top: 100vh;
  left: 0;
`

const PageContainer = styled(animated.div)`
  overflow: hidden;
  height: ${PAGE_HEIGHT}vh;
  width: 100vw;
  display: grid;
  grid-template-rows: 1fr 3fr 1fr;
  grid-template-areas:
    'header'
    'body'
    'footer';
`

const HintContainer = styled(animated.div)`
  height: ${HINT_HEIGHT}vh;
  width: 100vw;
  background: green;
  color: white;
  padding-right: 10%;
  padding-left: 6%;
  padding-top: 8%;
  font-size: 1.8em;
  font-weight: 100;
  display: flex;
  justify-content: space-between;
`

const Header = styled(animated.div)`
  color: white;
  font-family: roboto;
  grid-area: header;
`

const Body = styled(animated.div)`
  background: blue;
  grid-area: body;
`

const Footer = styled(animated.div)`
  background: yellow;
  grid-area: footer;
`

export default ({ setExpanded, spring }) => {
  const {
    sliderTransform,
    hintOpacity,
    headerOpacity,
    headerTransform,
    bodyOpacity,
    bodyTransform,
    footerOpacity,
    footerTransform,
  } = spring

  return (
    <SliderContainer style={{ transform: sliderTransform }}>
      <HintContainer
        style={{ opacity: hintOpacity }}
        onClick={e => {
          return setExpanded(true)
        }}
      >
        or schedule a chat
        <Icon>
          <MdExpandLess />
        </Icon>
      </HintContainer>
      <PageContainer>
        <Header style={{ opacity: headerOpacity, transform: headerTransform }}>
          schedule
        </Header>
        <Body style={{ opacity: bodyOpacity, transform: bodyTransform }}>
          body
        </Body>
        <Footer
          onClick={e => {
            return setExpanded(false)
          }}
          style={{ opacity: footerOpacity, transform: footerTransform }}
        >
          footer
        </Footer>
      </PageContainer>
    </SliderContainer>
  )
}
