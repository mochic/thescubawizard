import React from 'react'
import styled from 'styled-components'

const ExternalLinkContainer = styled.a``

export const ExternalLink = ({ uri, children }) => (
  <ExternalLinkContainer href={uri}>{children}</ExternalLinkContainer>
)
