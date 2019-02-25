import React from 'react'

import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'

const LogoImage = styled(Img)`
  img {
    -webkit-filter: drop-shadow(5px 5px 5px #222);
    filter: drop-shadow(5px 5px 5px #222);
  }
`

const Logo = () => (
  <StaticQuery
    query={graphql`
      query {
        logo: file(relativePath: { eq: "SW-Logo_NoBackground.png" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => <LogoImage fluid={data.logo.childImageSharp.fluid} />}
  />
)

export default Logo
