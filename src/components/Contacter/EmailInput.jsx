import React, { Component } from 'react'

import { animated, useTransition } from 'react-spring'
import styled from 'styled-components'

const Input = styled(animated.input)``

const AppendDomainButton = styled(animated.button)``

// const narrowDomains = (email, domains) => {
//   // complicated like the way our inspiration does it to prevent struggle?
//   const current = email.split('@')[1]
//   // kinda feels hacky
//   const matches = domains.filter(
//     domain =>
//       domain.startsWith(current) || (current && current.startsWith(domain))
//   )

//   if (matches[0]) {
//     if (matches.length === 1 && current.length - matches[0].length > 2) {
//       console.log(current.length - matches[0].length > 2)
//       return domains // frustration condition, user typed in 3 characters more than closest match
//     } else {
//       return matches
//     }
//   } else {
//     return domains
//   }
// }

const narrowDomains = (email, domains) => {
  // complicated like the way our inspiration does it to prevent struggle?
  const current = email.split('@')[1]
  // kinda feels hacky
  const matches = domains.filter(domain => domain.contains(current))

  if (matches) {
    return matches
  }

  const contains = domains.filter(domain => domain.contains(current))

  if (contains[0] && contains[0])
    if (matches[0]) {
      if (matches.length === 1 && current.length - matches[0].length > 2) {
        console.log(current.length - matches[0].length > 2)
        return domains // frustration condition, user typed in 3 characters more than closest match
      } else {
        return matches
      }
    } else {
      return domains
    }
}

// Email input field that will show email chunk buttons
// for auto completion if they can still complete a valid address
class EmailInput extends Component {
  static defaultProps = {
    domains: ['gmail.com', 'hotmail.com', 'yahoo.com', 'outlook.com'],
  }

  static state = {
    email: '',
  }

  handleChange = e => {
    this.setState({
      email: e.currentTarget.value,
    })
  }

  appendDomain = domain => {
    this.setState({
      email: this.state.email.split('@')[0] + `@${domain}`,
    })
  }

  render = () => {
    // useTransition
    return (
      <>
        <Input
          type="text"
          value={this.state.email}
          onChange={this.handleChange}
          placeholder={`email address`}
        />
        {this.props.domains.map((domain, idx) => (
          <AppendDomainButton
            key={`domain-button-${idx}`}
            onClick={() => this.appendDomain(domain)}
          >{`@${domain}`}</AppendDomainButton>
        ))}
      </>
    )
  }
}

export default EmailInput
