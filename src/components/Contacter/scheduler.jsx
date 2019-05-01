import React from 'react'

import { animated } from 'react-spring'
import styled from 'styled-components'

import { MdExpandLess } from 'react-icons/md'

const Container = styled(animated.div)`
  display: flex;
  align-items: flex-end;
`

const Label = styled(animated.div)`
  color: white;
  font-size: 36px;
  font-family: roboto;
  line-height: 1;
`

const LabelContainer = styled(animated.div)``

const Icon = styled(animated.div)`
  color: white;
  font-size: 36px;
`

export default ({ labelSprings, iconSpring }) => {
  return (
    <Container>
      <LabelContainer>
        {labelSprings.map(({ item, key, props }) => (
          <Label key={key} style={props}>
            {item.text}
          </Label>
        ))}
      </LabelContainer>
      <>
        {iconSpring.map(({ key, props }) => (
          <Icon key={key} style={props}>
            <MdExpandLess />
          </Icon>
        ))}
      </>
    </Container>
  )
}
