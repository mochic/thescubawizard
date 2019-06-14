import React from 'react'

import styled from 'styled-components'
import { animated, useSpring } from 'react-spring'

const PageContainer = styled(animated.div)`
  background: linear-gradient(
    180deg,
    rgba(44, 145, 147, 0.9) 0%,
    rgba(1, 0, 0, 0.9) 100%
  );
  z-index: -1;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  display: grid;
  grid-template-rows: repeat(20, 1fr);
  grid-template-columns: repeat(20, 1fr);
`

const TitleContainer = styled(animated.div)`
  grid-column-start: 3;
  grid-column-end: 15;
  grid-row-start: 11;
  grid-row-end: 18;
  padding-left: 8%;
  padding-top: 12%;
  z-index: 1000;
  width: 100%;
  height: 100%;
`

export default ({ revealed }) => {
  const { dasharray } = useSpring({
    to: {
      dasharray: revealed ? 0 : 1000,
    },
  })

  return (
    <PageContainer>
      <TitleContainer>
        {/* <MainTitle dasharray={dasharray} dashoffset={1000} /> */}
      </TitleContainer>
    </PageContainer>
  )
}
