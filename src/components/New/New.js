import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import useVisualMode from '../../helpers/useVisualMode';
import { ProcessImage } from "../../helpers/helpers";

import Upload from "./Upload";
import Analyzing from "./Analyzing";
import Result from "./Result";

const UPLOAD = "UPLOAD";
const ANALYZING = "ANALYZING";
const RESULT = "RESULT";
// const ERROR = "ERROR";

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    border: 1,
    marginTop: 200,
  },
}));

export default function New() {
  const classes = useStyles();

  // Showing the Upload mode by default

  const { mode, transition } = useVisualMode(UPLOAD);

  const recognize = () => {
    transition(ANALYZING);
    ProcessImage()
      .then(() => {
        transition(RESULT);
      })
      // .catch(error => {
      //   transition(ERROR, true)
      // });
  };

  return (
    <div className={classes.root}>
      <h2>Submit a photo</h2>
      
      <p id="opResult"></p>
      <h3 id="bin"></h3>

      {mode === UPLOAD && <Upload onChange={(event) => recognize()} />}
      {mode === ANALYZING && <Analyzing text="Analyzing" />}
      {mode === RESULT && <Result />}
      {/* <Upload onChange={(event) => ProcessImage()}/>
      <Analyzing
        text="Analyzing"
      />
      <Result/> */}
    </div>
  )
}
