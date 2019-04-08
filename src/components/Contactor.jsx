import React from 'react'

import styled from 'styled-components'
import { animated, useSpring, useTransition } from 'react-spring'

const InvitationPredicate = styled(animated.div)``

const InvitationPredicateWord = styled(animated.span)``

const InvitationSubjectWord = styled(animated.span)``

const InvitationSubject = styled(aniamted.div)``

const InvitationContainer = styled(animated.div)``

const Invitation = () => (
  <InvitationContainer>
    <InvitationPredicate />
    <InvitationSubject />
  </InvitationContainer>
)
