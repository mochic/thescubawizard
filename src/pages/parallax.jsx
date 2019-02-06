import React from 'react'
import ReactDOM from 'react-dom'
import { Parallax, ParallaxLayer } from 'react-spring/addons'

import styled from 'styled-components'

import Logo from '../components/Logo'
import LogoWithBackground from '../components/LogoWithBackground'

import Services from '../components/Services'
import { FaFileExcel } from 'react-icons/fa'

const TitleContainer = styled.div`
  width: 50%;
  font-size: 36px;
  font-family: roboto mono;
  margin-left: 10%;
`

const OnColorTitle = styled.div`
  color: white;
  padding-top: 8%;
  padding-bottom: 8%;
`

// const OffColorTitle = styled.div`
//   color: #39869e;
//   padding-top: 8%;
//   padding-bottom: 8%;
// `

// const OffColorTitle = styled.div`
//   background: blue;
//   color: #0091ff;
//   padding-top: 8%;
//   padding-bottom: 8%;
//   text-decoration: underline;
// `

const OffColorTitle = styled.div`
  background: white;
  color: #0062ff;
  padding-top: 8%;
  padding-bottom: 8%;
  -webkit-text-decoration: underline;
  text-decoration: underline;
  mix-blend-mode: lighten;
  width: 80%;
`

const Title = () => {
  return (
    <TitleContainer>
      <OnColorTitle>the</OnColorTitle>
      <OffColorTitle>scuba</OffColorTitle>
      <OnColorTitle>wizard</OnColorTitle>
    </TitleContainer>
  )
}

const StatementsContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 36px;
  font-family: roboto mono;
  margin-left: 10%;
  text-shadow: 6px 6px 0px rgba(0, 0, 0, 0.2);
`
const OffOffColorStatement = styled.div`
  color: #969899;
  padding-top: 8%;
  padding-bottom: 8%;
`
const OnColorStatement = styled.div`
  color: white;
  padding-top: 8%;
  padding-bottom: 8%;
`

// const OffColorStatement = styled.div`
//   color: #39869e;
//   padding-top: 8%;
//   padding-bottom: 8%;
// `

const OffColorStatement = styled.div`
  color: #0ecfff;
  padding-top: 8%;
  padding-bottom: 8%;
`

const Statements = () => (
  <StatementsContainer>
    <OnColorStatement>local</OnColorStatement>
    <OffOffColorStatement>seattle</OffOffColorStatement>
    <OffColorStatement>dive expert.</OffColorStatement>
  </StatementsContainer>
)

const StyledLogo = styled(Logo)`
  box-shadow: 0 8px 10px 1px rgba(0, 0, 0, 0.14),
    0 3px 14px 2px rgba(0, 0, 0, 0.12), 0 5px 5px -3px rgba(0, 0, 0, 0.2);
`

// const BackgroundLogoContainer = styled.div`
//   height: 200vh;
//   width: 200vw;
//   padding-top: 24%;
//   padding-left: 8%;
//   background: black;
// `

const BackgroundLogoContainer = styled.div`
  height: 200vh;
  width: 200vw;
  padding-top: 6%;
  padding-left: 8%;
  background: black;
`

const ServicesTitle = styled.div`
  color: #969899;
  font-size: 48px;
  font-family: roboto mono;
  margin-top: 10%;
`

const PageContainer = styled(Parallax)``

const ContactButton = styled.button`
  background: blue;
  color: white;
`

{
  /* <ParallaxLayer
  offset={0}
  speed={0}
  factor={3}
  style={{
    opacity: 0.8,
    backgroundColor: '#484848',
    backgroundSize: 'cover',
    zIndex: -2,
  }}
/> */
}

// #00a9ff

const Page = () => (
  <Parallax pages={3}>
    <ParallaxLayer
      offset={0}
      speed={0}
      factor={3}
      style={{
        opacity: 0.8,
        backgroundColor: '#007eff',
        backgroundSize: 'cover',
        zIndex: -2,
      }}
    />
    <ParallaxLayer offset={0.1} speed={0.2}>
      <Title />
    </ParallaxLayer>
    <ParallaxLayer offset={0.6} speed={-0.2}>
      <Statements />
    </ParallaxLayer>
    <ParallaxLayer offset={0} speed={-0.2} style={{ zIndex: -3 }}>
      <BackgroundLogoContainer>
        <Logo />
      </BackgroundLogoContainer>
    </ParallaxLayer>
    <ParallaxLayer
      offset={1}
      speed={0}
      factor={3}
      style={{
        backgroundColor: '#474341',
        backgroundSize: 'cover',
      }}
    >
      <ServicesTitle>services</ServicesTitle>
    </ParallaxLayer>
    <ParallaxLayer
      offset={1.1}
      speed={1}
      factor={3}
      style={{
        // backgroundColor: '#474341', // '#474341', '#39869e'
        zIndex: 1,
      }}
    >
      <Services />
    </ParallaxLayer>
    <ParallaxLayer
      offset={1.8}
      speed={1.3}
      factor={3}
      style={{
        // backgroundColor: '#474341', // '#474341', '#39869e'
        zIndex: 1,
        marginLeft: `40%`,
      }}
    >
      <ContactButton>contact -></ContactButton>
    </ParallaxLayer>
  </Parallax>
)

export default Page
