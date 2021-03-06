import React, { Component } from 'react'

import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles'

import Fab from '@material-ui/core/Fab'
import Button from '@material-ui/core/Button'
import Paper from '@material-ui/core/Paper'
import TouchRipple from '@material-ui/core/ButtonBase/TouchRipple'
import Icon from '@material-ui/core/Icon'
import IconButton from '@material-ui/core/IconButton'
import ButtonBase from '@material-ui/core/ButtonBase'

import EmailIcon from '@material-ui/icons/Email'
import ClearIcon from '@material-ui/icons/Clear'

import styled from 'styled-components'
import { Spring, Transition, animated, config } from 'react-spring'
// #383f42

const PseudoFabContainer = styled.div`
  position: fixed;
  bottom: 0px;
  right: 0px;
  margin-right: 5%;
  margin-bottom: 15%;
`

const PseudoFabThing = styled.div`
  position: absolute;
  bottom: 0px;
  right: 0px;
`

const PseudoFab = styled(Paper)`
  height: 56px;
  width: 56px;
`

const ContactButton = styled(IconButton)`
  height: 56px;
  width: 56px;
`

const ContactIcon = styled(EmailIcon)``

// IMPORTANT: make sure to change MuiPaper elevation8 if you change elevation!
const MuiTheme = createMuiTheme({
  palette: {
    primary: { main: '#4c859c' },
    secondary: { main: '#ffffff' },
  },
  overrides: {
    MuiPaper: {
      elevation8: {
        background: '#4c859c',
        borderRadius: '100%',
      },
    },
  },
})

const Contact = styled.div`
  background: yellow;
  height: 100%;
  width: 100%;
`

const ExpandingContactThing = ({
  toggle,
  height,
  width,
  borderRadius,
  opacity,
  toggleExpanded,
}) => {
  console.log(height, width, borderRadius)
  return (
    <PseudoFab style={{ height, width, borderRadius }} elevation={8}>
      <PseudoFabThing>
        <ContactButton
          color="secondary"
          onClick={toggleExpanded}
          style={{ borderRadius }}
        >
          <ContactIcon style={{ opacity }} />
        </ContactButton>
      </PseudoFabThing>
    </PseudoFab>
  )
}

export default class ExpandingContactThingComponent extends Component {
  static defaultProps = {
    expanded: false,
  }

  constructor(props) {
    super(props)
    this.state = {
      expanded: this.props.expanded,
    }
  }

  toggleExpanded = () => {
    this.setState({ expanded: !this.state.expanded })
  }

  render = () => {
    const expanded = this.state.expanded
    console.log(expanded)
    return (
      <MuiThemeProvider theme={MuiTheme}>
        <PseudoFabContainer>
          <Spring
            from={{
              height: '56px',
              width: '56px',
              borderRadius: '100%',
              opacity: 1,
            }}
            to={{
              height: expanded ? '640px' : '56px',
              width: expanded ? '300px' : '56px',
              borderRadius: expanded ? '0%' : '100%',
              opacity: 1,
            }}
            config={{ tension: 240, friction: 40 }}
          >
            {props => {
              console.log(props)
              return (
                <ExpandingContactThing
                  {...props}
                  toggleExpanded={this.toggleExpanded}
                  height={props.height}
                />
              )
            }}
          </Spring>
        </PseudoFabContainer>
      </MuiThemeProvider>
    )
  }
}
