import React, { Component } from 'react'

import styled from 'styled-components'

import Contacter from '../components/Contacter'

// const Title = styled.div`
//   color: white;
//   font-family: 'roboto';
//   position: relative;
//   height: 30%;
//   width: 38%;
//   font-size: 10vw;
//   line-height: normal;
//   text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

//   @media (min-width: 312px) {
//     font-size: 10vw;
//   }

//   @media (min-width: 375px) {
//     font-size: 10vw;
//   }
// `

// const LandingHeaderContainer = styled.div`
//   color: white;
//   font-family: 'roboto';
//   height: 30%;
//   font-size: 10vw;
//   line-height: normal;
//   text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
//   width: 30vw;
//   margin-left: 9vw;
//   margin-top: 4vh;
//   font-weight: bolder;

//   @media (min-width: 312px) {
//     font-size: 10vw;
//   }

//   @media (min-width: 375px) {
//     font-size: 10vw;
//   }
// `

const ContacterContainer = styled.div`
  margin-top: 4px;
`

const LandingTitleHeading = styled.h1`
  color: white;
  font-family: 'roboto';
  height: 30%;
  font-size: 10vw;
  line-height: normal;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  width: 35vw;
  font-weight: bolder;
`

const TitleHeadingMajor = styled.h1`
  color: white;
  font-size: 24px;
  margin-left: 5%;
  font-weight: 300;
`

const TitleHeadingMinor = styled.h1`
  color: white;
  font-size: 24px;
  font-weight: lighter;
`

const TitleHeadingContainer = styled.div`
  display: flex;
  width: 60%;
`

const LandingTitle = () => {
  return <LandingTitleHeading>the scuba wizard</LandingTitleHeading>
}

const Title = () => {
  return (
    <TitleHeadingContainer>
      <TitleHeadingMinor>the</TitleHeadingMinor>
      <TitleHeadingMajor>scuba wizard</TitleHeadingMajor>
    </TitleHeadingContainer>
  )
}

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  position: fixed;
  top: 0px;
  left: 0px;
  width: 84vw;
  margin-left: 9vw;
  margin-right: 7vw;
  margin-top: 4vh;
`

export default class Header extends Component {
  static defaultProps = {
    isLanding: true,
  }

  render = () => {
    return (
      <HeaderContainer>
        {this.props.isLanding ? <LandingTitle /> : <Title />}
        <ContacterContainer>
          <Contacter />
        </ContacterContainer>
      </HeaderContainer>
    )
  }
}
