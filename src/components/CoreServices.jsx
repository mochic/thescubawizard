import React from 'react'

import { FaMagic, FaLifeRing } from 'react-icons/fa'
import styled from 'styled-components'

const Title = styled.h1``

const MagicBullet = styled(FaLifeRing)`
  color: #39869d;
  padding-top: 1px;
  margin-right: 5%;
`

const CoreServicesListItemContainer = styled.li`
  color: white;
  font-family: anton;
`

const CoreServicesListItem = ({ children }) => (
  <CoreServicesListItemContainer>
    <MagicBullet />
    {children}
  </CoreServicesListItemContainer>
)

const CoreServicesList = styled.ul`
  list-style-type: none;
`

const CoreServicesContainer = styled.div``

export default () => (
  <CoreServicesContainer>
    <CoreServicesList>
      <CoreServicesListItem>Hull Cleaning</CoreServicesListItem>
      <CoreServicesListItem>Zinc Replacement</CoreServicesListItem>
      <CoreServicesListItem>Bottom Inspections</CoreServicesListItem>
      <CoreServicesListItem>Lost Item Recovery</CoreServicesListItem>
      <CoreServicesListItem>Underwater Photography</CoreServicesListItem>
    </CoreServicesList>
  </CoreServicesContainer>
)
