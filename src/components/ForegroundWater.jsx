import React from 'react'

import styled from 'styled-components'
// import { StaticQuery, graphql } from 'gatsby'
// import Img from 'gatsby-image'

// const ForeGroundWater = () => (
//   <StaticQuery
//     query={graphql`
//       query {
//         foreground: file(relativePath: { eq: "ForegroundWater.svg" }) {
//           childImageSharp {
//             fluid {
//               ...GatsbyImageSharpFluid
//             }
//           }
//         }
//       }
//     `}
//     render={data => (
//       <div style={{ position: `relative` }}>
//         <Img
//           css={{ top: 0, left: 0, right: 0, bottom: 0 }}
//           style={{ position: `absolute` }}
//           fluid={data.foreground.childImageSharp.fluid}
//         />
//       </div>
//     )}
//   />
// )

import ForegroundWaterSVG from '../images/ForegroundWater.svg'

const CoverImage = styled.img`
  height: 410vh;
  width: 100vh;
  object-fit: cover;
  margin: 0;
  padding: 0;
`

// simple svgs are more efficient just packed in?

const ForegroundWater = () => (
  <>
    <CoverImage src={ForegroundWaterSVG} />
  </>
)

export default ForegroundWater
