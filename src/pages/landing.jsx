import React, { Component, Suspense } from 'react'

import styled from 'styled-components'

const Landing = React.lazy(() => import('../components/Landing'))

const LandingLoadingTitle = styled.h1`
  margin-left: 50%;
  margin-top: 20%;
  font-size: 48px;
  color: white;
  font-family: 'roboto';
`

const LandingLoadingContainer = styled.div`
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
      <Suspense fallback={LandingLoading}>
        <Landing />
      </Suspense>
    )
  }
}
