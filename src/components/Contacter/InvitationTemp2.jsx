import React, { useRef, useState } from 'react'

import styled from 'styled-components'
import { animated, useChain, useTransition } from 'react-spring'

const InvitationChunk = styled(animated.span)`
  color: white;
  font-family: -apple-system, roboto;
  font-size: 56px;
  overflow: hidden;
`

const ChunkContainer = styled.div``

export const InvitationContainer = styled(animated.div)`
  width: 70%;
  margin: 8%;
`

// export default ({ invitationChunks }) => {
//   const [chunks, setChunks] = useState(invitationChunks)
//   const transitions = useTransition(chunks, item => item.key, {
//     from: {
//       opacity: 0,
//     },
//     enter: {
//       opacity: 1,
//     },
//     leave: {
//       opacity: 0,
//     },
//     trail: 300,
//   })

//   return (
//     <InvitationContainer>
//       {transitions.map(({ item, key, props }) => {
//         return (
//           <InvitationChunk key={key} style={props}>
//             {item.text}
//           </InvitationChunk>
//         )
//       })}
//     </InvitationContainer>
//   )
// }

const FIRST_CHUNK = [
  { key: `chunk-0`, value: `Let's ` },
  { key: `chunk-1`, value: `talk ` },
  // { key: `chunk-2`, value: `about ` },
  // { key: `chunk-3`, value: `your ` },
  // { key: `chunk-4`, value: `next` },
]

const VERB_CHUNK = [{ key: `chunk-1`, value: `talk ` }]

const SECOND_CHUNK = [
  { key: `chunk-2`, value: `about ` },
  { key: `chunk-3`, value: `your ` },
  { key: `chunk-4`, value: `next` },
]

const SUBJECT_CHUNK = [
  { key: `chunk-5`, value: `dive job` },
  { key: `chunk-6`, value: `.` },
]

export default () => {
  const firstChunkTransitionsRef = useRef()
  const firstChunkTransitions = useTransition(FIRST_CHUNK, item => item.key, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { transform: `translate3d(0,-40px,0)`, opacity: 0 },
    ref: firstChunkTransitionsRef,
    trail: 300,
  })

  // const verbChunkTransitionRef = useRef()
  // const verbChunkTransition = useTransition(VERB_CHUNK, item => item.key, {
  //   from: { opacity: 0, transform: `translate3d(0,-40px,0)` },
  //   enter: { opacity: 1, transform: `translate3d(0,0px,0)` },
  //   leave: { opacity: 0, transform: `translate3d(0,-40px,0)` },
  //   ref: verbChunkTransitionRef,
  // })

  const secondChunkTransitionsRef = useRef()
  const secondChunkTransitions = useTransition(SECOND_CHUNK, item => item.key, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { transform: `translate3d(0,-40px,0)`, opacity: 0 },
    ref: secondChunkTransitionsRef,
    // delay: 80,
    trail: 300,
  })

  const subjectChunkTransitionsRef = useRef()
  const subjectChunkTransitions = useTransition(
    SUBJECT_CHUNK,
    item => item.key,
    {
      from: { opacity: 0 },
      enter: { opacity: 1 },
      leave: { opacity: 0 },
      ref: subjectChunkTransitionsRef,
      // delay: 80,
      trail: 300,
    }
  )

  useChain([
    firstChunkTransitionsRef,
    // verbChunkTransitionRef,
    secondChunkTransitionsRef,
    subjectChunkTransitionsRef,
  ])

  return (
    <>
      <ChunkContainer>
        {firstChunkTransitions.map(({ item, key, props }) => {
          return (
            <InvitationChunk key={key} style={props}>
              {item.value}
            </InvitationChunk>
          )
        })}
        {/* {verbChunkTransition.map(({ item, key, props }) => {
          return (
            <InvitationChunk
              key={key}
              style={{ position: `relative`, ...props }}
            >
              {item.value}
            </InvitationChunk>
          )
        })} */}
      </ChunkContainer>
      <ChunkContainer>
        {secondChunkTransitions.map(({ item, key, props }) => {
          return (
            <InvitationChunk key={key} style={props}>
              {item.value}
            </InvitationChunk>
          )
        })}
      </ChunkContainer>
      <ChunkContainer>
        {subjectChunkTransitions.map(({ item, key, props }) => {
          return (
            <InvitationChunk key={key} style={props}>
              {item.value}
            </InvitationChunk>
          )
        })}
      </ChunkContainer>
    </>
  )
}
