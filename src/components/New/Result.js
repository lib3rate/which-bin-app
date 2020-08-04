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
      {/* <p id="opResult"></p>
      <h3 id="bin"></h3> */}
      <MyButton
        onClick={() => console.log("Trashed!")}
        children={<Link to="/users/1" className={classes.link}>Trashed!</Link>}
      />
    </>
  );
}