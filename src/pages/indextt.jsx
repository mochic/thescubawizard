import React from 'react'
import { Link } from 'gatsby'

import styled from 'styled-components'

import Layout from '../components/layout'
import CoreServices from '../components/CoreServices'
import OtherServices from '../components/OtherServices'
import ScheduleForm from '../components/ScheduleForm'
import About from '../components/About'
import Logo from '../components/Logo'

import Services from '../components/Services'

import SEO from '../components/seo'

const ServicesContainer = styled.div`
  background: #474341;
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Logo />
    </div>
    {/* <CoreServices />
    <OtherServices />
    <About /> */}
    {/* <ScheduleForm /> */}
    <ServicesContainer>
      <Services />
    </ServicesContainer>
    {/* <Link to="/page-2/">Go to page 2</Link> */}
  </Layout>
)

export default IndexPage
