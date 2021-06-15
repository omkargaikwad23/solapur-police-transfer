import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  TableHead: {
    fontWeight: 'bold',
    fontSize: 16,
  }
});

function createData(no, name, currentPost, date, retDate, homeTown, reward, punishment, workedStation, date2, formReason, reqStation, officerOpinion, remark, finalDecision) {
  return { no, name, currentPost, date, retDate, homeTown, reward, punishment, workedStation, date2, formReason, reqStation, officerOpinion, remark, finalDecision };
}

const rows = [
  createData('1', 'रमेश श्यामराव कोळी', 'पार्शी शहर', '06-07-16', '06-07-16', 'करमाळा', 19, 22, '1)सोलापूर तालुका पोलीस ठाणे 2)मोहोळ पोलीस ठाणे', '04/04/1984 23/10/2001', 'वडील आजारी असतात. त्यामुळे गावी बदली हवी', 'opinion पंढरपूर मंदिर सुरक्षा', 'rem बदलीस शिफारस आहे', 'decision done'),
  // createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  // createData('Eclair', 262, 16.0, 24, 6.0),
  // createData('Cupcake', 305, 3.7, 67, 4.3),
  // createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function BasicTable() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>

          <TableRow>
            <TableCell align="right">पो.ठाणे नाव</TableCell>
            <TableCell align="center">sanctioned संख्या
              {/* <TableRow> */}
                <TableCell align="center">asi</TableCell>
                <TableCell align="center">pn</TableCell>
                <TableCell align="center">pc</TableCell>
                <TableCell align="center">hc</TableCell>
                <TableCell align="center">total</TableCell>
              {/* </TableRow> */}
            </TableCell>
            <TableCell align="center">total female count</TableCell>
            <TableCell align="center">total driver count</TableCell>
            <TableCell align="center">came</TableCell>
            <TableCell align="center">gone</TableCell>
            <TableCell align="center">going</TableCell>
            <TableCell align="center">rise/fall</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell align="center">पो.ठाणे नाव</TableCell>
              <TableCell>
                <TableCell align="center">2</TableCell>
                <TableCell align="center">5</TableCell>
                <TableCell align="center">1</TableCell>
                <TableCell align="center">1</TableCell>
                <TableCell align="center">4</TableCell>
              </TableCell>
              <TableCell align="center">12</TableCell>
              <TableCell align="center">3</TableCell>
              <TableCell align="center">4</TableCell>
              <TableCell align="center">3</TableCell>
              <TableCell align="center">1</TableCell>
              <TableCell align="center">0</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer >
  );
}
