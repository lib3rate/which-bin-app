import React from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import MenuItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import CssBaseline from "@material-ui/core/CssBaseline";
import ListItemText from "@material-ui/core/ListItemText";
import clsx from "clsx";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import styled from "styled-components";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

import MyButton from "./Button";
import Tree from "./Tree/Tree";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    width: "100%",
  },
  // username: {
  //   flexGrow: 1,
  //   marginLeft: 20,
  // },
  appBar: {
    backgroundImage: "url('/images/48-nice-green-gradient.jpg')",
    // backgroundColor: 'black',
    // background: 'linear-gradient(45deg, #008c1c 30%, #67e64e 90%)',
    // background: "linear-gradient(45deg, #738678, 30%, #B2C2B9 90%)",
    // background: "linear-gradient(45deg, black, 30%, #239d60, 66%, lightGreen 90%)",
    // backgroundColor:"black",
    opacity: "0.9",
    // filter: alpha("opacity=50"),
    color: "white",
    // background: "none",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 300,
    height: 90,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    [theme.breakpoints.down('sm')]: {
      justifyContent: "center",
    },
  },
  logo: {
    height: 100,
    margin: 15,
  },
  title: {
    fontSize: 39,
    flexGrow: 1,
    marginLeft: 20,
    fontFamily: "Cinzel Decorative",
    maxWidth: 200,
  },
  link: {
    textDecoration: "none",
    color: "black",
    fontSize: 20,
    fontWeight: 700,
  },
  // buttonLink: {
  //   textDecoration: "none",
  //   color: "white",
  // },
  appBarShift: {
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  username: {
    marginLeft: 10,
    color: '#009c63',
  },
  menuButton: {
    // display: "none",
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('md')]: {
      display: "none",
    },
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "space-between",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  menuItem: {
    color: "white",
    textDecoration: "none",
    borderBottom: "solid",
    borderTop: "solid",
    padding: ".5em",
    marginLeft: 7,
    "&:hover": {
      color: '#4A235A'
      },
      [theme.breakpoints.down('sm')]: {
        display: "none",
      },
  },
  signName: {
    marginRight: 7,
    display: "flex",
    flexDirection: "row"
  }
}));

export default function PersistentDrawerLeft(props) {
  const {
    loginWithRedirect,
    logout,
    user,
    isAuthenticated
  } = useAuth0();

  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const StyledButton = styled.button`
  .login {
    display: ${(props) => props.login}
  }
  `;
 
  console.log("props.url: ", props.url)

  return (
    !props.url ? null :

    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
            onClick={handleDrawerOpen}
            // onBackdropClick={handleDrawerClose}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap className={classes.title}>
            ReForest
          </Typography>
        <Toolbar 
        // onClose={handleDrawerOpen}
        >
        
          <Link to="/new" className={classes.menuItem}>
            Capture a photo
          </Link>
          <Link to="/users/1" className={classes.menuItem}>
            Your userpage
          </Link>

          {/* <img src="/images/tree2.jpg" alt="Logo" className={classes.logo}/> */}
        
        <Link to="/forest" className={classes.menuItem}>
              The Forest
          </Link>
        </Toolbar>
        { isAuthenticated && (
          <div className={classes.login}>
            <h4 className={classes.signName}>
            <AccountCircleIcon/> {user.name}
            </h4>
          </div>
        ) }
        { !isAuthenticated && (
          <StyledButton
              onClick={() => loginWithRedirect()}
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              marginRight="20px"
              // display={!displayTest ? "none" : "" }      
            >
              Sign in
            </StyledButton>
          ) }
        { isAuthenticated && (
          <StyledButton
            onClick={() => logout()}
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            marginRight="20px"
            // display={!displayTest ? "none" : "" }       
            >
              Sign out
          </StyledButton>
        )}
      </AppBar>

      {/* <ClickAwayListener onClickAway={ handleDrawerClose }> */}
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        onClose={handleDrawerClose}
        // onBackdropClick={ handleDrawerClose }
        classes={{
          paper: classes.drawerPaper,
        }}
        // ModalProps={{ onBackdropClick: handleDrawerClose }}
      >
        <div className={classes.drawerHeader}>
        { isAuthenticated && (
          <h2 className={classes.username}>
            {user.name}
          </h2>
        )}
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <List>
          <MenuItem button key={"new"}
          onClick={handleDrawerClose}
          >
            <Link to="/new" className={classes.link}>
              Capture a photo
            </Link>
          </MenuItem>
          <MenuItem button key={"users/1"}
          onClick={handleDrawerClose}
          >
            <Link to="/users/1" className={classes.link}>
              Your userpage
            </Link>
          </MenuItem>
          <MenuItem button key={"forest"}
          onClick={handleDrawerClose}
          >
            <Link to="/forest" className={classes.link}>
              The Forest
            </Link>
          </MenuItem>
     
        </List>
  
        <Divider />
      </Drawer>
      {/* </ClickAwayListener> */}

    </div>
  );
}

