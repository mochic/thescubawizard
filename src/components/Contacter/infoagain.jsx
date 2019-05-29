import React from 'react'

import { animated } from 'react-spring'
import styled from 'styled-components'

const OnColorASpan = styled(animated.span)`
  color: white;
`

const OffColorASpan = styled(animated.span)`
  color: #ffb800;
`

const Header = styled(animated.div)`
  color: white;
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

const Container = styled(animated.div)`
  display: inline-block;
  font-family: roboto;
  overflow: hidden;
  width: 100%;
`

const PhoneLabel = styled(animated.span)`
  color: white;
`

const PhoneInfo = styled(animated.div)`
  diplay: flex;
  justify-content: space-between;
`

const OnColorPhoneInfoChunk = styled(animated.span)`
  color: white;
  margin-left: 1px;
  margin-right: 1px;
`

const OffColorPhoneInfoChunk = styled(animated.span)`
  color: #ffb800;
  margin-left: 2px;
  margin-right: 2px;
`

const PhoneItemContainer = styled(animated.div)`
  overflow: hidden;
  font-size: 20px;
  font-family: roboto;
  display: flex;
  justify-content: space-between;
`

const PhoneItem = ({
  item: {
    info: { area, prefix, line },
  },
}) => {
  return (
    <PhoneItemContainer>
      <PhoneLabel>phone</PhoneLabel>
      <PhoneInfo>
        {/* <OffColorASpan key={area.key}>{`(${area.text})`}</OffColorASpan>
        <OnColorASpan key={prefix.key}>{prefix.text}</OnColorASpan>
        <OnColorASpan>-</OnColorASpan>
        <OnColorASpan key={line.key}>{line.text}</OnColorASpan> */}
        <OffColorPhoneInfoChunk key={area.key}>{`(${
          area.text
        })`}</OffColorPhoneInfoChunk>
        <OnColorPhoneInfoChunk key={prefix.key}>
          {prefix.text}
        </OnColorPhoneInfoChunk>
        <OnColorPhoneInfoChunk>-</OnColorPhoneInfoChunk>
        <OnColorPhoneInfoChunk key={line.key}>
          {line.text}
        </OnColorPhoneInfoChunk>
      </PhoneInfo>
    </PhoneItemContainer>
  )
}

const EmailLabel = styled(animated.span)`
  color: white;
`

const EmailInfo = styled(animated.span)`
  display: block;
`

const EmailItemContainer = styled(animated.div)`
  overflow: hidden;
  font-size: 20px;
  font-family: roboto;
  display: flex;
  justify-content: space-between;
`

const EmailItem = ({
  item: {
    info: { local, domain },
  },
}) => {
  return (
    <EmailItemContainer>
      <EmailLabel>email</EmailLabel>
      <EmailInfo>
        <OnColorASpan key={local.key}>{`${local.text}`}</OnColorASpan>
        <OffColorASpan key={domain.key}>{`@${domain.text}`}</OffColorASpan>
      </EmailInfo>
    </EmailItemContainer>
  )
}

export default ({
  springs: [
    {
      key,
      item: { emailItem, phoneItem },
      props: { innerWidth, ...rest },
    },
  ],
}) => {
  return (
    <>
      {
        <Container key={key} style={{ ...rest }}>
          <Header>contact</Header>
          <Divider />
          <EmailItem key={emailItem.key} item={emailItem} />
          <PhoneItem key={phoneItem.key} item={phoneItem} />
        </Container>
      }
    </>
  )
}
