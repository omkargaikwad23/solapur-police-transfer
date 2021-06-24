import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CardActionArea from '@material-ui/core/CardActionArea';
import Box from '@material-ui/core/Box';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


const useStyles = makeStyles({
  root: {
    width: 292,
    height: 160,
    margin: 6,
  },
  body: {
    padding: 6,
    flex: '1 0 auto'
  },
  table: {
    
  },
});

export default function OutlinedCard({info}) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  console.log("called file",info);
  return (
    <Card className={classes.root} variant="outlined">
      <CardActionArea>
        <CardContent className={classes.body}>
          <Typography >
            <Box fontWeight="fontWeightBold" m={1}>
              {info.Name}
            </Box>
          </Typography>

          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="center">ASI</TableCell>
                  <TableCell align="center">PC</TableCell>
                  <TableCell align="center">PN</TableCell>
                  <TableCell align="center">HC</TableCell>
                  <TableCell align="center">एकूण</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {/* {rows.map((row) => ( */}
                  <TableRow>
                    <TableCell align="center">{info.Diff_Asi}</TableCell>
                    <TableCell align="center">{info.Diff_PC}</TableCell>
                    <TableCell align="center">{info.Diff_PN}</TableCell>
                    <TableCell align="center">{info.Diff_HC}</TableCell>
                    <TableCell align="center">{info.Total_Diff}</TableCell>
                  </TableRow>
                {/* ))} */}
              </TableBody>
            </Table>
          </TableContainer>

          
        </CardContent>
      </CardActionArea>
      {/* <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions> */}
    </Card>
  );
}
