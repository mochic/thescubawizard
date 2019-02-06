import React, { Component } from 'react'

import styled from 'styled-components'
// import { Parallax, ParallaxLayer } from 'react-spring/addons'
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles'

import Fab from '@material-ui/core/Fab'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import Fade from '@material-ui/core/Fade'
import Grow from '@material-ui/core/Grow'
import Paper from '@material-ui/core/Paper'

import EmailIcon from '@material-ui/icons/Email'
import ClearIcon from '@material-ui/icons/Clear'

import Contact from '../components/Contact'

import Logo from '../components/Logo'

import ExpandingContactThing from '../components/ExpandingContactThing'

const BackgroundLogoContainer = styled.div`
  background: #464341;
  height: 300vh;
  width: 100%;
  padding-top: 50%;
  top: 0px;
  left: 0px;
  overflow: scroll;
`

const ContactFabContainer = styled.div`
  top: 0px;
  left: 0px;
  position: fixed;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
`

const FabContainer = styled.div`
  padding: 5%;
  position: fixed !important;
  z-index: 100000;
`

const PseudoFab = styled(Button)`
  border-radius: 100% !important;
  height: 88px;
  width: 88px;
`

const ContactIcon = styled(EmailIcon)`
  color: #bec0c2;
`

const ContactPaperContainer = styled(Paper)`
  height: 100%;
  width: 100%;
  background: #4c859c !important;
  z-index: 2;
`

const ContactContainer = styled.div`
  color: white;
  background: red;
  z-index: 10000;
`

const CloseIcon = styled(ClearIcon)``

const ContactFab = props => {
  return (
    <FabContainer>
      <PseudoFab color="primary" {...props}>
        <ContactIcon />
      </PseudoFab>
    </FabContainer>
  )
}

class ExpandingContactFab extends Component {
  static defaultProps = {
    expanded: false,
  }

  constructor(props) {
    super(props)
    this.state = {
      expanded: props.expanded,
    }
  }

  toggleExpand = () => {
    this.setState({ expanded: !this.state.expanded })
  }

  render = () => {
    return (
      <ContactFabContainer>
        <Grow
          in={this.state.expanded}
          style={{ transformOrigin: '70% 70%' }}
          timeout={1000}
        >
          <ContactPaperContainer elevation={8} square={true}>
            <Contact />
            <Fade in={this.state.expanded}>
              <IconButton onClick={this.toggleExpand}>
                <CloseIcon />
              </IconButton>
            </Fade>
          </ContactPaperContainer>
        </Grow>
        <Fade in={!this.state.expanded}>
          <ContactFab />
        </Fade>
      </ContactFabContainer>
    )
  }
}

const MuiTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#4c859c',
      secondary: 'black',
    },
  },
  overrides: {},
})

class SimplePage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      scrollY: 0,
    }
  }

  componentDidMount = () => {
    window.addEventListener(`scroll`, this.handleScroll)
  }

  componentWillUnmount = () => {
    window.removeEventListener(`scroll`, this.handleScroll)
  }

  handleScroll = e => {
    console.log(e)
  }

  render = () => {
    return (
      <MuiThemeProvider theme={MuiTheme}>
        <BackgroundLogoContainer>
          <Logo />
        </BackgroundLogoContainer>
        <ContactContainer>
          <Contact />
        </ContactContainer>
        <ExpandingContactThing />
      </MuiThemeProvider>
    )
  }
}

export default SimplePage
