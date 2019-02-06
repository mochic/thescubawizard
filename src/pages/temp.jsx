import React from 'react'

import styled from 'styled-components'

import Logo from '../components/Logo'

// const SlopeDiv = styled.div`
//   background-color: #20232f;
//   clip-path: polygon(20vw 0, 70% 0, calc(70% - 20vw) 100%, 0 100%);
// `

const SlopeBegin = styled.div`
  background-color: red;
  clip-path: polygon(20vw 0, 70% 0, calc(70% - 20vw) 100%, 0 100%);
  position: absolute;
  width: 140%;
  height: 100%;
  cursor: pointer;
`

const SlopeEnd = styled.div`
  clip-path: polygon(
    70% 0,
    100% 0,
    calc(100% - 20vw) 100%,
    calc(70% - 20vw) 100%
  );
  position: absolute;
  width: 140%;
  height: 100%;
  cursor: pointer;
`

const LogoContainer = styled.div`
    height: 50%;
    width: 50%;
    margin-right: 30%;
`

const Background = styled.div`
  position: fixed;
  height: 100%;
  left: 0px;
  width: 100%;
  top: 0px;
  z-index: -1;
`

const PageContainer = styled.div`
  height: 100vh;
  width: 100vw;
`

export default () => (
  <PageContainer>
    <Background>
      <LogoContainer>
        <Logo />
      </LogoContainer>
    </Background>
    <SlopeBegin />
    <SlopeEnd />
  </PageContainer>
)
