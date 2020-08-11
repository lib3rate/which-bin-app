import React from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
// import logo from '../../logo.svg'
import Tree from "../Tree/Tree";
import Button from "@material-ui/core/Button";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: "#4A235A",
    color: theme.palette.common.white,
    fontFamily: "Cantarell",
    fontWeight: "bold",
  },
  body: {
    fontSize: 14,
    fontFamily: "Cantarell",
    // backgroundColor: "#BB76C2",
    // border: "solid 2 white",
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles((theme) => ({
  profile: {
    display: "flex",
    flexDirection: "column",
    maxWidth: "16em",
    border: "solid 1px white",
    borderRadius: "25px",
    padding: "1em",
    color: "white",
    alignItems: "center",
    padding: "1em",
    margin: "0 1em 1em 0",
    fontFamily: "Cantarell",
    [theme.breakpoints.down("sm")]: {
      margin: "0 1em 1em 0",
      width: "90%",
      padding: "0",
      maxWidth: "50%",
      border: "none",
    },
  },
  profileTextImage: {
    textAlign: "center",
    marginBottom: "1em",
    margin: "8px 0 2px 0",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  profileTextButton: {
    display: "none",
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      textAlign: "center",
      marginBottom: "1em",
      margin: "0 0 6px 0",
      color: "white",
    },
  },
  avatar: {
    maxWidth: "60%",
    // height: "116px",
    borderRadius: "25px",
    margin: "0 0 4px 0",
    border: "solid white 1px"
  },
  profileWButtons: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: "0 5em 0 -2em ",
    [theme.breakpoints.down("sm")]: {
      // flexDirection: "row",
      width: "80%",
      margin: "0 0 3em 0",
      border: "solid 1px white",
      borderRadius: "25px",
    },
  },
  page: {
    marginTop: 150,
    display: "flex",
    flexDirection: "row",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      alignItems: "center",
    },
  },
  nameTitle: {
    color: "white",
    fontSize: "50",
    display: "flex",
    flexDirection: "row",
    margin: "7px 0 1em 0",
  },
  container: {
    width: "50%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: "0 0 0 3em",
    border: "solid .01em white",
    // boxShadow: '0px 1.5px 1.5px 0px '
    [theme.breakpoints.down("sm")]: {
      width: "80%",
      margin: "2em 0 2em 0",
    },
  },
  table: {
    minWidth: 250,
    maxWidth: 1500,
    height: "355px",
  },
  link: {
    textDecoration: "none",
    color: "white",
  },
  userTree: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    // alignItems: 'center',
    // height: 300,
    border: "solid 1px white",
    borderRadius: "25px",
    padding: "1em",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      width: "80%",
      justifyContent: "center",
      alignItems: "center",
      margin: "0 0 2em 0"
    },
  },
  button: {
    borderColor: "black",
    color: "white",
    "&:hover": {
      backgroundColor: "#4A235A",
    },
    margin: "0 2px 0 2px",
  },
  buttons: {
    display: "flex",
    flexDirection: "row",
    margin: "0 1em 0 0",
    maxWidth: "auto",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "row",
      display: "none",
    },
  },
  badgeDesktop: {
    height: "58px",
    // marginRight: "10em",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  badgeMobile: {
    height: "58px",
    display: "none",
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      margin: "0 0 1em 0",
    },
  },
  badges: {
    display: "flex",
    flexDirection: "row",
  },
  mobile: {
    display: "flex",
    flexDirection: "row",
  },
}));

export default function User(props) {
  const classes = useStyles();
  const { user, isAuthenticated } = useAuth0();

  const treeTotal = Number(props.user.total);
  // const treeTotal = 3;

  const displayBadge1 = treeTotal >= 77 ? true : false;
  const displayBadge2 = treeTotal >= 200 ? true : false;
  const displayBadge3 = treeTotal >= 500 ? true : false;
  const onClickStop = (event) => {
    event.stopPropagation();
  };
  return (
    <div className={classes.page}>
      <div className={classes.profileWButtons}>
        {isAuthenticated && (
          <section className={classes.profile}>
            <h3 className={classes.nameTitle}>
              {user.name}
            </h3>
            <img src={user.picture} alt="Avatar" className={classes.avatar} />

            <h4 className={classes.profileTextImage}>Your Badges:</h4>
            <article className={classes.badges}>
              {!displayBadge1 && (
                <div>
                  <img
                    alt=""
                    className={classes.badgeDesktop}
                    src="/images/placeholder-badge.png"
                  />
                </div>
              )}
              {displayBadge1 && (
                <div>
                  <img
                    alt=""
                    className={classes.badgeDesktop}
                    src="/images/badge.png"
                  />
                </div>
              )}
              {!displayBadge2 && (
                <div>
                  <img
                    alt=""
                    className={classes.badgeDesktop}
                    src="/images/placeholder-badge.png"
                  />
                </div>
              )}

              {!displayBadge3 && (
                <div>
                  <img
                    alt=""
                    className={classes.badgeDesktop}
                    src="/images/placeholder-badge.png"
                  />
                </div>
              )}
            </article>
          </section>
        )}

        <h4 className={classes.profileTextButton}>Your Badges:</h4>
        <section className={classes.mobile}>
          {displayBadge1 && (
            <div>
              <img className={classes.badgeMobile} src="/images/badge.png" />
            </div>
          )}
          {!displayBadge1 && (
            <div>
              <img
                alt=""
                className={classes.badgeMobile}
                src="/images/placeholder-badge.png"
              />
            </div>
          )}
          {!displayBadge2 && (
            <div>
              <img
                alt=""
                className={classes.badgeMobile}
                src="/images/placeholder-badge.png"
              />
            </div>
          )}
          {!displayBadge3 && (
            <div>
              <img
                alt=""
                className={classes.badgeMobile}
                src="/images/placeholder-badge.png"
              />
            </div>
          )}
          <div className={classes.buttons}>
            <Button
              className={classes.button}
              variant="outlined"
              children={
                <Link to="/new" className={classes.link}>
                  Add item
                </Link>
              }
            />
            <Button
              className={classes.button}
              variant="outlined"
              children={
                <Link to="/forest" className={classes.link}>
                  Forest
                </Link>
              }
            />
          </div>
        </section>
      </div>
      <div className={classes.userTree}>
        <Tree treeTotal={treeTotal} />
        <TableContainer className={classes.container} component={Paper}>
          <Table className={classes.table} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Your waste in numbers</StyledTableCell>
                <StyledTableCell align="right"></StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <StyledTableRow key="Recycling">
                <StyledTableCell component="th" scope="row">
                  Recycling
                </StyledTableCell>
                <StyledTableCell align="right">
                  {props.user.recycling ? props.user.recycling : 0}
                </StyledTableCell>
              </StyledTableRow>
              <StyledTableRow key="Organic">
                <StyledTableCell component="th" scope="row">
                  Organic
                </StyledTableCell>
                <StyledTableCell align="right">
                  {props.user.organic ? props.user.organic : 0}
                </StyledTableCell>
              </StyledTableRow>
              <StyledTableRow key="Garbage">
                <StyledTableCell component="th" scope="row">
                  Garbage
                </StyledTableCell>
                <StyledTableCell align="right">
                  {props.user.garbage ? props.user.garbage : 0}
                </StyledTableCell>
              </StyledTableRow>
              <StyledTableRow key="Total">
                <StyledTableCell component="th" scope="row">
                  <strong>Your total score</strong>
                </StyledTableCell>
                <StyledTableCell align="right">
                  <strong>{props.user.total}</strong>
                </StyledTableCell>
              </StyledTableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}
