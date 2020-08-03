import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import useVisualMode from '../../helpers/useVisualMode';
import { ProcessImage } from "../../helpers/helpers";

import Input from "../Input";
import MyButton from "../Button";
import Analyzing from "./Analyzing";

const UPLOAD = "UPLOAD";
const ANALYZING = "ANALYZING";
const RESULT = "RESULT";
const ERROR = "ERROR";

const { mode, transition } = useVisualMode(UPLOAD);

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
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
      <Analyzing
        text="Analyzing"
      />
      <MyButton
        onClick={() => console.log("Trashed!")}
        children="Trashed!"
      />
    </div>
  )
}
