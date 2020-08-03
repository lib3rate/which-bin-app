import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

// import useVisualMode from '../../helpers/useVisualMode';

import MyButton from "../Button";
import Upload from "./Upload";
import Analyzing from "./Analyzing";
import Result from "./Result";

const UPLOAD = "UPLOAD";
const ANALYZING = "ANALYZING";
const RESULT = "RESULT";
const ERROR = "ERROR";

// Showing the Upload mode by default

// const { mode, transition } = useVisualMode(UPLOAD);

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
      <Upload/>
      <Analyzing
        text="Analyzing"
      />
      <Result/>
      <MyButton
        onClick={() => console.log("Trashed!")}
        children="Trashed!"
      />
    </div>
  )
}
