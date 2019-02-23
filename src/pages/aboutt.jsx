import React from 'react'

import Logo from '../components/Logo'
import { animated } from 'react-spring'
import styled from 'styled-components'
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
        <NavItemLabel>contact</NavItemLabel>
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
  background: #0a92f3;
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
  color: #458ed5;
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

const StyledLogo = styled(Logo)``

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

const ServicesContainer = styled.ul`
  margin-top: 40%;
  list-style: none;
  font-size: 28px;
`

const NameHeader = styled.h3``

const About = styled.p``

const AboutContainer = styled.div`
  margin-left: 12%;
  margin-right: 12%;
`

const longNashThing =
  'An ACDE certified diver, and a graduate from The Divers Institute of Technology. \
    With over 100 working dive hours logged in the Puget Sound there is no job too big or small.'

const DivingImageContainer = styled.div`
  position: fixed;
  z-index: -1;
  height: 80%;
  width: 80%;
  top: 10%;
  left: 10%;
`

export default () => (
  <>
    <PageContainer>
      {/* <TitleContainer>
        <Title>ser</Title>
        <Title>vic</Title>
        <Title>es</Title>
      </TitleContainer> */}
      {/* {CORE_SERVICES.map((service, idx) => (
      <Service key={`service-${idx}`}>{service}</Service>
    ))} */}
    </PageContainer>
    <BackgroundContainer>
      <Logo />
    </BackgroundContainer>
    <ContentContainer>
      <TitleContainer>
        <Title>about</Title>
      </TitleContainer>
      <AboutContainer>
        <NameHeader>Nash Lapping</NameHeader>
        <About>{longNashThing}</About>
      </AboutContainer>
      <Nav />
      <DivingImageContainer>
        <DivingImage />
      </DivingImageContainer>
    </ContentContainer>
  </>
)
