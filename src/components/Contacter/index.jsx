import React, { useRef } from 'react'

import styled from 'styled-components'
import { animated, useChain, useTransition } from 'react-spring'

import ContactInfo from './ContactInfoTemp'
// import Invitation from './Invitation'
import Info from './info'
import Scheduler from './scheduler'
import InvitationChunk from './InvitationTemp'
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

// const INVITATION = [
//   { key: 'invitation-0', text: "Let's " },
//   { key: 'invitation-1', text: 'talk' },
//   { key: 'invitation-2', text: 'about ' },
//   { key: 'invitation-3', text: 'your ' },
//   { key: 'invitation-4', text: 'next ' },
//   { key: 'invitation-5', text: 'dive ' },
//   { key: 'invitation-6', text: 'job.' },
//   //   { key: 'invitation-0', text: 'L' },
//   //   { key: 'invitation-1', text: 'e' },
//   //   { key: 'invitation-2', text: 't' },
//   //   { key: 'invitation-3', text: "'s" },
//   //   { key: 'invitation-4', text: ' ' },
//   //   { key: 'invitation-5', text: 't' },
//   //   { key: 'invitation-6', text: 'a' },
//   //   { key: 'invitation-7', text: 'l' },
//   //   { key: 'invitation-8', text: 'k' },
//   //   { key: 'invitation-9', text: ' ' },
//   //   { key: 'invitation-10', text: 'a' },
//   //   { key: 'invitation-11', text: 'b' },
//   //   { key: 'invitation-12', text: 'o' },
//   //   { key: 'invitation-13', text: 'u' },
//   //   { key: 'invitation-14', text: 't' },
//   //   { key: 'invitation-15', text: ' ' },
//   //   { key: 'invitation-16', text: 'y' },
//   //   { key: 'invitation-17', text: 'o' },
//   //   { key: 'invitation-18', text: 'u' },
//   //   { key: 'invitation-19', text: 'r' },
//   //   { key: 'invitation-20', text: ' ' },
//   //   { key: 'invitation-21', text: 'n' },
//   //   { key: 'invitation-22', text: 'e' },
//   //   { key: 'invitation-23', text: 'x' },
//   //   { key: 'invitation-24', text: 't' },
//   //   { key: 'invitation-25', text: ' ' },
//   //   { key: 'invitation-26', text: 'j' },
//   //   { key: 'invitation-27', text: 'o' },
//   //   { key: 'invitation-28', text: 'b' },
//   //   { key: 'invitation-29', text: '.' },
//   //   { key: 'invitation-30', text: 'dive ' },
//   //   { key: 'invitation-31', text: 'job.' },
// ]

const INVITATION = [
  { key: `invitation-0`, text: `let's talk` },
  { key: `invitation-1`, text: `about your next` },
]

const SUBJECT = [{ key: `subject-0`, text: `dive job.` }]

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

// const Invitation = ({ ref, chunks }) => {
//   const transitions = useTransition()
//   return
// }

const InvitationSubjectContainer = styled(animated.div)``

const HighlightText = styled(animated.div)`
  margin-left: 10px;
  margin-top: 40px;
  color: #ffb800;
  font-family: roboto;
  font-size: 56px;
`

const Subject = ({ item, props }) => {
  return <HighlightText style={props}>{item.text}</HighlightText>
}

// const InfoHeaderContainer = styled(animated.div)``

// const HeaderText = styled(animated.div)``

// passing the whole item is the best way to do this...it is a header item,
// components have items, which are manipulated by springs
// const Header = ({ item, props }) => (
//   <HeaderText style={props}>{item.text}</HeaderText>
// )

// const DividerLine = styled(animated.div)``

// const Divider = ({ props }) => <DividerLine style={props} />

// const InfoItemText = styled(animated.div)``

// const InfoItem = ({ item, props }) => (
//   <InfoItemText style={props}>{item.text}</InfoItemText>
// )

// const InfoHeader = ({ headerSpring, dividerSpring, infoItemsSpring }) => {
//   return (
//     <>
//       <HeaderContainer>
//         {headerSpring.map(({ item, key, props }) => (
//           <Header key={key} item={item} props={props} />
//         ))}
//       </HeaderContainer>
//       <DividerContainer>
//         {dividerSpring.map(({ item, key, props }) => (
//           <Divider key={key} props={props} />
//         ))}
//       </DividerContainer>
//       <InfoItemsContainer>
//         {infoItemsSpring.map(({ item, key, props }) => (
//           <InfoItem key={key} item={item} props={props} />
//         ))}
//       </InfoItemsContainer>
//     </>
//   )
// }

