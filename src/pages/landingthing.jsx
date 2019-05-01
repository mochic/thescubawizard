import React, { useState, useRef } from 'react'

import styled, { keyframes } from 'styled-components'
import { animated, useChain, useSpring, useTransition } from 'react-spring'

const BlurInKeys = keyframes``

const FadeUpKeys = keyframes`
    0% {
        opacity: 0.8;
    }
    50% {
      opacity: 0;
    }
    100% {
        opacity: 0.8;
    }
`

const Page = styled(animated.div)`
  background: red;
  color: white;
  font-family: roboto;
  height: 100vh;
  width: 100vw;
  z-index: -2;
  display: flex;
  flex-direction: column;
`

const FauxPage = styled(animated.div)`
  background: black;
  height: 100vh;
  width: 100vw;
  z-index: 0;
  position: fixed;
  top: 0px;
  left: 0px;
`

// const SiteTitle = styled(animated.div)`
//   color: transparent;
//   text-shadow: white 0 0 15px;
// `

const SiteTitle = styled(animated.div)`
  font-size: 56px;
  line-height: 1;
  padding-left: 18%;
  padding-top: 125%;
  z-index: 1;
  color: white;
`

const TitleChunk = styled(animated.div)``

const Hint = styled(animated.div)`
  animation: ${FadeUpKeys} 6s ease-in-out infinite;
  animation-delay: 0.5s;
  font-size: 18px;
  margin-top: 18%;
  margin-right: 35%;
  margin-left: 35%;
  z-index: 0;
`

const HintChunk = styled(animated.div)`
  display: flex;
  justify-content: center;
`

export default () => {
  const [open, toggle] = useState(true)

  const fauxPageRef = useRef()
  const props = useSpring({
    ref: fauxPageRef,
    transform: open ? `translate3d(0,0%,0)` : `translate3d(0,100%,0)`,
  })

  const title = [
    { key: `title-chunk-0`, text: `the ` },
    { key: `title-chunk-1`, text: `scuba ` },
    { key: `title-chunk-2`, text: `wizard` },
  ]

  const hint = [
    { key: `hint-chunk-0`, text: `tap anywhere` },
    { key: `hint-chunk-1`, text: `to continue` },
  ]

  const titleTransitionRef = useRef()
  const titleTransition = useTransition(title, item => item.key, {
    ref: titleTransitionRef,
    from: { opacity: 0 },
    enter: { opacity: 1, color: `red` },
    leave: { opacity: 0 },
  })

  const hintTransitionRef = useRef()
  const hintTransition = useTransition(hint, item => item.key, {
    ref: hintTransitionRef,
    from: { opacity: 0 },
    enter: { opacity: 0.8 },
    // leave: { opacity: 0 },
  })

  useChain(
    [fauxPageRef, titleTransitionRef, hintTransitionRef],
    [0.0, 0.3, 0.5]
  )

  return (
    <Page onClick={() => toggle(!open)}>
      <FauxPage style={props} />
      {open && (
        <>
          <SiteTitle>
            {titleTransition.map(({ item, key, props }) => {
              return (
                <TitleChunk key={key} style={props}>
                  {item.text}
                </TitleChunk>
              )
            })}
          </SiteTitle>
          <Hint>
            {hintTransition.map(({ item, key, props }) => {
              return (
                <HintChunk key={key} style={props}>
                  {item.text}
                </HintChunk>
              )
            })}
          </Hint>
        </>
      )}
    </Page>
  )
}
