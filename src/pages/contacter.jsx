import React from 'react'

import styled from 'styled-components'

import Contacter from '../components/Contacter'

const PageContainer = styled.div`
  height: 85vh;
  width: 100vw;
`

const NavMenuContainer = styled.div`
  height: 15vh;
  width: 100vw;
`

export default () => (
  <>
    <PageContainer>
      <Contacter />
    </PageContainer>
    <NavMenuContainer />
  </>
)
