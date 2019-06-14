import React, { useState, useRef, useEffect } from 'react'

import styled from 'styled-components'
import { animated, useSpring, useTransition, config } from 'react-spring'

import VisibilitySensor from 'react-visibility-sensor'

import Landing from '../components/LandingFuture2'
import Schedule from '../components/ScheduleFuture'

const Pages = [{ id: 0, type: `landing` }, { id: 1, type: `schedule` }]

const PageContainer = styled(animated.div)`
  height: 100vh;
  width: 100vw;
`

// export default () => {
//   //   const [currentPage, setCurrentPage] = useState('landing')
//   //   const [revealed, setRevealed] = useState(['landing'])

//   const pageRef = useRef()

//   return (
//     <>
//       <PageContainer>
//         <Landing show={true} />
//       </PageContainer>
//       <VisibilitySensor>
//         {({ isVisible }) => {
//           console.log('visible', isVisible)
//           return (
//             <PageContainer>{isVisible ? <Schedule /> : <></>}</PageContainer>
//           )
//         }}
//       </VisibilitySensor>
//       {/* <PageContainer ref={pageRef} />
//       <VisibilitySensor containment={pageRef}>
//         {({ isVisible }) => {
//           console.log('visible', isVisible)
//           return isVisible ? <Schedule /> : <></>
//         }}
//       </VisibilitySensor> */}
//     </>
//   )
// }

export default () => {
  //   const [currentPage, setCurrentPage] = useState('landing')
  //   const [revealed, setRevealed] = useState(['landing'])

  const pageRef = useRef()

  return (
    <>
      <PageContainer>
        <Landing show={true} />
      </PageContainer>
      <PageContainer>
        <Schedule />
      </PageContainer>
    </>
  )
}
