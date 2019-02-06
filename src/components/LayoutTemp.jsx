import React from 'react'
import styled from 'styled-components'

const LayoutHeader = styled.h1`
  color: #333;
  text-shadow: 0px 1px 0px rgba(255, 255, 255, 0.5); /* 50% white from bottom */
`

const LayoutContainer = styled.div`
  background-color: rgba(71, 67, 65, 0.8);
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 100%;
  width: 100%;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
`

export default ({ children, title }) => (
  <LayoutContainer>
    <LayoutHeader>{title}</LayoutHeader>
    {children}
  </LayoutContainer>
)
