import React, { Component, Suspense } from 'react'

import styled from 'styled-components'
import { animated, useTransition } from 'react-spring'

const LandingContainer = styled.div``

const Landing = React.lazy(() => import('../components/Landing'))

const LandingLoadingTitle = styled.h1`
  margin-left: 50%;
  margin-top: 20%;
  font-size: 48px;
  color: white;
  font-family: 'roboto';
  overflow: hidden;
`

const LandingLoadingContainer = styled(animated.div)`
  background: #343434;
`

const LandingLoading = () => {
  return (
    <LandingLoadingContainer>
      <LandingLoadingTitle>the scuba wizard</LandingLoadingTitle>
    </LandingLoadingContainer>
  )
}

export default class PageComponent extends Component {
  render = () => {
    return (
      <Suspense fallback={<div>loading...</div>}>
        <LandingContainer>
          <Landing />
        </LandingContainer>
      </Suspense>
    )
  }
}
// suspense is buggy with hmr?
// export default class PageComponent extends Component {
//   render = () => {
//     return <Landing />
//   }
// }
