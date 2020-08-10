import React from 'react';
import { styled } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


// const MyButton = styled(Button)({
//   // background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
//   selectedTextColor: 'white',
//   display: 'block',
//   background: "linear-gradient(90deg, #4A235A, 40%, #62076B 90%)",
//   margin: 10,
//   border: 0,
//   borderRadius: 3,
//   // boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
//   boxShadow: '0 2px 2px 0px #4A1C4E',
//   color: 'white',
//   height: 48,
//   width: 150,
//   padding: '0 30px',
// });
const useStyles = makeStyles(() => ({
  button: {
  borderColor: "black",
  color: "white",
  "&:hover": {
    backgroundColor: "#4A235A"
},
  }
}));

export default function StyledComponents(props) {
  const classes = useStyles();
  return (
  
    <Button variant="outlined"
      style={{marginRight: props.marginRight}}
      onClick={props.onClick}
      className={classes.button}
    >
      {props.children}
    </Button>
  )
}