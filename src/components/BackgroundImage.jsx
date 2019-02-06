import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const Logo = () => (
  <StaticQuery
    query={graphql`
      query {
        logoBackground: file(
          relativePath: { eq: "the-scuba-wizard-logo.png" }
        ) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <div style={{ position: `relative` }}>
        <Img
          css={{ top: 0, left: 0, right: 0, bottom: 0 }}
          style={{ position: `absolute` }}
          fluid={data.logoBackground.childImageSharp.fluid}
        />
      </div>
    )}
  />
)

export default Logo
