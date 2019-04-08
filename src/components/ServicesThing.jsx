import React, { Component } from 'react'

import { animated, useTransition } from 'react-spring'
import styled from 'styled-components'

const ServiceContainer = styled.div``

const Service = ({ name, handleClick }) => (
  <ServiceContainer onClick={handleClick}>{name}</ServiceContainer>
)

const PageContainer = styled.div``

export default () => <PageContainer>Page</PageContainer>
