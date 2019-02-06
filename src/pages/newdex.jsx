import React from 'react'
import { Link } from 'gatsby'

import styled from 'styled-components'

import Layout from '../components/layout'
import Logo from '../components/Logo'

import SEO from '../components/seo'

const BackgroundLogoContainer = styled.div`
  height: 100vh !important;
  width: 200vw !important;
  background: black;
`

const BackgroundContainer = styled.div`
  position: fixed !important;
  background: black;
  top: 0px;
  left: 0px;
  z-index;: -1;
`

const TitleContainer = styled.div`
  width: 50%;
  font-size: 36px;
`

const OnColorTitle = styled.div`
  color: white;
  padding-top: 8%;
  padding-bottom: 8%;
`

const OffColorTitle = styled.div`
  color: #39869e;
  padding-top: 8%;
  padding-bottom: 8%;
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

// const Title = styled.h1`
//   color: white;
//   &:nth-child(even) {
//     color: blue;
//   }
//   &:nth-child(odd) {
//     color: red;
//   }
//   width: 40%;
// `

// const Title = styled(SEO)`
//   color: white;
//   width: 40%;
// `

const StatementsContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 36px;
`

const OnColorStatement = styled.div`
  color: white;
`

const OffColorStatement = styled.div`
  color: #39869e;
`

const Statements = () => (
  <StatementsContainer>
    <OnColorStatement>local.</OnColorStatement>
    <OnColorStatement>seattle.</OnColorStatement>
    <OffColorStatement>diving.</OffColorStatement>
  </StatementsContainer>
)

const PageContainer = styled.div`
  background: black;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
`

const IndexPage = () => (
  <PageContainer>
    {/* <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} /> */}
    {/* <SEO>the scuba wizard</SEO> */}
    <Title />
    <Statements />
    <BackgroundContainer>
      <BackgroundLogoContainer>
        <Logo />
      </BackgroundLogoContainer>
    </BackgroundContainer>
  </PageContainer>
)

export default IndexPage
