import React from 'react'

import styled from 'styled-components'

const LayoutTitle = styled.h1``

const ChildrenContainer = styled.div``

const LayoutContainer = styled.div``

export default ({ children, title }) => (
  <LayoutContainer>
    <LayoutTitle>{title}</LayoutTitle>
    <ChildrenContainer>{children}</ChildrenContainer>
  </LayoutContainer>
)
