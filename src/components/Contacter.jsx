import React from 'react'

import styled from 'styled-components'

import { MdMailOutline } from 'react-icons/md'

const ContacterIcon = styled(MdMailOutline)`
  color: #ffffff;
  font-size: 24px;
`

export default ({ handleClick }) => {
  return (
    <>
      <ContacterIcon onClick={handleClick} />
    </>
  )
}
