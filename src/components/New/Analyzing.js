import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme) => ({
  status: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    margin: '100px 0 0 0',
    color: "white"
  },
  root: {
    display: 'flex',
    '& > * + *': {
      marginLeft: theme.spacing(2)
    }
  },
  image: {
    color: "#4A235A"
  }
}));

export default function Analyzing(props) {
  const classes = useStyles();

  return (
    <main className={classes.status}>
      <div className={classes.root}>
        <CircularProgress className={classes.image}/>
      </div>
      <h2>{props.text}</h2>
    </main>
  );
}