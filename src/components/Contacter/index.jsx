import React from 'react'

import styled from 'styled-components'
import { animated } from 'react-spring'

import ContactInfo from './ContactInfoTemp'
import Invitation from './Invitation'
import SliderLayout from './SliderLayout'

const Container = styled.div`
  height: 100vh;
  width: 100vw;
`

const ContactFormPlaceholder = styled.div`
  height: 100vh;
  width: 100vw;
`

// start simple make more elegant later
const MainContainer = styled.div`
  height: 100vh;
  width: 100vw;
`

const INVITATION = [
  { key: 'invitation-0', text: "Let's " },
  { key: 'invitation-1', text: 'talk' },
  { key: 'invitation-2', text: 'about ' },
  { key: 'invitation-3', text: 'your ' },
  { key: 'invitation-4', text: 'next ' },
  { key: 'invitation-5', text: 'dive ' },
  { key: 'invitation-6', text: 'job.' },
  //   { key: 'invitation-0', text: 'L' },
  //   { key: 'invitation-1', text: 'e' },
  //   { key: 'invitation-2', text: 't' },
  //   { key: 'invitation-3', text: "'s" },
  //   { key: 'invitation-4', text: ' ' },
  //   { key: 'invitation-5', text: 't' },
  //   { key: 'invitation-6', text: 'a' },
  //   { key: 'invitation-7', text: 'l' },
  //   { key: 'invitation-8', text: 'k' },
  //   { key: 'invitation-9', text: ' ' },
  //   { key: 'invitation-10', text: 'a' },
  //   { key: 'invitation-11', text: 'b' },
  //   { key: 'invitation-12', text: 'o' },
  //   { key: 'invitation-13', text: 'u' },
  //   { key: 'invitation-14', text: 't' },
  //   { key: 'invitation-15', text: ' ' },
  //   { key: 'invitation-16', text: 'y' },
  //   { key: 'invitation-17', text: 'o' },
  //   { key: 'invitation-18', text: 'u' },
  //   { key: 'invitation-19', text: 'r' },
  //   { key: 'invitation-20', text: ' ' },
  //   { key: 'invitation-21', text: 'n' },
  //   { key: 'invitation-22', text: 'e' },
  //   { key: 'invitation-23', text: 'x' },
  //   { key: 'invitation-24', text: 't' },
  //   { key: 'invitation-25', text: ' ' },
  //   { key: 'invitation-26', text: 'j' },
  //   { key: 'invitation-27', text: 'o' },
  //   { key: 'invitation-28', text: 'b' },
  //   { key: 'invitation-29', text: '.' },
  //   { key: 'invitation-30', text: 'dive ' },
  //   { key: 'invitation-31', text: 'job.' },
]

const PHONE = {
  area: 206,
  prefix: 941,
  line: 1541,
}

const EMAIL = `thescubawizard@gmail.com`

const InvitationContainer = styled(animated.div)`
  margin-left: 10px;
  margin-top: 20px;
`

const ContactInfoContainer = styled(animated.div)`
  display: flex;
  flex-direction: column;
  margin-left: 10%;
  margin-right: 10%;
  margin-top: 20%;
  margin-bottom: 20%;
`

export default () => {
  return (
    <MainContainer>
      <Container>
        <InvitationContainer>
          <Invitation invitationChunks={INVITATION} />
        </InvitationContainer>
        <ContactInfoContainer>
          <ContactInfo phone={PHONE} email={EMAIL} />
        </ContactInfoContainer>
      </Container>
      <SliderLayout>
        <ContactFormPlaceholder>placeholder</ContactFormPlaceholder>
      </SliderLayout>
    </MainContainer>
  )
}
