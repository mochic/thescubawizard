import React, { Component } from 'react'
import styled from 'styled-components'

const Title = styled.h1``

const NameInput = styled.input``

const EmailInput = styled.input``

const DescriptionInput = styled.textarea``

const SubmitInput = styled.input``

const SubmittedMessage = styled.p``

const ScheduleFormContainer = styled.form`
  display: flex;
  flex-direction: column;
`

class ScheduleForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      submitted: false,
    }
  }

  handleSubmit = event => {
    event.preventDefault()
    this.setState({
      submitted: true,
    })
  }

  render = () => {
    if (this.state.submitted) {
      return <SubmittedMessage>Thanks man!</SubmittedMessage>
    } else {
      return (
        <ScheduleFormContainer method="post" onSubmit={this.handleSubmit}>
          <Title>schedule an appointment</Title>
          <NameInput placeholder="name" type="text" />
          <EmailInput placeholder="email" type="email" />
          <DescriptionInput name="description" placeholder="description" />
          <SubmitInput type="submit" value="submit" />
        </ScheduleFormContainer>
      )
    }
  }
}

export default ScheduleForm
