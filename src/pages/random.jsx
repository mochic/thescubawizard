import React from 'react'

import styled from 'styled-components'
import Fab from '@material-ui/core/Fab'
import EmailIcon from '@material-ui/icons/Email'

import Logo from '../components/Logo'

const PageContainer = styled.div`
  height: 100vh;
  width: 100vw;
`

const BackgroundContainer = styled.div`
  position: fixed;
  top: 100px;
  left: 0px;
  height: 120vh;
  width: 120vw;
  filter: grayscale(100%);
  z-index: -1;
  background: black;
`

const MailFabContainer = styled.div`
  position: fixed;
  left: 55px;
  bottom: 55px;
`

const Title = styled.div`
  font-size: 48px;
  font-family: roboto mono;
  margin-top: 30%;
  width: 60%;
  height: 50%;
  color: white;
`

const GradientButton = styled.button`
  height: 48px;
  width: 200px;
  background: linear-gradient(
    45deg,
    rgba(59, 173, 227, 1) 0%,
    rgba(87, 111, 230, 1) 25%,
    rgba(152, 68, 183, 1) 51%,
    rgba(255, 53, 127, 1) 100%
  );
  color: white;
  position: fixed;
  left: 55px;
  bottom: 100px;
  border: none;
  font-family: roboto;
`

const Page = () => {
  return (
    <>
      <PageContainer>
        <Title>the scuba wizard</Title>
        <GradientButton>services</GradientButton>
        <MailFabContainer>
          <Fab>
            <EmailIcon />
          </Fab>
        </MailFabContainer>
      </PageContainer>
      <BackgroundContainer>
        <Logo />
      </BackgroundContainer>
    </>
  )
}

export default Page
