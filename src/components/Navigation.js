import React from 'react';
import { Link } from "react-router-dom";
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
// import MenuItem from '@material-ui/core/MenuItem';
import MenuItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import CssBaseline from '@material-ui/core/CssBaseline';
import clsx from 'clsx';
import ListItemText from '@material-ui/core/ListItemText';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    width: '100%'
  },
  // image: {
  //   maxHeight: 100
  // },
  // username: {
  //   flexGrow: 1,
  //   marginLeft: 20,
  // },
  appBar: {
    backgroundColor: 'black',
    marginBottom: 300,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
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
          >
            <MenuIcon />
          </IconButton>
          <img src="images/tree2.jpg" alt="Logo" style={{height: 100, margin: 10}}/>
          <Typography variant="h6" noWrap>
            Which Bin
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
          {['register', 'login', 'new', 'users/1'].map((text, index) => (
            <MenuItem button key={text}>
            <Link 
            to={`/${text}`} 
            // href={`/${text}`}
            >
              {`/${text}`}
              </Link> 
              <ListItemText primary={text} />
            </MenuItem>
          ))}
        </List>
        {/* <List>
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <MenuItem>
                 <Link to="/register">Register</Link>
               </MenuItem>
               <MenuItem>
                 <Link to="/login">Login</Link>
               </MenuItem>
               <MenuItem>
                 <Link to="/new">Capture a photo</Link>
               </MenuItem>
               <MenuItem>
                 <Link to="/users/1">Your userpage</Link>
               </MenuItem>
               <MenuItem>
                 <Link to="/forest">Forest</Link>
               </MenuItem>
              <ListItemText primary={text} />
            </ListItem>
        </List> */}
        <Divider />
      </Drawer>
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