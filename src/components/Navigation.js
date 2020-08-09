import React from "react";
import { Link } from "react-router-dom";
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

import MyButton from "./Button";
import Tree from "./Tree/Tree";

const drawerWidth = 240;


const displayTest = false;
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
    // backgroundColor: 'black',
    // background: 'linear-gradient(45deg, #008c1c 30%, #67e64e 90%)',
    background: "linear-gradient(45deg, #738678, 30%, #B2C2B9 90%)",
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
      justifyContent: "space-around",
    },
    
  },
  logo: {
    height: 100,
    margin: 15,
  },
  title: {
    fontSize: 32,
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
      color: 'red'
      },
      [theme.breakpoints.down('sm')]: {
        display: "none",
      },
  }

  

}));

export default function PersistentDrawerLeft(props) {
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
 

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar 
        // onClose={handleDrawerOpen}
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
        
        
          <Link to="/new" className={classes.menuItem}>
            Capture a photo
          </Link>
          <Link to="/users/1" className={classes.menuItem}>
            Your userpage
          </Link>

          {/* <img src="/images/tree2.jpg" alt="Logo" className={classes.logo}/> */}
         
        </Toolbar>
          <Typography variant="h6" noWrap className={classes.title}>
            Which Bin
          </Typography>
        <Link to="/forest" className={classes.menuItem}>
              The Forest
          </Link>
          <div className={classes.login}>
          <StyledButton
            onClick={() => console.log("Logging out")}
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            marginRight="20px"
            // display={!displayTest ? "none" : "" }       
            >
            <Link to="/login" className={classes.buttonLink}>
              Sign out
            </Link>
          </StyledButton>
        </div>
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
          <h2 className={classes.username}>
            {props.user.username}
          </h2>
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

