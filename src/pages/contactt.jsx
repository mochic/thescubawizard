import React from 'react'

import Logo from '../components/Logo'
import { animated } from 'react-spring'
import styled, { keyframes } from 'styled-components'
import DivingImage from '../components/DivingImage'

import { FaAnchor, FaUser, FaEnvelope } from 'react-icons/fa'

const NavItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

// expect an icon and text
const NavItem = ({ children }) => (
  <NavItemContainer>{children}</NavItemContainer>
)

const NavItemLabel = styled.span`
  font-weight: lighter;
  font-size: 14px;
`

const NavContainer = styled.div`
  position: fixed;
  bottom: 0px;
  left: 0px;
  display: flex;
  justify-content: space-between;
  width: 80%;
  margin-left: 10%;
  margin-right: 10%;
  margin-bottom: 10%;
`

const ServicesLogo = styled(FaAnchor)`
  color: white;
`

const AboutLogo = styled(FaUser)`
  color: white;
  padding-top: 1px;
`

const ContactLogo = styled(FaEnvelope)`
  color: white;
  color: #3bffc0;
`

const Nav = () => {
  return (
    <NavContainer>
      <NavItem>
        <ServicesLogo />
        <NavItemLabel>services</NavItemLabel>
      </NavItem>
      <NavItem>
        <AboutLogo />
        <NavItemLabel>about</NavItemLabel>
      </NavItem>
      <NavItem>
        <ContactLogo />
        <NavItemLabel style={{ color: '#3bffc0' }}>contact</NavItemLabel>
      </NavItem>
    </NavContainer>
  )
}

const PageContainer = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  height: 100vh;
  width: 100vw;
  background: #3bffc0;
  color: white;
  font-family: roboto;
  display: flex;
  flex-direction: column;
  z-index: 1;
  opacity: 0.8;
`

const Title = styled.h1`
  font-size: 80px;
  text-overflow: clip;
  margin-bottom: none;
  color: #3bffc0;
`

const BackgroundContainer = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  height: 180vh;
  width: 180vw;
  z-index: 0;
  background: black;
  padding-top: 20%;
  padding-left: 20%;
  filter: grayscale(1);
`

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 20%;
  width: 100%;
  align-items: flex-end;
`

const Service = styled.li`
  line-height: 1.2;
`

const CORE_SERVICES = [
  'hull cleaning',
  'zinc replacement',
  'bottom inspection',
  'lost item recovery',
]

const ContentContainer = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  height: 100vh;
  width: 100vw;
  z-index: 2;
  font-family: roboto;
  color: white;
  display: flex;
  flex-direction: column;
`

const ContactStatement = styled.p``

const ServiceName = styled.p`
  color: #0a92f3;
`

const ContactStatementContainer = styled.div`
  margin-top: 6%;
  margin-left: 12%;
  margin-right: 12%;
  font-size: 36px;
`

const ContactFormContainer = styled.div``

const Expanding = keyframes`
    0% {
        transform: scale(1);
    }

    50% {
        transform: scale(100);
        opacity: 1;
    }

    100% {
        opacity: 0;
    }
`

const AnimatingDiv = styled.div`
  position: fixed;
  height: 60px;
  width: 60px;
  border-radius: 100%;
  background: #3bffc0;
  bottom: 22px;
  left: 30px;
  z-index: 100;
  vertical-align: middle;
  text-align: center;
  animation: ${Expanding} 4s linear;
  animation-delay: 5s;
`

export default () => (
  <>
    <PageContainer />
    <BackgroundContainer>
      <Logo />
    </BackgroundContainer>
    <ContentContainer>
      <TitleContainer>
        <Title>contact</Title>
      </TitleContainer>
      <ContactStatementContainer>
        <ContactStatement>let's talk about</ContactStatement>
        <ContactStatement>your next</ContactStatement>
        <ServiceName>{`${CORE_SERVICES[0]}.`}</ServiceName>
        <AnimatingDiv />
      </ContactStatementContainer>
      <Nav />
    </ContentContainer>
  </>
)
