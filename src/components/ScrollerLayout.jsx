import React, { Component } from 'react'

import debounce from 'lodash-es/debounce'
import styled from 'styled-components'
import { animated, useSpring, useTransition, useChain } from 'react-spring'

const LayoutContainer = styled(animated.div)``

export default class ScrollerLayout extends Component {
  constructor(props) {
    super(props)
    this.state = {
      scrollTop: 0,
    }
  }

  handleScroll = e => {
    this.setState({
      scrollTop: e.target.scrollTop,
    })
  }

  render = () => {
    return <LayoutContainer onScroll={this.handleScroll}>wut</LayoutContainer>
  }
}
