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

import MyButton from "../Button";

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
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  table: {
    minWidth: 700,
    maxWidth: 1500
  },
});

function createData(category, score) {
  return { category, score };
}

const rows = [
  createData('Recycling', 159),
  createData('Garbage', 237),
  createData('Organic', 262),
];

export default function User() {
  let { id } = useParams();
  const classes = useStyles()

  return (
    <div className={classes.page}>
      <h2>[For testing: Requested user ID: {id}]</h2>

      <MyButton
        children={<Link to="/new">Add new</Link>}
      />

      <img alt="Tree"></img>

      <TableContainer className={classes.container} component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Your waste in numbers</StyledTableCell>
              <StyledTableCell align="right"></StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.category}>
                <StyledTableCell component="th" scope="row">
                  {row.category}
                </StyledTableCell>
                <StyledTableCell align="right">{row.score}</StyledTableCell>
              </StyledTableRow>
            ))}
              <StyledTableRow key="Total">
                <StyledTableCell component="th" scope="row">
                  <strong>Your total score</strong>
                </StyledTableCell>
                <StyledTableCell align="right"><strong>658</strong></StyledTableCell>
              </StyledTableRow>
          </TableBody>
        </Table>
      </TableContainer>
      
      <MyButton
        children={<Link to="/forest" /* style={{textDecoration: 'none'}} */>Leaderboard</Link>}
      />
    </div>
  )
}