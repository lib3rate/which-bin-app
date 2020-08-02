import React from 'react';
import styled from 'styled-components'

const Button = styled.button`
  background: darkorange;
  border-radius: 3px;
  border: 2px solid darkorange;
  color: white;
  margin: 0 1rem;
  padding: 0.25rem 1em;
`

export { Button as default }

// export default function Button(props) {
//   return (
//     <>
//       <button
//         onClick={props.onClick}
//       >
//         {props.children}
//       </button>
//     </>
//   )
// }