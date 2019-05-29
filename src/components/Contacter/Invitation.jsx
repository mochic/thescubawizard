import React from 'react'

import { animated } from 'react-spring'
import styled from 'styled-components'

// const InvitationItemContainer = styled(animated.div)`
//   color: white;
//   font-family: roboto;
//   font-size: 56px;
//   line-height: 1;
//   display: inline-block;
// `

// const InvitationItem = ({ spring: { key, item, props } }) => {
//   return (
//     <InvitationItemContainer key={key} style={props}>
//       {item.text}
//     </InvitationItemContainer>
//   )
// }

const TextItemContainer = styled(animated.div)`
  color: white;
  font-family: roboto;
  font-size: 56px;
  line-height: 1;
  display: inline-block;
`

const TextChunk = ({ item, props }) => {
  return <TextItemContainer style={props}>{item.text}</TextItemContainer>
}

const SubjectItem = styled(animated.div)`
  margin-left: 10px;
  margin-top: 40px;
  color: #ffb800;
  font-family: roboto;
  font-size: 56px;
  line-height: 1;
  display: relative;
`

const Container = styled(animated.div)``

// // todo: figure out a more elegant way to do the invitation
// export default ({
//   springs: [
//     {
//       invKey,
//       invItem: { textChunks },
//       invProps,
//     }, // very strict interface at front is good?
//     subjectSpring,
//   ],
// }) => {
//   return (
//     <>
//       {
//         <Container>
//           <InvitationItem spring={invitationSpring0} />
//           <InvitationItem spring={invitationSpring1} />
//           <InvitationItem spring={invitationSpring2} />
//           <SubjectItem key={subjectSpring.key} style={subjectSpring.props}>
//             {subjectSpring.item.text}
//           </SubjectItem>
//         </Container>
//       }
//     </>
//   )
// }

// todo: figure out a more elegant way to do the invitation
export default ({
  springs: [
    {
      key: invKey,
      item: { textChunks },
      props,
    }, // very strict interface at front is good?
    subjectSpring,
  ],
}) => {
  return (
    <>
      {
        <Container>
          <TextChunk
            key={textChunks[0].key}
            item={textChunks[0]}
            props={props}
          />
          <TextChunk
            key={textChunks[1].key}
            item={textChunks[1]}
            props={props}
          />
          <TextChunk
            key={textChunks[2].key}
            item={textChunks[2]}
            props={props}
          />
          <SubjectItem key={subjectSpring.key} style={subjectSpring.props}>
            {subjectSpring.item.text}
          </SubjectItem>
        </Container>
      }
    </>
  )
}
