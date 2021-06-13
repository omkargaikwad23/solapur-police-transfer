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
            <TableCell>अ.क्र.</TableCell>
            <TableCell align="right">नाव</TableCell>
            <TableCell align="right">सध्याची नेमणुक&nbsp;</TableCell>
            <TableCell align="right" size="medium">दिनांक&nbsp;</TableCell>
            <TableCell align="right">से.नि. दिनांक&nbsp;</TableCell>
            <TableCell align="right">मुळगाव</TableCell>
            <TableCell align="right">बक्षिस </TableCell>
            <TableCell align="right">शिक्षा</TableCell>
            <TableCell align="right">यापूर्वी केलेले पो.ठाणे</TableCell>
            <TableCell align="right">दिनांक</TableCell>
            <TableCell align="right">अर्जातील कारण</TableCell>
            <TableCell align="right">प्रभारी अधिकारी यांचे अभिप्राय</TableCell>
            <TableCell align="right">शेरा</TableCell>
            <TableCell align="right">आस्थापना मंडळ अंतिम निर्णय</TableCell>
            {/* <TableCell align="right">Name</TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.no}
              </TableCell>
              <TableCell align="right">{row.name}</TableCell>
              <TableCell align="right">{row.currentPost}</TableCell>
              <TableCell align="right" size="medium">{row.date}</TableCell>
              <TableCell align="right">{row.retDate}</TableCell>
              <TableCell align="right">{row.homeTown}</TableCell>
              <TableCell align="right">{row.reward}</TableCell>
              <TableCell align="right">{row.punishment}</TableCell>
              {/*  */}
              <TableCell align="right">{row.workedStation}</TableCell>
              <TableCell align="right">{row.date2}</TableCell>
              <TableCell align="right">{row.formReason}</TableCell>
              <TableCell align="right">{row.reqStation}</TableCell>
              <TableCell align="right">{row.officerOpinion}</TableCell>
              <TableCell align="right">{row.remark}</TableCell>
              <TableCell align="right">{row.finalDecision}</TableCell>
              {/* <TableCell align="right">{row.protein}</TableCell> */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
