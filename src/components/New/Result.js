import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';

import MyButton from "../Button";

const useStyles = makeStyles((theme) => ({
  link: {
    textDecoration: 'none',
    color: 'white',
  },
}));

export default function Result(props) {
  const classes = useStyles();

  return (
    <>
      <h2>{props.recognition.label}</h2>
      <h2>{props.recognition.text}</h2>

      <MyButton
        onClick={() => props.updateScore(props.recognition.bin)}
        children={<Link to="/users/1" className={classes.link}>Trashed!</Link>}
      />
    </>
  );
}