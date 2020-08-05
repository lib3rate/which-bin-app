import React from "react";
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  status: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column'
  },
}));

export default function Analyzing(props) {
  const classes = useStyles();

  return (
    <main className={classes.status}>
      <img
        className="analyze-status-image"
        src="images/status.png"
        alt="Analyzing"
      />
      <h2>{props.text}</h2>
    </main>
  );
}