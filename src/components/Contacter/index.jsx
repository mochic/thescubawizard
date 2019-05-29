import React, { useState, useRef } from 'react'

import styled from 'styled-components'
import { animated, useChain, useTransition, useSpring } from 'react-spring'

import ContactInfo from './ContactInfoTemp'
// import Invitation from './Invitation'
// import Info from './info'
import Info from './infoagain'
// import Scheduler from './scheduler'
// import Scheduler from './schedulerTemp'
import Scheduler, { PAGE_HEIGHT, HINT_HEIGHT } from './schedulerTempFinal'
// import Invitation from './Invitation'
import Invitation from './Invitation'
import SliderLayout from './SliderLayout'
import Background from './Background'

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
  { key: `invitation-0`, text: `let's talk` },
  { key: `invitation-1`, text: `about your` },
  { key: `invitation-2`, text: `next` },
]

const SUBJECT = [{ key: `subject-0`, text: `dive job.` }]

// const PHONE = {
//   area: 206,
//   prefix: 941,
//   line: 1541,
// }

// const EMAIL = `thescubawizard@gmail.com`

// const InvitationContainer = styled(animated.div)`
//   margin-left: 10px;
//   margin-top: 20px;
// `

// const ContactInfoContainer = styled(animated.div)`
//   display: flex;
//   flex-direction: column;
//   margin-left: 10%;
//   margin-right: 10%;
//   margin-top: 20%;
//   margin-bottom: 20%;
// `

// const Invitation = ({ ref, chunks }) => {
//   const transitions = useTransition()
//   return
// }

// const InvitationSubjectContainer = styled(animated.div)``

// const HighlightText = styled(animated.div)`
//   margin-left: 10px;
//   margin-top: 40px;
//   color: #ffb800;
//   font-family: roboto;
//   font-size: 56px;
//   line-height: 1;
// `

// const Subject = ({ item, props }) => {
//   return <HighlightText style={props}>{item.text}</HighlightText>
// }

// const HighlightText = styled(animated.div)`
//   margin-left: 10px;
//   margin-top: 40px;
//   color: #ffb800;
//   font-family: roboto;
//   font-size: 56px;
//   line-height: 1;
// `

// const Subject = ({ item, props }) => {
//   return <HighlightText style={props}>{item.text}</HighlightText>
// }

const InvitationContainer = styled(animated.div)`
  margin-top: 30px;
  margin-left: 6%;
`

const InfoContainer = styled(animated.div)`
  margin-top: 16%;
  margin-left: 6%;
  margin-right: 6%;
`

const BackgroundContainer = styled(animated.div)`
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: -1;
`

// const SchedulerContainer = styled(animated.div)`
//   position: fixed;
//   top: 100vh;
//   left: 0vw;
//   z-index: 1;
//   box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
// `

