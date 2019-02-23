import React from 'react'

import styled from 'styled-components'

import Logo from '../components/Logo'

const Background = styled.div`
  z-index: -1;
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0px;
  left: 0px;
`

const PageContainer = styled.div`
  background: red;
  z-index: 0;
  height: 300vh;
  opacity: 0.3;
`

const Header = styled.div`
  position: fixed;
  height: 40%;
  color: white;
  font-family: 'roboto';
  top: 0px;
  left: 0px;
  z-index: 1;
`

const ServicesCard = styled.div``

const ServicesHeader = styled.h1``

const ServiceItem = styled.li``

const ServicesList = styled.ul``

const AboutCard = styled.div``

export default () => {
  return (
    <PageContainer>
      <Header>the scuba wizard</Header>
      <Background>
        <Logo />
      </Background>
    </PageContainer>
  )
}
