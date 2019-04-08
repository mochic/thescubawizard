import React from 'react'

import styled from 'styled-components'

import SliderLayout from './SliderLayout'

const Container = styled.div`
  height: 100vh;
  width: 100vw;
`

const ContactFormPlaceholder = styled.div`
  height: 100vh;
  width: 100vw;
`

// start simple make more elegant later
const MainContainer = styled.div`
  height: 100vh;
  width: 100vw;
`

export default () => {
  return (
    <MainContainer>
      <Container>placeholder</Container>
      <SliderLayout>
        <ContactFormPlaceholder>placeholder</ContactFormPlaceholder>
      </SliderLayout>
    </MainContainer>
  )
}
