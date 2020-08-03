import React from 'react';
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100vw",
    flexGrow: 1,
    // minWidth: 1000
  },
  // image: {
  //   maxHeight: 100
  // },
  username: {
    flexGrow: 1,
    marginLeft: 20,
  },
  title: {
    fontSize: 36,
    flexGrow: 1,
    marginLeft: 20,
  },
}));

export default function Navigation() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" style={{background: 'linear-gradient(45deg, #760078 30%, #b100c4 90%)'}}>
        <Toolbar>
          <img src="images/tree1.jpg" alt="Logo" style={{height: 100, margin: 10}}/>
          <Typography variant="h6" className={classes.title}>
            Which bin app
          </Typography>
          {/* <Typography variant="h6" className={classes.username}>
            Username
          </Typography> */}
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <ul>
        <li>
          <Link to="/register">Register</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/new">Capture a photo</Link>
        </li>
        <li>
          <Link to="/users/1">Your userpage</Link>
        </li>
        <li>
          <Link to="/forest">Forest</Link>
        </li>
      </ul>
    </div>
  );
}