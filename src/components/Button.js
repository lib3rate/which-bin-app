import React from 'react';
import { styled } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const MyButton = styled(Button)({
  // background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  background: 'linear-gradient(45deg, #760078 30%, #b100c4 90%)',
  border: 0,
  borderRadius: 3,
  boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  color: 'white',
  height: 48,
  padding: '0 30px',
});

export default function StyledComponents(props) {
  return <MyButton onClick={props.onClick}>{props.children}</MyButton>;
}

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