import React from 'react';
import { Link, useParams } from "react-router-dom";
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
// import logo from '../../logo.svg'
import Tree from '../Tree/Tree'


import MyButton from "../Button";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: '#4A235A',
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
    backgroundColor: '#BB76C2',
    // border: "solid 2 white",
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  page: {
    marginTop: 150,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  container: {
    width: '50%', 
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: 20,
    border: 'solid .01em white',
    // boxShadow: '0px 1.5px 1.5px 0px '
  },
  table: {
    minWidth: 250,
    maxWidth: 1500,
    height: 300,
  },
  link: {
    textDecoration: 'none',
    color: 'white'
  },
  userTree: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
    // alignItems: 'center',
    // height: 300,
  },
  nameTitle: {
    color: "white",
    fontSize: "50",
    margin: "0 0 3em 0"
  },

});

export default function User(props) {
  // let { id } = useParams();
  const classes = useStyles()
  const treeTotal = Number(props.user.total);

  return (
    <div className={classes.page}>
      <h2 className={classes.nameTitle}>Welcome {props.user.username}, this is your tree and your stats</h2>
      <div className={classes.userTree}>
        <Tree 
          treeTotal={treeTotal}
        />

        <TableContainer className={classes.container} component={Paper}>
          <Table className={classes.table} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell >Your waste in numbers</StyledTableCell>
                <StyledTableCell align="right"></StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <StyledTableRow key="Recycling">
                <StyledTableCell component="th" scope="row">
                  Recycling
                </StyledTableCell>
                <StyledTableCell align="right">{props.user.recycling ? props.user.recycling : 0}</StyledTableCell>
              </StyledTableRow>
              <StyledTableRow key="Organic">
                <StyledTableCell component="th" scope="row">
                  Organic
                </StyledTableCell>
                <StyledTableCell align="right">{props.user.organic ? props.user.organic : 0}</StyledTableCell>
              </StyledTableRow>
              <StyledTableRow key="Garbage">
                <StyledTableCell component="th" scope="row">
                  Garbage
                </StyledTableCell>
                <StyledTableCell align="right">{props.user.garbage ? props.user.garbage : 0}</StyledTableCell>
              </StyledTableRow>
              <StyledTableRow key="Total">
                <StyledTableCell component="th" scope="row">
                  <strong>Your total score</strong>
                </StyledTableCell>
                <StyledTableCell align="right"><strong>{props.user.total}</strong></StyledTableCell>
              </StyledTableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      
      <MyButton variant="outlined"
          children={
            <Link
              to="/new"
              className={classes.link}
            >Add item
            </Link>
          }
        />
      <MyButton
        children={
          <Link
            to="/forest"
            className={classes.link}
          >The Forest
          </Link>
        }
      />
    </div>
  )
};