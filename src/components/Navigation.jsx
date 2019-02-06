import React, { Component } from 'react'

import styled from 'styled-components'
import { Link } from 'gatsby'
import { MdPanoramaFishEye, MdAdjust } from 'react-icons/md'
import { Location } from '@reach/router'

const NavigationBulletName = styled.div`
  visibility: hidden;
  color: ${props => props.theme.colors.highlight};
`

const NavigationBulletLink = styled(Link)`
  text-align: center;
`

const BulletActive = styled(MdAdjust)`
  color: ${props => props.theme.colors.highlight};
`

const BulletInactive = styled(MdPanoramaFishEye)`
  color: ${props => props.theme.colors.highlight};
`

const BulletHover = styled(MdPanoramaFishEye)`
  color: ${props => props.theme.colors.highlight};
`

// const Bullet = ({ active }) => (active ? <BulletActive /> : <BulletInactive />)

const NavigationBulletContainer = styled.div`
  background: green;

  &:active ${NavigationBulletName} {
    visibility: visible;
  }
  &:hover ${NavigationBulletName} {
    visibility: visible;
  }
`

const NavigationBullet = ({ location, link: { link, name } }) => {
  console.log(location)
  return (
    <NavigationBulletContainer>
      <NavigationBulletLink to={link}>
        {false ? <BulletActive /> : <BulletInactive />}
        <NavigationBulletName>{name}</NavigationBulletName>
      </NavigationBulletLink>
    </NavigationBulletContainer>
  )
}

export const NavigationContainer = styled.div`
  background: blue;
  display: flex;
  flex-direction: column;
`

const NavigationListContainer = styled.div``

const NavigationListItemContainer = styled.div``

// const Bullet = ({hover}) => (hover ? bullet)

// class NavigationListItem extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       active: this.props.active,
//       hover: false,
//     }
//   }

//   toggleHover = () => {
//     this.setState({
//       hover: !this.state.hover,
//     })
//   }

//   render = () => {
//     return <NavigationListItemContainer />
//   }
// }

const NavigationComponent = ({ links }) => (
  <NavigationContainer>
    {links.map(link => (
      <NavigationBullet key={`link-${link.name}`} link={link} />
    ))}
  </NavigationContainer>
)

const LINKS = [
  { link: '/services', name: 'services' },
  { link: '/other', name: 'other' },
  { link: '/about', name: 'about' },
  { link: '/contact', name: 'contact' },
]

export default () => <NavigationComponent links={LINKS} />
