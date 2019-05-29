import React from 'react'

import { animated } from 'react-spring'
import styled from 'styled-components'

import Logo from './Logo'

const BackgroundContainer = styled(animated.div)`
  background: black;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const BackgroundGradient = styled(animated.div)`
  position: fixed;
  top: 0;
  left: 0px;
  height: 100%;
  width: 100%;
  background: linear-gradient(
    0deg,
    rgba(1, 0, 0, 0) 0%,
    rgba(74, 174, 176, 1) 100%
  );
  z-index: 1;
  opacity: 0.8;
`

const ImageContainer = styled(animated.div)``

const FilterContainer = styled(animated.div)``

const AnimFeTurbulence = animated('feTurbulence')
const AnimFeDisplacementMap = animated('feDisplacementMap')

// export default ({ filterSprings }) => (
//   <BackgroundContainer>
//     <BackgroundGradient />
//     {filterSprings.map(
//       ({ key, props: { freq, scale, transform, opacity } }) => (
//         <>
//           {/* <defs>
//             <filter id="water">
//               <AnimFeTurbulence
//                 type="fractalNoise"
//                 baseFrequency={freq}
//                 numOctaves="1.5"
//                 result="TURB"
//                 seed="8"
//               />
//               <AnimFeDisplacementMap
//                 xChannelSelector="R"
//                 yChannelSelector="G"
//                 in="SourceGraphic"
//                 in2="TURB"
//                 result="DISP"
//                 scale={scale}
//               />
//             </filter>
//           </defs> */}
//           <Logo key={key} style={{ transform, opacity }} />
//         </>
//       )
//     )}
//   </BackgroundContainer>
// )

export default ({ filterSprings }) => (
  <BackgroundContainer>
    <BackgroundGradient />
    {filterSprings.map(
      ({ key, props: { freq, scale, transform, opacity } }) => (
        <Logo key={key} style={{ transform, opacity }} />
      )
    )}
  </BackgroundContainer>
)
