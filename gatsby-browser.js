import React from 'react'

// import navigate from 'gatsby'
// import posed, { PoseGroup } from 'react-pose'
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components'

import Logo from './src/components/AlternateLogo'
import { animated } from 'react-spring'

// import Logo from './src/components/Logo'
// import BackgroundImage from './src/components/BackgroundImage'
// import Navigation, { NavigationContainer } from './src/components/Navigation'

// const DarkTheme = {
//   colors: {
//     highlight: `white`,
//   },
// }

const GlobalStyle = createGlobalStyle`
    html, body {
    }
    body {
        margin: 0;
        padding: 0;
    }
`
// // const LogoContainer = styled.div`
// //   height: 50%;
// //   width: 50%;
// //   background: blue;
// // `

// // const BackgroundContainer = styled.div`
// //   align-content: center;
// //   align-items: center;
// //   display: flex;
// //   justify-content: center;
// //   left: 0px;
// //   position: fixed;
// //   top: 0px;
// //   height: 100%;
// //   width: 100%;
// //   z-index: 100;
// //   background: red;
// // `

// const LogoContainer = styled.div`
//   height: 70%;
//   width: 70%;
// `

// const BackgroundContainer = styled.div`
//   left: 0px;
//   position: fixed;
//   top: 0px;
//   height: 100%;
//   width: 100%;
//   z-index: -1;
//   background: black;
//   padding: 6% 5% 5% 23%; /* top right bottom left */
// `

// const Background = () => (
//   <BackgroundContainer>
//     <LogoContainer>
//       <Logo />
//     </LogoContainer>
//   </BackgroundContainer>
// )

// const BrowserContainer = styled.div`
//   height: 100vh;
//   width: 100vw;
//   display: flex;
//   justify-content: center;
//   position: fixed;
//   align-items: center;

//   ${NavigationContainer} {
//     height: 50%;
//   }
// `

// const PageContainer = styled.div`
//   position: relative;
//   display: flex;
//   width: 50%;
//   height: 70%;
//   padding: 4%;
//   align-items: center;
// `

// const Transition = posed.div({
//   enter: { beforeChildren: true, delay: 300, opacity: 1 },
//   exit: { opacity: 0 },
// })

const LogoContainer = styled.div`
  height: 170%;
  width: 170%;
  position: fixed;
  margin-left: 22.2%;
  margin-top: 22%;
  z-index: -1;
`

// const SliderLayoutContainer = styled(animated.div)``

// const SliderLayout = ({onClick}) => {
//   return
// }

const SliderStackLayout = styled(animated.div)``

const SliderLayoutContainer = styled(animated.div)``

export const replaceComponentRenderer = ({ props, ...other }) => (
  <>
    <GlobalStyle />
    {/* <LogoContainer>
      <Logo />
    </LogoContainer> */}
    {React.createElement(props.pageResources.component, props)}
  </>
)
