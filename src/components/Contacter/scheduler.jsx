import React from 'react'

import { animated } from 'react-spring'
import styled, { keyframes } from 'styled-components'

import { MdExpandLess } from 'react-icons/md'

const Container = styled(animated.div)`
  background: black;
  height: 100vh;
  width: 100vw;
`

const Label = styled(animated.div)`
  color: white;
  font-size: 36px;
  font-family: roboto;
  line-height: 1;
`

const LabelContainer = styled(animated.div)`
  margin-top: 5px;
`

const FadeUpKeys = keyframes`
  from {
    opacity: 1;
    transform: translate3d(0,0px,0);
  }
  to {
    opacity: 0;
    transform: translate3d(0,-10px,0); 
  }
`

const Icon = styled(animated.div)`
  animation: ${FadeUpKeys} 3s ease-out infinite;
  animation-delay: 5s;
  color: white;
  font-size: 36px;
  margin-bottom: 10px;
`

const Slider = styled(animated.div)`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  margin: 20px;
`

// export default ({ pageSpring, labelSprings, iconSpring }) => {
//   const { key: pageKey, props: pageProps } = pageSpring
//   return (
//     <Container key={pageKey} style={pageProps}>
//       <Slider>
//         <LabelContainer>
//           {labelSprings.map(({ item, key, props }) => (
//             <Label key={key} style={props}>
//               {item.text}
//             </Label>
//           ))}
//         </LabelContainer>
//         <>
//           {iconSpring.map(({ key, props }) => (
//             <Icon key={key} style={props}>
//               <MdExpandLess />
//             </Icon>
//           ))}
//         </>
//       </Slider>
//     </Container>
//   )
// }

// export default ({
//   pageSpring: {
//     key,
//     props: { labelOpacity, ...rest },
//   },
//   labelSprings,
//   iconSpring,
// }) => {
//   return (
//     <>
//       {
//         <Container key={key} style={rest}>
//           <Slider>
//             <LabelContainer>
//               {labelSprings.map(({ item, key, props }) => (
//                 <Label key={key} style={props}>
//                   {item.text}
//                 </Label>
//               ))}
//             </LabelContainer>
//             <>
//               {iconSpring.map(({ key, props }) => (
//                 <Icon key={key} style={props}>
//                   <MdExpandLess />
//                 </Icon>
//               ))}
//             </>
//           </Slider>
//         </Container>
//       }
//     </>
//   )
// }

export default ({
  pageSpring: [
    {
      key: pageKey,
      item: { labels },
      props: { labelOpacity, ...rest },
    },
  ],
  labelSprings,
  iconSpring,
}) => {
  return (
    <>
      {
        <Container key={pageKey} style={rest}>
          <Slider>
            <LabelContainer>
              {labels.map(({ key, text }) => (
                <Label key={key} style={{ opacity: labelOpacity }}>
                  {text}
                </Label>
              ))}
            </LabelContainer>
            <>
              {iconSpring.map(({ key, props }) => (
                <Icon key={key} style={props}>
                  <MdExpandLess />
                </Icon>
              ))}
            </>
          </Slider>
        </Container>
      }
    </>
  )
}
