import React, { useState } from 'react'

import styled from 'styled-components'
import { animated } from 'react-spring'

// selecting phone option immediately puts focus on area code

const PhoneInput = styled(animated.input)``

export default () => <PhoneInput placeholder={`phone number`} />
