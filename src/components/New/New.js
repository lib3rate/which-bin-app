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
  new: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    border: 1,
    margin: '100px 0 0 0',
  },
}));

export default function New(props) {
  const classes = useStyles();

  // Showing the Upload mode by default

  const { mode, transition } = useVisualMode(UPLOAD);

  const recognizeImage = () => {
    transition(ANALYZING);
    props.ProcessImage()
      .then(() => {
        transition(RESULT);
      })
      // .catch(error => {
      //   transition(ERROR, true)
      // });
  };

  const recognizePhoto = () => {
    transition(ANALYZING);
    props.ProcessPhoto()
      .then(() => {
        transition(RESULT);
      })
      // .catch(error => {
      //   transition(ERROR, true)
      // });
  };

  return (
    <div className={classes.new}>
            
      {mode === UPLOAD &&
        <Upload
          onClick={event => recognizePhoto()}
          onChange={(event) => recognizeImage()}
        />}

      {mode === ANALYZING &&
        <Analyzing
          text="Analyzing"
        />}

      {mode === RESULT &&
        <Result
          recognition={props.recognition}
          updateScore={props.updateScore}
        />}
    </div>
  )
}
