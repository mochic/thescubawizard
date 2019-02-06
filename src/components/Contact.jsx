import React, { Component } from 'react'
import styled from 'styled-components'

import { Transition, Spring } from 'react-spring'

const ContactForm = styled.form``

const StatementPredicateContainer = styled.div``

const StatementSubjectContainer = styled.div``

class Statement extends Component {
  static defaultProps = {
    initialSubjectIndex: 0,
    subjects: [
      'hull cleaning.',
      'zinc replacement.',
      'bottom inspection.',
      'lost item recovery.',
    ],
  }

  constructor(props) {
    super(props)
    this.state = {
      subjectIndex: props.initialSubjectIndex,
    }
  }

  updateSubjectIndex = () => {
    this.setState({
      subjectIndex: this.state.subjectIndex + 1,
    })
  }

  render() {
    return (
      <>
        <StatementPredicateContainer>
          let's talk about your next
        </StatementPredicateContainer>
        <Spring
          from={{ opacity: 0 }}
          to={{ opacity: 1 }}
          onRest={this.render.updateSubjectIndex}
        >
          {props => {
            return (
              <StatementSubjectContainer style={{ ...props }}>
                {
                  this.props.subjects[
                    this.state.subjectIndex % this.props.subjects.length
                  ]
                }
              </StatementSubjectContainer>
            )
          }}
        </Spring>
      </>
    )
  }
}

const StatementContainer = styled.div``

class ContactComponent extends Component {
  constructor(props) {
    super(props)
  }

  render = () => {
    return (
      <Transition
        from={{ opacity: 0 }}
        enter={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {({ opacity }) => (
          <ContactForm style={{ opacity }}>
            <StatementContainer>
              <Statement />
            </StatementContainer>
            <input type="email" />
            <input type="phone" />
            <input type="submit" value="submit?" />
          </ContactForm>
        )}
      </Transition>
    )
  }
}

export default ContactComponent