export default () => {
  // const invitationTransitionRef = useRef()
  // const invitationTransition = useTransition(INVITATION, item => item.key, {
  //   ref: invitationTransitionRef,
  //   from: { opacity: 0, transform: `translate3d(0,-40px,0)` },
  //   enter: { opacity: 1, transform: `translate3d(0,0px,0)` },
  //   leave: { opacity: 0, transform: `translate3d(0,40px,0)` },
  // })

  // const subjectTransitionRef = useRef()
  // const subjectTransition = useTransition(SUBJECT, item => item.key, {
  //   ref: subjectTransitionRef,
  //   from: { opacity: 0, transform: `translate3d(-40px,0px,0)` },
  //   enter: { opacity: 1, transform: `translate3d(0px,0px,0)` },
  //   leave: { opacity: 0 },
  // })

  const invitationTransitionRef = useRef()
  const invitationTransition = useTransition(
    [
      {
        key: `invitation-0`,
        textChunks: [
          { key: `text-chunk-0`, text: `let's talk` },
          { key: `text-chunk-1`, text: `about your` },
          { key: `text-chunk-2`, text: `next` },
        ],
      },
      { key: `subject`, text: `dive job.` },
    ],
    item => item.key,
    {
      ref: invitationTransitionRef,
      from: ({ key }) => {
        switch (key) {
          case `subject`:
            return { opacity: 0, transform: `translate3d(-40px,0,0)` }
          default:
            return { opacity: 0, transform: `translate3d(0,-40px,0)` }
        }
      },
      enter: ({ key }) => {
        switch (key) {
          case `subject`:
            return { opacity: 1, transform: `translate3d(0px,0,0)` }
          default:
            return { opacity: 1, transform: `translate3d(0,0px,0)` }
        }
      },
      leave: ({ key }) => {
        switch (key) {
          case `subject`:
            return { opacity: 0, transform: `translate3d(0,40px,0)` }
          default:
            return { opacity: 0, transform: `translate3d(0,40px,0)` }
        }
      },
      trail: 500,
    }
  )

  // const INFO_HEADER = [{ key: 'info-header', text: 'contact' }]

  // const infoHeaderTransitionRef = useRef()
  // const infoHeaderTransition = useTransition(INFO_HEADER, item => item.key, {
  //   ref: infoHeaderTransitionRef,
  //   from: { opacity: 0 },
  //   enter: { opacity: 1 },
  //   leave: { opacity: 0 },
  // })

  // const DIVIDER = [{ key: `info-divider` }]

  // const dividerTransitionRef = useRef()
  // const dividerTransition = useTransition(DIVIDER, item => item.key, {
  //   ref: dividerTransitionRef,
  //   from: { opacity: 1, width: `0%` },
  //   enter: { opacity: 1, width: `100%` },
  //   leave: { opacity: 0 },
  // })

  // const INFO_ITEMS = [
  //   { key: `phone-info`, name: `phone`, subValues: [`(206)`, `294-0672`] },
  //   {
  //     key: `email-info`,
  //     name: `email`,
  //     subValues: [`thescubawizard`, `@gmail.com`],
  //   },
  // ]

  // const infoItemsTransitionRef = useRef()
  // const infoItemsTransition = useTransition(INFO_ITEMS, item => item.key, {
  //   ref: infoItemsTransitionRef,
  //   from: { opacity: 0, transform: `translate3d(0,-40px,0)` },
  //   enter: { opacity: 1, transform: `translate3d(0,0px,0)` },
  //   leave: { opacity: 0, transform: `translate3d(0,40px,0)` },
  //   trail: 100,
  // })

  // const maybeUsefulMiddleWare = {} // a testimate to the solution being harder to maintain than the hack...

  const infoTransitionRef = useRef()
  const infoTransition = useTransition(
    [
      {
        key: `info`,
        emailItem: {
          key: `email-info`,
          info: {
            local: { key: `email-local`, text: `thescubawizard` },
            domain: { key: `email-domain`, text: `gmail.com` },
          },
        },
        phoneItem: {
          key: `phone-info`,
          info: {
            area: { key: `phone-area`, text: `808` },
            prefix: { key: `phone-prefix`, text: `223` },
            line: { key: `phone-line`, text: `5545` },
          },
        },
      },
    ],
    item => item.key,
    {
      ref: infoTransitionRef,
      from: ({ key }) => {
        return {
          innerWidth: `0%`,
          opacity: 0,
          transform: `translate3d(0,0px,0)`,
        }
      },
      enter: ({ key }) => {
        return {
          innerWidth: `100%`,
          opacity: 1,
          transform: `translate3d(0,0px,0)`,
        }
      },
      leave: ({ key }) => {
        return { opacity: 0, transform: `translate3d(0,40px,0)` }
      },
    }
  )

  // const SCHEDULER_LABEL = [
  //   { key: `scheduler-label-0`, text: `or` },
  //   { key: `scheduler-label-1`, text: `schedule a chat` },
  // ]

  // const SCHEDULER_ICON = [{ key: `scheduler-icon` }]

  // const SCHEDULER = [
  //   {
  //     key: `scheduler-0`,
  //     labels: [
  //       { key: `scheduler-label-0`, text: `or` },
  //       { key: `scheduler-label-1`, text: `schedule a chat` },
  //     ],
  //   },
  // ]

  // const schedulerTransitionRef = useRef()
  // const schedulerTransition = useTransition(SCHEDULER, item => item.key, {
  //   ref: schedulerTransitionRef,
  //   from: { labelOpacity: 0, transform: `translate3d(0,0%,0)` },
  //   enter: { labelOpacity: 1, transform: `translate3d(0,-13%,0)` }, // mixing units on this causes horrible problems :(...
  //   leave: { labelOpacity: 0, transform: `translate3d(0,10%,0)` },
  // })

  // const schedulerLabelTransitionRef = useRef()
  // const schedulerLabelTransition = useTransition(
  //   SCHEDULER_LABEL,
  //   item => item.key,
  //   {
  //     ref: schedulerLabelTransitionRef,
  //     from: { opacity: 0, transform: `translate3d(0,40px,0)` },
  //     enter: { opacity: 1, transform: `translate3d(0,0px,0)` },
  //     leave: { opacity: 0, transform: `translate3d(0,-40px,0)` },
  //   }
  // )

  // const schedulerIconTransitionRef = useRef()
  // const schedulerIconTransition = useTransition(
  //   SCHEDULER_ICON,
  //   item => item.key,
  //   {
  //     ref: schedulerIconTransitionRef,
  //     from: { opacity: 0 },
  //     enter: { opacity: 1 },
  //     leave: { opacity: 0 },
  //   }
  // )

  const schedulerTransitionRef = useRef()
  const schedulerTransition = useTransition(
    [
      { key: `page` },
      {
        key: `labels`,
        labels: [
          { key: `label-0`, text: `or` },
          { key: `label-1`, text: `schedule a chat` },
        ],
      },
      { key: `icon` },
    ],
    item => item.key,
    {
      ref: schedulerTransitionRef,
      from: ({ key }) => {
        switch (key) {
          case `page`:
            return { opacity: 0, transform: `translate3d(0,0%,0)` }
          case `labels`:
            return { opacity: 0 }
          case `icon`:
            return { opacity: 0 }
          default:
            return {}
        }
      },
      enter: ({ key }) => {
        switch (key) {
          case `page`:
            return { opacity: 1, transform: `translate3d(0,-13%,0)` }
          case `labels`:
            return { opacity: 1 }
          case `icon`:
            return { opacity: 1 }
          default:
            return {}
        }
      },
      leave: ({ key }) => {
        switch (key) {
          case `page`:
            return { opacity: 0, transform: `translate3d(0,-100%,0)` }
          case `labels`:
            return { opacity: 0 }
          case `icon`:
            return { opacity: 0 }
          default:
            return {}
        }
      },
      trail: 200,
    }
  )

  const IMAGE = { key: `image-logo` }

  const imageTransitionRef = useRef()
  const imageTransition = useTransition(IMAGE, item => item.key, {
    ref: imageTransitionRef,
    from: { scale: 150, opacity: 1, transform: 'scale(1)', freq: '0.0, 0.0' },
    enter: {
      scale: 10,
      opacity: 0,
      transform: 'scale(0.9)',
      freq: '0.0175, 0.0',
    },
  })

  const [expanded, setExpanded] = useState(false)
  const schedulerSpringRef = useRef()
  // 3 states are represented by this...brain try to remember :(...
  const schedulerSpring = useSpring({
    ref: schedulerSpringRef,
    from: {
      sliderTransform: `translate3d(0,0vh,0)`,
      hintOpacity: 0,
      headerOpacity: 0,
      headerTransform: `translate3d(0,0px,0)`,
      bodyOpacity: 0,
      footerOpacity: 0,
    },
    to: [
      {
        sliderTransform: `translate3d(0,${
          expanded ? -(PAGE_HEIGHT + HINT_HEIGHT) : -HINT_HEIGHT
        }vh,0)`,
      },
      { hintOpacity: 1 },
      {
        headerOpacity: expanded ? 1 : 0,
        headerTransform: expanded
          ? `translate3d(0,0px,0)`
          : `translate3d(0,-40px,0)`,
      },
      {
        bodyOpacity: expanded ? 1 : 0,
        bodyTransform: expanded
          ? `translate3d(0,0px,0)`
          : `translate3d(0,-40px,0)`,
      },
      {
        footerOpacity: expanded ? 1 : 0,
        footerTransform: expanded
          ? `translate3d(0,0px,0)`
          : `translate3d(0,-40px,0)`,
      },
    ],
    trail: 200,
  })

  // useChain([
  //   imageTransitionRef,
  //   invitationTransitionRef,
  //   subjectTransitionRef,
  //   infoHeaderTransitionRef,
  //   dividerTransitionRef,
  //   infoItemsTransitionRef,
  //   schedulerTransitionRef,
  //   schedulerLabelTransitionRef,
  //   schedulerIconTransitionRef,
  // ])

  // useChain([
  //   imageTransitionRef,
  //   invitationTransitionRef,
  //   subjectTransitionRef,
  //   infoHeaderTransitionRef,
  //   dividerTransitionRef,
  //   infoItemsTransitionRef,
  //   schedulerTransitionRef,
  // ])

  // useChain([
  //   imageTransitionRef,
  //   invitationTransitionRef,
  //   infoHeaderTransitionRef,
  //   dividerTransitionRef,
  //   infoItemsTransitionRef,
  //   schedulerTransitionRef,
  // ])

  // useChain([
  //   imageTransitionRef,
  //   invitationTransitionRef,
  //   infoTransitionRef,
  //   schedulerTransitionRef,
  // ])

  // useChain([
  //   imageTransitionRef,
  //   invitationTransitionRef,
  //   infoTransitionRef,
  // ])

  useChain([
    imageTransitionRef,
    invitationTransitionRef,
    infoTransitionRef,
    schedulerSpringRef,
  ])

  return (
    <MainContainer>
      <BackgroundContainer>
        <Background filterSprings={imageTransition} />
      </BackgroundContainer>
      <Container>
        {/* <InvitationContainer>
          {invitationTransition.map(({ item, key, props }) => (
            <InvitationChunk key={key} item={item} props={props} />
          ))}
        </InvitationContainer>
        <InvitationSubjectContainer>
          {subjectTransition.map(({ item, key, props }) => (
            <Subject key={key} item={item} props={props} />
          ))}
        </InvitationSubjectContainer> */}
        {/* <InfoHeaderContainer>
          {infoHeaderTransition.map(({ item, key, props }) => (
            <Header key={key} item={item} props={props} />
          ))}
        </InfoHeaderContainer>
        <ContactInfoContainer>
          <ContactInfo phone={PHONE} email={EMAIL} />
        </ContactInfoContainer> */}
        {/* <InvitationContainer>
          <Invitation springs={[invitationTransition, subjectTransition]} />
        </InvitationContainer> */}
        <InvitationContainer>
          <Invitation springs={invitationTransition} />
        </InvitationContainer>
        {/* <Info
          headerSpring={infoHeaderTransition}
          dividerSpring={dividerTransition}
          infoItemSprings={infoItemsTransition}
        /> */}
        <InfoContainer>
          <Info springs={infoTransition} />
        </InfoContainer>
        <Scheduler setExpanded={setExpanded} spring={schedulerSpring} />
      </Container>
      {/* <SliderLayout>
        <ContactFormPlaceholder>placeholder</ContactFormPlaceholder>
      </SliderLayout> */}
    </MainContainer>
  )
}
