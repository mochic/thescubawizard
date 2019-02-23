import React from 'react'

import styled from 'styled-components'

import ExpandingContactComponent from '../components/ExpandingContactThing'

const PageContainer = styled.div`
  background: green;
  height: 100vh;
  width: 100vw;
`

const ContactContainer = styled.div`
  position: fixed;
  bottom: 0;
  display: flex;
  width: 100%;
  justify-content: center;
`

export default () => (
  <>
    <PageContainer>
      <ContactContainer>
        <ExpandingContactComponent />
      </ContactContainer>
    </PageContainer>
    <div style={{ height: '100vh', width: '100vw' }} />
  </>
)
