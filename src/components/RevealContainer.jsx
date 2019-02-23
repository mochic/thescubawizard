import React from 'react'

const RevealContainer = ({ children, reveal }) => {
  return <>{reveal ? children : []}</>
}

RevealContainer.defaultProps = {
  reveal: false,
}

export default RevealContainer
