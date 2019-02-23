import React, { Component } from 'react'

export default class RevealLayout extends Component {
  componentDidMount = () => {
    this.props.parent().addEventListener('scroll', this.handleScroll)
    this.props.parent().addEventListener('resize', this.handleResize)
  }

  componentWillUnmount = () => {
    this.props.parent().removeEventListener('scroll', this.handleScroll)
    this.props.parent().removeEventListener('resize', this.handleResize)
  }

  handleResize = e => {}

  handleScroll = e => {}

  render = () => {
    return 
  }
}
