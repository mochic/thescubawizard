import React from 'react'

import { animated } from 'react-spring'
import styled from 'styled-components'

const Header = styled(animated.div)`
  font-family: roboto;
  font-size: 56px;
  font-weight: thin;
  line-height: 1;
`

const Divider = styled(animated.div)`
  height: 1px;
  background: #ffb800;
  margin-top: 10%;
  margin-bottom: 10%;
`

const InfoItemContainer = styled(animated.div)`
  overflow: hidden;
  font-size: 20px;
  font-family: roboto;
  display: flex;
  justify-content: space-between;
`

const InfoItemLabel = styled(animated.span)`
  overflow: hidden;
  line-height: 80px;
  color: white;
`

const InfoItemValue = styled(animated.span)`
  color: white;
`

const InfoItemValueContainer = styled(animated.span)`
  line-height: 80px;
`

const Container = styled(animated.div)`
  margin-top: 30px;
  margin-left: 10px;
  margin-right: 10px;
`

export default ({ headerSpring, dividerSpring, infoItemSprings }) => {
  const {
    key: headerKey,
    item: headerItem,
    props: headerProps,
  } = headerSpring[0]

  const { key: dividerKey, props: dividerProps } = dividerSpring[0]

  return (
    <Container>
      <Header key={headerKey} style={headerProps}>
        {headerItem.text}
      </Header>
      <Divider key={dividerKey} style={dividerProps} />
      <>
        {infoItemSprings.map(({ key, item, props }) => (
          <InfoItemContainer key={key} style={props}>
            <InfoItemLabel>{item.name}</InfoItemLabel>
            <InfoItemValueContainer>
              {item.subValues.map((subValue, idx) => (
                <InfoItemValue key={`info-sub-value-${idx}`}>
                  {subValue}
                </InfoItemValue>
              ))}
            </InfoItemValueContainer>
          </InfoItemContainer>
        ))}
      </>
    </Container>
  )
}
