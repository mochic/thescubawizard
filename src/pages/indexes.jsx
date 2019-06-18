// import React, { useState, useEffect } from 'react'

// import styled from 'styled-components'
// import { animated } from 'react-spring'

// import VisibilitySensor from 'react-visibility-sensor'

// import Landing from '../components/LandingTemp'

// const LandingContainer = styled(animated.div)`
//   height: 100vh;
//   width: 100vw;
//   top: 0vh;
//   left: 0vw;
//   position: fixed;
//   z-index: 1000;
// `

// const ScheduleContainer = styled(animated.div)`
//   height: 100vh;
//   width: 100vw;
//   background: #f2f2f2;
//   top: 100vh;
//   left: 0vw;
//   position: fixed;
// `

// const BackgroundGradient = styled(animated.div)`
//   background: linear-gradient(180deg, #2c9193 0%, #010000 100%);
//   z-index: -3;
//   height: 100vh;
//   width: 100vw;
//   position: fixed;
//   top: 0px;
//   left: 0px;
// `

// export default () => {
//   // const [revealed, setRevealed] = useState([])

//   // const listener = e => {}

//   // useEffect(() => {
//   //   window.addEventListener('scroll', listener)
//   //   return () => {
//   //     window.removeEventListener('scroll', listener)
//   //   }
//   // })

//   return (
//     <>
//       <BackgroundGradient />
//       <LandingContainer>
//         <Landing show={true} />
//       </LandingContainer>
//       <VisibilitySensor onChange={e => setRevealed(['schedule', ...revealed])}>
//         {/* <ScheduleContainer show={revealed.includes('schedule')} /> */}
//       </VisibilitySensor>
//     </>
//   )
// }
