import React, { Component } from 'react'

import styled from 'styled-components'

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
  font-size: 10vw;
  line-height: normal;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  width: 30vw;
  margin-left: 9vw;
  margin-top: 4vh;
  font-weight: bolder;

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

export default class Header extends Component {
  static defaultProps = {
    isLanding: true,
  }

  render = () => {
    return (
      <HeaderContainer>
        {this.props.isLanding ? <LandingHeader /> : <BaseHeader />}
      </HeaderContainer>
    )
  }
}
