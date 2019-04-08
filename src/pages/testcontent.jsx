import React, { Component } from 'react'

import styled from 'styled-components'
import VisibilitySensor from 'react-visibility-sensor'

import Introduction from '../components/Introduction'

const PageContainer = styled.div`
  margin-top: 100vh;
`

export default () => (
  <PageContainer>
    <VisibilitySensor>
      {({ isVisible }) => <Introduction isVisible={isVisible} />}
    </VisibilitySensor>
  </PageContainer>
)
