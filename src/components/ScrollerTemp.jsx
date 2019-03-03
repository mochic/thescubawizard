import React from 'react'

import styled, { keyframes } from 'styled-components'

import { MdKeyboardArrowDown } from 'react-icons/md'

const transYKeys = keyframes`
    0% {
        transform: translateY(0px);
        opacity: 0.7;
    }
    100% {
        transform: translateY(40px);
        opacity: 0.0;
    }
`

const ScrollIcon = styled(MdKeyboardArrowDown)`
  color: #fffff;
  opacity: 0.5;
  font-size: 40px;
  position: absolute;
  top: -45px;
  animation: ${transYKeys} 2.5s ease-in-out infinite;
`

export default () => {
  return (
    <>
      <ScrollIcon />
    </>
  )
}
