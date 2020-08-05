import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import useVisualMode from '../../helpers/useVisualMode';

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

export default function New(props) {
  const classes = useStyles();

  // Showing the Upload mode by default
  const { mode, transition } = useVisualMode(UPLOAD);

  const recognize = () => {
    transition(ANALYZING);
    props.ProcessImage()
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
      
      {/* <p id="opResult">{props.recognition.label}</p>
      <h2 id="bin">{props.recognition.bin}</h2> */}

      {mode === UPLOAD &&
        <Upload
          onChange={(event) => recognize()}
        />}

      {mode === ANALYZING &&
        <Analyzing
          text="Analyzing"
        />}

      {mode === RESULT &&
        <Result
          recognition={props.recognition}
          onClick={props.updateScore}
        />}
    </div>
  )
}
