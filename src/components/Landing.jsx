import React, { Component, Suspense } from 'react'

import styled from 'styled-components'

import ForegroundWater from './ForegroundWater'
import Logo from './Logo'

import About from '../components/About'

const Title = styled.div`
  color: white;
  font-family: 'roboto';
  position: relative;
  height: 30%;
  width: 38%;
  font-size: 10vw;
  line-height: normal;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  @media (min-width: 312px) {
    font-size: 10vw;
  }

  @media (min-width: 375px) {
    font-size: 10vw;
  }
`

const Description = styled.div`
  color: white;
  font-family: 'roboto';
  font-size: 8vw;
  font-weight: bold;
  top: 95%;
  left: 8%;
  position: relative;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`

// stupid height value inc :_(...
// vh unit for background associted items...rely on no recalc?
const ForegroundContainer = styled.div`
  height: 410vh;
  width: 100%;
  position: absolute;
  top: 0px;
  left: 0px;
  z-index: 1;
  margin-top: 90vh;
`
// display: flex;
//   justify-content: center;
//   align-items: center;
//   overflow: hidden;
const Foreground = () => {
  return (
    <ForegroundContainer>
      <ForegroundWater />
    </ForegroundContainer>
  )
}

const LandingContainer = styled.div`
  height: 100vh;
  width: 100%;
  background: #343434;
  position: fixed;
  top: 0px;
  left: 0px;
  overflow: hidden;
  z-index: -2;
`

const LogoContainer = styled.div`
  height: 170%;
  width: 170%;
  position: fixed;
  margin-left: 22.2%;
  margin-top: 22%;
  z-index: -1;
`

const PageContainer = styled.div`
  height: 100vh;
  width: 100vw;
`

const Pages = styled.div`
  height: 500vh;
  width: 100vw;
  z-index: 2;
  position: absolute;
  top: 0px;
  left: 0px;
  overflow: hidden;
`

const Page0 = () => {
  return (
    <PageContainer>
      <Description>local dive expert</Description>
    </PageContainer>
  )
}

const Page1 = () => {
  return (
    <PageContainer>
      <About />
    </PageContainer>
  )
}

const Page2 = () => {
  return <PageContainer style={{ background: 'red' }} />
}

const Page3 = () => {
  return <PageContainer style={{ background: 'blue' }} />
}

const Page4 = () => {
  return <PageContainer style={{ background: 'white' }} />
}

const BaseHeader = () => {
  return (
    <HeaderContainer>
      <Title>the scuba wizard</Title>
    </HeaderContainer>
  )
}

const HeaderContainer = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
`

const LandingHeaderContainer = styled.div`
  color: white;
  font-family: 'roboto';
  height: 30%;
  width: 38%;
  font-size: 10vw;
  line-height: normal;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin-top: 6%;
  margin-left: 8%;

  @media (min-width: 312px) {
    font-size: 10vw;
  }

  @media (min-width: 375px) {
    font-size: 10vw;
  }
`

const LandingHeader = () => {
  return <LandingHeaderContainer>the scuba wizard</LandingHeaderContainer>
}

class Header extends Component {
  render = () => {
    return (
      <HeaderContainer>
        {this.props.isLanding ? <LandingHeader /> : <BaseHeader />}
      </HeaderContainer>
    )
  }
}

Header.defaultProps = {
  isLanding: true,
}

export default class LandingComponent extends Component {
  render = () => {
    return (
      <>
        <Header />
        <LandingContainer />
        <LogoContainer>
          <Logo />
        </LogoContainer>
        <Pages>
          <Page0 key="page0" />
          <Page1 key="page1" />
          <Page2 key="page2" />
          <Page3 key="page3" />
          <Page4 key="page4" />
        </Pages>
        <Foreground />
      </>
    )
  }
}
