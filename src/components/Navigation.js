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
    // backgroundColor: 'black',
    // background: 'linear-gradient(45deg, #008c1c 30%, #67e64e 90%)',
    background: "linear-gradient(45deg, #738678, 30%, #B2C2B9 90%)",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 300,
    height: 90,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  logo: {
    height: 100,
    margin: 15,
  },
  title: {
    fontSize: 32,
    flexGrow: 1,
    marginLeft: 20,
    fontFamily: 'Cinzel Decorative',
  },
  // submit: {
  //   margin: '0 20px 0 0'
  // },
  link: {
    textDecoration: "none",
    color: "black",
    fontSize: 20,
    fontWeight: 700,
  },
  buttonLink: {
    textDecoration: "none",
    color: "white",
  },
  appBarShift: {
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
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
    justifyContent: "flex-end",
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
}));

export default function PersistentDrawerLeft() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
            // onBackdropClick={handleDrawerClose}
          >
            <MenuIcon />
          </IconButton>

          {/* <img src="/images/tree2.jpg" alt="Logo" className={classes.logo}/> */}
          <DeleteForeverIcon />

          <Typography variant="h6" noWrap className={classes.title}>
            Which Bin
          </Typography>
        </Toolbar>
        <MyButton
          onClick={() => console.log("Logging out")}
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
          marginRight="20px"
        >
          <Link to="/login" className={classes.buttonLink}>
            Sign out
          </Link>
        </MyButton>
      </AppBar>

      {/* <ClickAwayListener onClickAway={ handleDrawerClose }> */}
        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="left"
          open={open}
          // onClose={handleClose}
          // onBackdropClick={ handleDrawerClose }
          classes={{
            paper: classes.drawerPaper,
          }}
          // ModalProps={{ onBackdropClick: handleDrawerClose }}
        >
          <div className={classes.drawerHeader}>
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
            <MenuItem button key={"new"}>
              <Link to="/new" className={classes.link}>
                Capture a photo
              </Link>
            </MenuItem>
            <MenuItem button key={"users/1"}>
              <Link to="/users/1" className={classes.link}>
                Your userpage
              </Link>
            </MenuItem>
            <MenuItem button key={"forest"}>
              <Link to="/forest" className={classes.link}>
                The Forest
              </Link>
            </MenuItem>
            {/* <MenuItem button key={'about'}>
            <Link to="/about" className={classes.link}>About</Link>
          </MenuItem> */}
          </List>
          <Divider />
        </Drawer>
      {/* </ClickAwayListener> */}
    </div>
  );
}

// const drawerWidth = 1000;

// const useStyles = makeStyles((theme) => ({
//   root: {
//     display: 'flex',
//   },
//   appBar: {
//     transition: theme.transitions.create(['margin', 'width'], {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.leavingScreen,
//     }),
//   },
//   appBarShift: {
//     width: `calc(100% - ${drawerWidth}px)`,
//     marginLeft: drawerWidth,
//     transition: theme.transitions.create(['margin', 'width'], {
//       easing: theme.transitions.easing.easeOut,
//       duration: theme.transitions.duration.enteringScreen,
//     }),
//   },
//   menuButton: {
//     marginRight: theme.spacing(2),
//   },
//   hide: {
//     display: 'none',
//   },
//   drawer: {
//     width: drawerWidth,
//     flexShrink: 0,
//   },
//   drawerPaper: {
//     width: drawerWidth,
//   },
//   drawerHeader: {
//     display: 'flex',
//     alignItems: 'center',
//     padding: theme.spacing(0, 1),
//     // necessary for content to be below app bar
//     ...theme.mixins.toolbar,
//     justifyContent: 'flex-end',
//   },
//   content: {
//     flexGrow: 1,
//     padding: theme.spacing(3),
//     transition: theme.transitions.create('margin', {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.leavingScreen,
//     }),
//     marginLeft: -drawerWidth,
//   },
//   contentShift: {
//     transition: theme.transitions.create('margin', {
//       easing: theme.transitions.easing.easeOut,
//       duration: theme.transitions.duration.enteringScreen,
//     }),
//     marginLeft: 0,
//   },
// }));

// // const useStyles = makeStyles((theme) => ({
// //   root: {
// //     width: "100vw",
// //     flexGrow: 1,
// //     // minWidth: 1000
// //   },
// //   // image: {
// //   //   maxHeight: 100
// //   // },
// //   username: {
// //     flexGrow: 1,
// //     marginLeft: 20,
// //   },
// //   title: {
// //     fontSize: 36,
// //     flexGrow: 1,
// //     marginLeft: 20,
// //   },
// // }));

// export default function Navigation() {
//   const classes = useStyles();
//   const theme = useTheme();
//   const [open, setOpen] = React.useState(false);

//   const handleDrawerOpen = () => {
//     setOpen(true);
//   };

//   const handleDrawerClose = () => {
//     setOpen(false);
//   };

//   return (
//     <div className={classes.root}>
//             <CssBaseline />

//             <AppBar
//         position="fixed"
//         className={clsx(classes.appBar, {
//           [classes.appBarShift]: open,
//         })}
//       >        <Toolbar>
//           <img src="images/tree1.jpg" alt="Logo" style={{height: 100, margin: 10}}/>
//           <Typography variant="h6" className={classes.title}>
//             Which bin app
//           </Typography>
//           {/* <Typography variant="h6" className={classes.username}>
//             Username
//           </Typography> */}
//            <Drawer
//         className={classes.drawer}
//         variant="persistent"
//         anchor="left"
//         open={open}
//         classes={{
//           paper: classes.drawerPaper,
//         }}
//       >
//         <div className={classes.drawerHeader}>
//           <IconButton onClick={handleDrawerClose}>
//             {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
//             <MenuIcon />
//           </IconButton>
//         </div>
//         <Divider />
//         <List>
//         <MenuItem>
//           <Link to="/register">Register</Link>
//         </MenuItem>
//         <MenuItem>
//           <Link to="/login">Login</Link>
//         </MenuItem>
//         <MenuItem>
//           <Link to="/new">Capture a photo</Link>
//         </MenuItem>
//         <MenuItem>
//           <Link to="/users/1">Your userpage</Link>
//         </MenuItem>
//         <MenuItem>
//           <Link to="/forest">Forest</Link>
//         </MenuItem>
//         </List>
//         <Divider />
//       </Drawer>
//       </Toolbar>
//       </AppBar>
//       </div>

//   );
// }
