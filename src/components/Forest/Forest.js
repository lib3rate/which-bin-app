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
    margin: 15
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
  const classes = useStyles()

  return (
    <div className={classes.page}>
      <h2>This is the Forest</h2>
      {/* <img src="/images/forest.jpg" alt="Forest" className={classes.forest}/> */}
        
        
        <Tree 
            treeTotal="75"
        />
        
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