import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Input from "../Input";
import MyButton from "../Button";
import Status from "./Status";

import { ProcessImage } from "../../helpers/helpers";

const useStyles = makeStyles((theme) => ({
  root: {
    flexDirection: 'column',
    alignItems: 'center',
    border: 1,
  },
}));

export default function New() { 
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h2>Submit a photo</h2>
      <Input
        onChange={(event) => ProcessImage()}
      />
      <p id="opResult"></p>
      <h3 id="bin"></h3>
      <Status
        text="Analyzing"
      />
      <MyButton
        onClick={() => console.log("Trashed!")}
        children="Trashed!"
      />
    </div>
  )
}
