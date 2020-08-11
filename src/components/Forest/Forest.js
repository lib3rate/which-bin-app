import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import ForestTree from "../Forest/ForestTree";
import Tooltip from "@material-ui/core/Tooltip";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionActions from "@material-ui/core/AccordionActions";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  page: {
    marginTop: 150,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingBottom: "10px",
    color: "white"
  },
  forest: {
    height: 175,
    margin: "20px 0 50px 0",
    display: "flex",
    flexDirection: "row",
    width: 1000,
  },
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: 20,
  },

  tree: {
    width: 150,
  },
  userInfo: {
    display: "flex",
    justifyContent: "space-between",
    borderBottom: "solid",
    // borderTop: "solid",
    borderWidth: ".01em",
  },
  forestAccordion: {
    boxShadow: "0px 0px 1px 2px rgba(0, 0, 0, 0.2)",
    width: "30em",
    border: "solid .01em white",

  },
  summary: {
    // backgroundImage: 'url("/images/beautiful-color-ui-gradients-backgrounds-bloody-mary.png")',
    background: "linear-gradient(90deg, #4A235A, 40%, #62076B 90%)",
    color: "white",
    height: "50px",
  },
  name: {
    color: "#4A235A",
    fontWeight: "400",
    padding: "0 2em 0 0",
  },
  score: {
    display: "flex",
    color: "#4A235A",
    fontWeight: "400",
  },
  button: {
    borderColor: "black",
    color: "red",
    "&:hover": {
      backgroundColor: "#4A235A",
    },
    margin: "0 0 1em 2em",
  },
  buttons: {
    display: "flex",
    margin: "2em 0 0 0",
    // color: "red"
  },
  link: {
    textDecoration: "none",
    color: "white",
  },
  userScores: {
    display: "flex",
    flexDirection: "column",
    // alignItems: "center",
    width: "100%",
  },
  forestTitle: {
    margin: "-1.7em 0 -1em 0 "
  },
  downArrow: {
    color: "white"
  }

});

export default function Forest(props) {
  const classes = useStyles();
  // console.log("props.userBins: >>>>>>>>>>>>>>>>>>>>>>>>>>>>", props.userBins);
  const users = props.userBins;
  users.sort((a, b) => b.score - a.score);

  return (
    <div className={classes.page}>
      <h2 className={classes.forestTitle}>Forest of user trees</h2>
      <section className={classes.forest}>
        {users.map((userBin) => (
          <ForestTree treeTotal={userBin.score} name={userBin.username} />
        ))}
      </section>
      <Accordion defaultCollapsed className={classes.forestAccordion}>
        {/* <TableContainer className={classes.container} component={Paper}> */}
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className={classes.downArrow} />}
          aria-controls="panel1c-content"
          id="panel1c-header"
          className={classes.summary}
        >
          <h4>Leaderboard</h4>
          {/* <TableHead> */}
          {/* <TableRow> */}
          {/* <StyledTableCell>Leaderboard</StyledTableCell> */}
          {/* <StyledTableCell align="right"></StyledTableCell> */}
          {/* </TableRow> */}
          {/* </TableHead> */}
        </AccordionSummary>
        <AccordionDetails className={classes.forestDetails}>
          {/* <Table className={classes.table} aria-label="customized table"> */}
          {/* <TableBody> */}
          <div className={classes.userScores}>
            {users.map((userBin) => (
              // <StyledTableRow key={userBin.user_id}>
              // <StyledTableCell component="th" scope="row">
              <div className={classes.userInfo}>
                <p className={classes.name}>{userBin.username}</p>
                {/* </StyledTableCell> */}
                {/* // <StyledTableCell align="right"> */}
                <p className={classes.userScore}>{userBin.score}</p>
              </div>
              // </StyledTableCell>
              // </StyledTableRow>
            ))}
          </div>
          {/* </TableBody> */}
          {/* </Table> */}
        </AccordionDetails>
        {/* </TableContainer> */}
      </Accordion>
      <section className={classes.buttons}>
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
            <Link to="/users/1" className={classes.link}>
              Your User Page
            </Link>
          }
        />
      </section>
    </div>
  );
}
