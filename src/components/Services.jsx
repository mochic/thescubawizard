import React, { Component } from 'react'

import styled from 'styled-components'

import Avatar from '@material-ui/core/Avatar'

import BuildIcon from '@material-ui/icons/Build'
import WavesIcon from '@material-ui/icons/Waves'

import { FaAnchor, FaCertificate } from 'react-icons/fa'

// const CoreServicesAvatar = styled(Avatar)`
//   background: #3d5e69 !important;
//   color: #969899 !important;
//   margin: 10%;
// `

const CoreServicesAvatar = styled.div`
  border: 2px solid #3d5e69;
  border-radius: 100%;
  margin: 10%;
  height: 100px;
  width: 100px;
`

const CoreServicesIcon = styled(FaAnchor)`
  color: #969899;
  font-size: 48px;
  margin: 16%;
`

const CertificateIcon = styled(FaCertificate)`
  color: #3d5e69;
  font-size: 28px;
`

const CoreServicesContainer = styled.div`
  align-items: center;
  color: #969899;
  display: flex;
  flex-direction: column;
  height: 40%;
`

const OtherServicesAvatar = styled(Avatar)`
  background: #3d5e69 !important;
  color: #969899 !important;
  margin: 10%;
`

const OtherServicesIcon = styled(WavesIcon)`
  font-size: 28px;
`

const OtherServicesContainer = styled.div`
  align-items: center;
  color: #969899;
  display: flex;
  flex-direction: column;
  height: 40%;
`

const ListItem = styled.li``

const List = styled.ul``

const ServicesList = ({ services }) => (
  <List>
    {services.map(service => (
      <ListItem key={`service-${service}`}>
        <CertificateIcon />
        {service}
      </ListItem>
    ))}
  </List>
)

const CORE_SERVICES = [
  'Hull Cleaning',
  'Zinc Replacement',
  'Bottom Inspections',
  'Recovery of Lost Items',
  'Underwater Photography',
]

const OTHER_SERVICES = [
  'Underwater Construction',
  'Underwater Landscaping',
  'Lift Bag Recovery',
]

export default () => {
  return (
    <>
      <CoreServicesContainer>
        <CoreServicesIcon />
        <ServicesList services={CORE_SERVICES} />
      </CoreServicesContainer>
      <OtherServicesContainer>
        <OtherServicesAvatar>
          <OtherServicesIcon />
        </OtherServicesAvatar>
        <ServicesList services={OTHER_SERVICES} />
      </OtherServicesContainer>
    </>
  )
}
