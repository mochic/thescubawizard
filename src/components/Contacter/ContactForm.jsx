import React, { useState } from 'react'

import styled from 'styled-components'
import { animated, useTransition } from 'react-spring'

// import EmailInput from './EmailInput'
import PhoneInput from './PhoneInput'

const ContactFormContainer = styled(animated.div)``

const PhoneInputToggleContainer = styled.div``

const EmailInputToggleContainer = styled.div``

const InputToggle = ({ phoneToggled, emailToggled, onToggle }) => {
  return (
    <InputToggleContainer>
      <PhoneInputToggleContainer toggled={phoneToggled} />
      <EmailInputToggleContainer toggled={emailToggled} />
    </InputToggleContainer>
  )
}

const InputToggleContainer = styled(animated.div)``

const ContactForm = () => {
  const [inputType, set] = useState(null)

  const transitions = useTransition()
}

const EmailToggle = styled(animated.button)``
const PhoneToggle = styled(animated.button)``

const Input = styled(animated.input)``

const EmailInput = ({ value, handleChange }) => {
  return (
    <Input
      type="text"
      placeholder={`email address`}
      value={value}
      onChange={e => {
        const value = e.currentTarget.value
        console.log(e.currentTarget)
        handleChange(value)
      }}
    />
  )
}

const SuggestionButton = styled(animated.button)`
  background: red;
  color: green;
`

const DomainSuggestions = ({ domains, handleSuggestion }) => {
  // dont prefix domain suggestions with @
  const transitions = useTransition(domains, domain => domain.key, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  })

  return transitions.map(({ item, props, key }) => {
    return (
      <SuggestionButton
        key={key}
        style={props}
        onClick={() => handleSuggestion(item.name)}
      >{`@${item.name}`}</SuggestionButton>
    )
  })
}

const DomainSuggestionsContainer = styled.div``

const EmailInputComponentContainer = styled.div``

const EmailInputContainer = styled.div``

const EmailInputComponent = ({ domainSuggestions }) => {
  const [email, setEmail] = useState('')
  return (
    <EmailInputComponentContainer>
      <EmailInputContainer>
        <EmailInput value={email} handleChange={setEmail} />
      </EmailInputContainer>
      <DomainSuggestionsContainer>
        <DomainSuggestions
          domains={domainSuggestions}
          handleSuggestion={suggestion =>
            setEmail(email.split(`@`)[0] + `@${suggestion}`)
          }
        />
      </DomainSuggestionsContainer>
    </EmailInputComponentContainer>
  )
}

EmailInputComponent.defaultProps = {
  domainSuggestions: [
    { key: 'domain-suggestion-0', name: 'gmail.com' },
    { key: 'domain-suggestion-1', name: 'hotmail.com' },
    { key: 'domain-suggestion-2', name: 'yahoo.com' },
    { key: 'domain-suggestion-3', name: 'outlook.com' },
  ],
}

const PhoneInputComponent = ({ handleChange }) => {
  return <PhoneInput onChange={e => handleChange(e)} /> // dont prevent default
}

const ToggleButton = styled(animated.button)`
  border: 1px solid ${props => (props.toggled ? `white` : `grey`)}y;
`

const InputTypeIcon = ({ type, toggled, children }) => {
  switch (type) {
    case 'phone':
      return toggled ? <>phone placeholder</> : <>phone placeholder inactive</>
    case 'email':
      return toggled ? (
        <>email placeholder active {children}</>
      ) : (
        <>email placeholder inactive {children}</>
      )
    default:
      return <>{`${type}`}</>
  }
}

const InputTypeToggleComponent = ({
  toggledInputType,
  inputTypes,
  handleToggle,
}) => {
  const transitions = useTransition(inputTypes, inputType => inputType.key, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  })

  return transitions.map(({ item, props, key }) => {
    const toggleState = toggledInputType === item.type // maybe tristate?
    return (
      <ToggleButton
        key={key}
        toggled={`${toggleState}`}
        style={props}
        onClick={e => {
          e.preventDefault()
          handleToggle(item.type)
        }}
      >
        <InputTypeIcon type={item.type} toggled={`${toggleState}`}>
          {item.name}
        </InputTypeIcon>
      </ToggleButton>
    )
  })
}

InputTypeToggleComponent.defaultProps = {
  inputTypes: [
    { key: 'input-type-phone', name: 'phone', type: 'phone' },
    { key: 'input-type-email', name: 'email', type: 'email' },
  ],
}

export default () => {
  const [inputType, setInputType] = useState(null)
  let input
  switch (inputType) {
    case 'phone':
      input = <PhoneInputComponent />
      break
    case 'email':
      input = <EmailInputComponent />
      break
    default:
      input = null
      break
  }

  return (
    <>
      {input}
      <InputTypeToggleComponent
        toggledInputType={inputType}
        handleToggle={setInputType}
      />
    </>
  )
}
