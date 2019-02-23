import React, { useState, useRef } from 'react'

import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles'

import Fab from '@material-ui/core/Fab'
import Paper from '@material-ui/core/Paper'

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

// IMPORTANT: make sure to change MuiPaper elevation8 if you change elevation!
const MuiTheme = createMuiTheme({
  palette: {
    primary: { main: '#4c859c' },
    secondary: { main: '#ffffff' },
  },
  overrides: {
    MuiFab: {
      extended: {
        willChange: 'transform, opacity',
      },
    },
    MuiPaper: {
      elevation8: {
        background: '#4c859c',
        willChange: 'transform',
      },
    },
  },
})

const AnimatedFab = animated(Fab)

const AnimatedPaper = animated(Paper)

const FauxFab = styled(animated.button)`
  background: '#4c859c';
  border: none;
  box-shadow: 0 3px 4px 0 rgba(0, 0, 0, 0.14), 0 3px 3px -2px rgba(0, 0, 0, 0.2),
    0 1px 8px 0 rgba(0, 0, 0, 0.12);
  &:after {
    background-color: '#6eb9f7';
    background-size: 100%;
    transition: background 0s;
  }
  &:focus {
    outline: none;
  }
`

const FauxPaper = styled(animated.div)`
  box-shadow: 0 3px 4px 0 rgba(0, 0, 0, 0.14), 0 3px 3px -2px rgba(0, 0, 0, 0.2),
    0 1px 8px 0 rgba(0, 0, 0, 0.12);
`

function ExpandingContactComponent() {
  const [expanded, setExpanded] = useState(false)

  const expandingFabRef = useRef()
  const expandingFabProps = useSpring({
    ref: expandingFabRef,
    config: { tension: 240, friction: 40 },
    from: {
      height: '48px',
      width: '120px',
      background: '#4c859c',
      borderRadius: '24px',
      opacity: '1',
      marginBottom: '10%',
    },
    to: {
      height: expanded ? window.screen.height + 'px' : '48px',
      width: expanded ? window.screen.width + 'px' : '120px',
      background: expanded ? '#4c859c' : '#4c859c',
      borderRadius: expanded ? '0px' : '24px',
      opacity: expanded ? '0' : '1',
      marginBottom: expanded ? '0%' : '10%',
    },
  })

  const expandingContainerRef = useRef()
  const expandingContainerProps = useSpring({
    ref: expandingContainerRef,
    config: { tension: 240, friction: 40 },
    from: {
      height: '48px',
      width: '120px',
      background: '#4c859c',
      borderRadius: '24px',
      marginBottom: '10%',
    },
    to: {
      height: expanded ? window.screen.height + 'px' : '48px',
      width: expanded ? window.screen.width + 'px' : '120px',
      background: expanded ? '#4c859c' : '#4c859c',
      borderRadius: expanded ? '0px' : '24px',
      marginBottom: expanded ? '0%' : '10%',
    },
  })

  useChain(
    expanded
      ? [expandingContainerRef, expandingFabRef]
      : [expandingContainerRef, expandingFabRef],
    [0, 0]
  )

  return (
    <MuiThemeProvider theme={MuiTheme}>
      <FauxPaper style={expandingContainerProps}>
        <FauxFab
          onClick={() => setExpanded(expanded => !expanded)}
          style={expandingFabProps}
        />
      </FauxPaper>
      {/* <AnimatedFab
        color="primary"
        onClick={() => setExpanded(expanded => !expanded)}
        style={expandingFabProps}
        variant="extended"
      >
        <EmailIcon style={{ marginLeft: '5%' }} />
        contact
      </AnimatedFab> */}
    </MuiThemeProvider>
  )
}

export default ExpandingContactComponent
