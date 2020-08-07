import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Tree from '../Tree/Tree'

const rearrangedScores = (arr) => {
  let arr1 = arr.slice(0, arr.length / 2);
  let arr2 = arr.slice(arr.length / 2, arr.length);
  arr2.sort(function (a, b) {
      return b - a;
});
  return arr = arr1.concat(arr2);

}
// console.log("array: ", rearrangedScores([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))


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
  forest: {
    height: 300,
    margin: 15,
    display: 'flex',
    flexDirection: 'row',
    width: 1000,
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: 20
  },
  table: {
    minWidth: 700,
    maxWidth: 1500
  },
});

export default function Forest(props) {
  const classes = useStyles();

  const users = props.userBins;
  users.sort((a, b) => (b.score - a.score));

  const scoresArr = [];
  users.map((userBin) => scoresArr.push(Number(userBin.score)));
  const reArrangedArr = rearrangedScores(scoresArr.reverse());
  console.log("reArrangedArr", reArrangedArr)
  return ( 
    <div className={classes.page}>
      <h2>This is the Forest</h2>
      {/* <img src="/images/forest.jpg" alt="Forest" className={classes.forest}/> */}
        <div className={classes.forest}>
      {reArrangedArr.map((individualScore) => (
        
        <Tree 
            treeTotal={(individualScore)} 
        />

        
      ))}
        </div>
      <TableContainer className={classes.container} component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Leaderboard</StyledTableCell>
              <StyledTableCell align="right"></StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.userBins.map((userBin) => (
              <StyledTableRow key={userBin.user_id}>
                <StyledTableCell component="th" scope="row">
                  {userBin.username}
                </StyledTableCell>
                <StyledTableCell align="right">{userBin.score}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}