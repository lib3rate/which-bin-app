import React from 'react';
import Input from '@material-ui/core/Input';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  input: {
    marginTop: 50
  },
}));

export default function Upload(props) {
  const classes = useStyles();

  return (
    // <input
    <Input
      type="file"
      name="fileToUpload"
      id="fileToUpload"
      accept="image/*"
      className={classes.input}
      // capture="environment"
      onChange={props.onChange}
    >
    </Input>
    // </input>
  )
}