export default () => {
  const invitationTransitionRef = useRef()
  const invitationTransition = useTransition(INVITATION, item => item.key, {
    ref: invitationTransitionRef,
    from: { opacity: 0, transform: `translate3d(0,-40px,0)` },
    enter: { opacity: 1, transform: `translate3d(0,0px,0)` },
    leave: { opacity: 0 },
  })

  const subjectTransitionRef = useRef()
  const subjectTransition = useTransition(SUBJECT, item => item.key, {
    ref: subjectTransitionRef,
    from: { opacity: 0, transform: `translate3d(-40px,0px,0)` },
    enter: { opacity: 1, transform: `translate3d(0px,0px,0)` },
    leave: { opacity: 0 },
  })

  const INFO_HEADER = [{ key: 'info-header', text: 'contact' }]

  const infoHeaderTransitionRef = useRef()
  const infoHeaderTransition = useTransition(INFO_HEADER, item => item.key, {
    ref: infoHeaderTransitionRef,
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  })

  const DIVIDER = [{ key: `info-divider` }]

  const dividerTransitionRef = useRef()
  const dividerTransition = useTransition(DIVIDER, item => item.key, {
    ref: dividerTransitionRef,
    from: { opacity: 1, width: `0%` },
    enter: { opacity: 1, width: `100%` },
    leave: { opacity: 0 },
  })

  const INFO_ITEMS = [
    { key: `phone-info`, name: `phone`, subValues: [`(206)`, `294-0672`] },
    {
      key: `email-info`,
      name: `email`,
      subValues: [`thescubawizard`, `@gmail.com`],
    },
  ]

  const infoItemsTransitionRef = useRef()
  const infoItemsTransition = useTransition(INFO_ITEMS, item => item.key, {
    ref: infoItemsTransitionRef,
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  })

  const SCHEDULER_LABEL = [
    { key: `scheduler-label-0`, text: `or` },
    { key: `scheduler-label-1`, text: `schedule a chat` },
  ]

  const SCHEDULER_ICON = [{ key: `scheduler-icon` }]

  const schedulerLabelTransitionRef = useRef()
  const schedulerLabelTransition = useTransition(
    SCHEDULER_LABEL,
    item => item.key,
    {
      ref: schedulerLabelTransitionRef,
      from: { opacity: 0 },
      enter: { opacity: 1 },
      leave: { opacity: 0 },
    }
  )

  const schedulerIconTransitionRef = useRef()
  const schedulerIconTransition = useTransition(
    SCHEDULER_ICON,
    item => item.key,
    {
      ref: schedulerIconTransitionRef,
      from: { opacity: 0 },
      enter: { opacity: 1 },
      leave: { opacity: 0 },
    }
  )

  useChain([
    invitationTransitionRef,
    subjectTransitionRef,
    infoHeaderTransitionRef,
    dividerTransitionRef,
    infoItemsTransitionRef,
    schedulerLabelTransitionRef,
    schedulerIconTransitionRef,
  ])

  return (
    <MainContainer>
      <Container>
        <InvitationContainer>
          {invitationTransition.map(({ item, key, props }) => (
            <InvitationChunk key={key} item={item} props={props} />
          ))}
        </InvitationContainer>
        <InvitationSubjectContainer>
          {subjectTransition.map(({ item, key, props }) => (
            <Subject key={key} item={item} props={props} />
          ))}
        </InvitationSubjectContainer>
        {/* <InfoHeaderContainer>
          {infoHeaderTransition.map(({ item, key, props }) => (
            <Header key={key} item={item} props={props} />
          ))}
        </InfoHeaderContainer>
        <ContactInfoContainer>
          <ContactInfo phone={PHONE} email={EMAIL} />
        </ContactInfoContainer> */}
        <Info
          headerSpring={infoHeaderTransition}
          dividerSpring={dividerTransition}
          infoItemSprings={infoItemsTransition}
        />
        <Scheduler
          labelSprings={schedulerLabelTransition}
          iconSpring={schedulerIconTransition}
        />
      </Container>
      {/* <SliderLayout>
        <ContactFormPlaceholder>placeholder</ContactFormPlaceholder>
      </SliderLayout> */}
    </MainContainer>
  )
}
