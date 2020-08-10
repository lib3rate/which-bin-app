import React from 'react';
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import Avatar from '@material-ui/core/Avatar';
// import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Checkbox from '@material-ui/core/Checkbox';
// import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
// import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

// import Form from "../Form";
import MyButton from "../Button";

const useStyles = makeStyles((theme) => ({
  page: {
    // marginTop: 200,
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  link: {
    textDecoration: 'none',
    color: 'white',
  },
  title: {
    fontSize: "100"
  }
}));

export default function SignIn(props) {
  const {
    loginWithRedirect,
    logout,
    isAuthenticated
  } = useAuth0();
  
  const classes = useStyles();

  return ( 
    <Container component="main" maxWidth="xs" className={classes.page}>
      <h1 className={classes.title}> Welcome to ReForest</h1>
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          { !isAuthenticated && (
            <MyButton
              onClick={() => loginWithRedirect()}
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign in
            </MyButton>
          ) }
          { isAuthenticated && (
            <>
              <MyButton
                onClick={() => logout()}
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Sign out
              </MyButton>
              <MyButton
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                <Link to="/users/1" className={classes.menuItem}>
                  Your userpage
                </Link>
              </MyButton>
            </>
          ) }
          {/* <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button> */}
          {/* <Grid container> */}
            <Grid item>
              {/* <Link href="/register" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link> */}
              <Link to="/register" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          {/* </Grid> */}
        </form>
      </div>
    </Container>
  );
}