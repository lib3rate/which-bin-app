import React from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import Button from '@material-ui/core/Button';
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

// import Form from "../Form";
// import MyButton from "../Button";


const useStyles = makeStyles((theme) => ({
  page: {
    background: "url('/images/forest2.jpg')",
    width: '100vh',
    height: '100vh',
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    backgroundSize: "root",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  submit: {
    color: "white",
    borderColor: "white",
    border: "solid 2px",
    borderRadius: "10px",
    opacity: .8,
    "&:hover": {
      opacity: 1,
    },
  },
  link: {
    textDecoration: "none",
    color: "white",
  },
  title: {
    fontSize: "8em",
    color: "white",
    fontFamily: "Londrina Outline",
    margin: "1em 0 0 0"
  },
  buttons: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  arrow: {
    color: "white",
    
  },
  menuItem: {
    textDecoration: "none",
    color: "white"
  }
}));

export default function SignIn(props) {
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();

  const classes = useStyles();

  return (
    <Container component="main" className={classes.page}>
      <div>
      {/* <img className={classes.background} src="/images/forest1.jpeg"/> */}
        <h1 className={classes.title}> Welcome to ReForest</h1>
       
        {/* <CssBaseline /> */}
        {/* <div className={classes.paper}>
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
          /> */}
        <div className={classes.buttons}>
        <ExpandMoreIcon className={classes.arrow} style={{ fontSize: 60 }}/>
          {!isAuthenticated && (
            <div classname={classes.button}>
              <Button
                onClick={() => loginWithRedirect()}
                type="submit"
                fullWidth
                variant="outlined"
                // color="primary"
                className={classes.submit}
              >
                Sign in
              </Button>
            </div>
          )}
          {isAuthenticated && (
            <>
              <div classname={classes.button}>
                {/* <MyButton
                onClick={() => logout()}
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Sign out
              </MyButton> */}
                <Button
                  type="submit"
                  fullWidth
                  variant="outlined"
                  // color="primary"
                  className={classes.submit}
                  align="right"
                >
                  <Link to="/users/1" className={classes.menuItem}>
                    Your userpage
                  </Link>
                </Button>
              </div>
            </>
          )}
        </div>
      </div>

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
      {/* <Grid item> */}
      {/* <Link href="/register" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link> */}
      {/* <Link to="/register" variant="body2"> */}
      {/* {"Don't have an account? Sign Up"} */}
      {/* </Link> */}
      {/* </Grid> */}
      {/* </Grid> */}
      {/* </form> */}
      {/* </div> */}
    </Container>
  );
}
