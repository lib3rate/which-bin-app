import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme) => ({
  status: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column'
  },
  root: {
    display: 'flex',
    '& > * + *': {
      marginLeft: theme.spacing(2)
    }
  },
  image: {
    color: "#009c63"
  }
}));

export default function Analyzing(props) {
  const classes = useStyles();

  return (
    <main className={classes.status}>
      <div className={classes.root}>
        <CircularProgress className={classes.image}/>
        {/* <CircularProgress color="#009c63" /> */}
      </div>
      {/* <img
        className="analyze-status-image"
        src="images/status.png"
        alt="Analyzing"
      /> */}
      <h2>{props.text}</h2>
    </main>
  );
}