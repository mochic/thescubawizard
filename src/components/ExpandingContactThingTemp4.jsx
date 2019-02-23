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
import {
  useSpring,
  useTransition,
  useChain,
  animated,
  config,
} from 'react-spring'
// #383f42

const PseudoFabContainer = styled.div`
  position: fixed;
  bottom: 0px;
  left: 0px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const PseudoFabThing = styled.div`
  position: absolute;
  bottom: 0px;
  right: 0px;
`

const PseudoFab = styled(Paper)`
  height: 56px;
  width: 56px;
  overflow: hidden;
`

const ContactButton = styled(IconButton)`
  height: 56px;
  width: 56px;
`

const ContactIcon = styled(EmailIcon)``

const ExtendedContactIcon = styled(EmailIcon)`
  margin-right: 5%;
`

const ContactFab = styled(Fab)``

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
  marginBottom,
  toggleExpanded,
}) => {
  return (
    <PseudoFab
      style={{ height, width, borderRadius, marginBottom }}
      elevation={10}
    >
      <ContactFab
        color="primary"
        variant="extended"
        onClick={toggleExpanded}
        style={{ height, width, opacity }}
      >
        <ExtendedContactIcon />
        contact
      </ContactFab>
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
    return (
      <MuiThemeProvider theme={MuiTheme}>
        <PseudoFabContainer>
          <Spring
            from={{
              height: '48px',
              width: '120px',
              borderRadius: '50px',
              opacity: 1,
              marginBottom: '10vh',
            }}
            to={{
              height: expanded ? `${window.screen.height}px` : '48px',
              width: expanded ? `${window.screen.width}px` : '120px',
              borderRadius: expanded ? '0px' : '50px',
              opacity: expanded ? 0 : 1,
              marginBottom: expanded ? '0vh' : '10vh',
            }}
            config={{ tension: 240, friction: 40 }}
          >
            {({ height, width, borderRadius, opacity, marginBottom }) => {
              return (
                <PseudoFab
                  style={{ height, width, borderRadius, marginBottom }}
                  elevation={8}
                >
                  <ContactFab
                    color="primary"
                    variant="extended"
                    onClick={this.toggleExpanded}
                    style={{ height, width, opacity }}
                  >
                    <ExtendedContactIcon />
                    contact
                  </ContactFab>
                </PseudoFab>
              )
            }}
          </Spring>
        </PseudoFabContainer>
        {/* <div style={{ position: 'fixed', top: '0', left: '0' }}>
          <Fab variant="extended">
            <ExtendedContactIcon />
            contact
          </Fab>
        </div> */}
      </MuiThemeProvider>
    )
  }
}

const [props, set] = useSpring(() => ({ opacity: 1 }))
