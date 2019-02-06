import React from 'react'
import styled from 'styled-components'

const Title = styled.h1``

const OtherServicesListItem = styled.li``

const OtherServicesDescription = styled.p``

const OtherServicesList = styled.ul``

const OtherServicesContainer = styled.div``

export default () => (
  <OtherServicesContainer>
    <Title>other services</Title>
    <OtherServicesDescription>
      I am willing to negotiate any scuba service that the customer may have
      need for. Some of my other capabilities include:{' '}
    </OtherServicesDescription>
    <OtherServicesList>
      <OtherServicesListItem>underwater construction</OtherServicesListItem>
      <OtherServicesListItem>underwater landscaping</OtherServicesListItem>
      <OtherServicesListItem>lift bag recovery</OtherServicesListItem>
    </OtherServicesList>
  </OtherServicesContainer>
)
