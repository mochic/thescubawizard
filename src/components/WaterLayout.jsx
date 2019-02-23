import React, { Component } from 'react'

import styled from 'styled-components'

import Logo from '../components/Logo'

const LogoContainer = styled.div`
  background: #343434;
  position: fixed;
  top: 0px;
  left: 0px;
  height: 200vh;
  width: 200vw;
  padding-left: 15%;
  padding-top: 19%;
  z-index: 0;
`

const LogoFilter = styled.div`
background: pink;
    position: fixed:
    height: 100vh;
    width: 100vw;
    opacity: 0.5;
    z-index: 1;
    top: 0px;
    left: 0px;
`

const Background = () => (
  <LogoContainer>
    <Logo />
    <LogoFilter />
  </LogoContainer>
)

const WaterLayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

// const WaterFilterContainer = styled.div`
//   position: relative;
//   bottom: 4em;
//   height: 4em;
//   background: -webkit-linear-gradient(
//     rgba(255, 255, 255, 0) 0%,
//     rgba(255, 255, 255, 1) 100%
//   );
//   background-image: -moz-linear-gradient(
//     rgba(255, 255, 255, 0) 0%,
//     rgba(255, 255, 255, 1) 100%
//   );
//   background-image: -o-linear-gradient(
//     rgba(255, 255, 255, 0) 0%,
//     rgba(255, 255, 255, 1) 100%
//   );
//   background-image: linear-gradient(
//     rgba(255, 255, 255, 0) 0%,
//     rgba(255, 255, 255, 1) 100%
//   );
//   background-image: -ms-linear-gradient(
//     rgba(255, 255, 255, 0) 0%,
//     rgba(255, 255, 255, 1) 100%
//   );
//   background: red;
//   z-index: 1000;
// `

const WaterFilterContainer = styled.div`
  background: -webkit-linear-gradient(
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 1) 100%
  );
  background-image: -moz-linear-gradient(
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 1) 100%
  );
  background-image: -o-linear-gradient(
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 1) 100%
  );
  background-image: linear-gradient(rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 100%);
  background-image: -ms-linear-gradient(
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 1) 100%
  );
  position: fixed;
  bottom: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  z-index: 1000;
`

const WaterFilter = ({ children, depth }) => {
  return <WaterFilterContainer depth={depth}>{children}</WaterFilterContainer>
}

const Page0 = styled.div`
  height: 80vh;
  width: 80vw;
  z-index: 1;
`

const Page1 = styled.div`
  height: 80vh;
  width: 80vw;
  z-index: 1;
`

const StatementOnColor = styled.p`
  font-family: roboto;
  font-size: 48px;
  font-weight: bolder;
  color: white;
`

const StatementOffColor = styled.p`
  font-family: roboto;
  font-weight: bold;
  color: teal;
`

class WaterLayoutComponent extends Component {
  render = () => {
    return (
      <WaterLayoutContainer>
        <Background />
        <Page0 id="page0">
          <StatementOnColor>Hey,</StatementOnColor>
          <StatementOffColor>
            My name is Nash Lapping and I'm gay.
          </StatementOffColor>
          <StatementOnColor style={{ margin: 0.2 }}>stuff</StatementOnColor>
        </Page0>
        <Page1 id="page1">
          <StatementOnColor>Hey,</StatementOnColor>
          <StatementOffColor>
            My name is Nash Lapping and I'm gay.
          </StatementOffColor>
        </Page1>
        <WaterFilter depth={0} />
      </WaterLayoutContainer>
    )
  }
}

export default WaterLayoutComponent
