import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary">
      {'Copyright © '}
      <Link color="white" target="_blank" href="https://solapurcitypolice.gov.in/PoliceStations">
        Solapur Police
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '10vh',
    
  },
  main: {
    width: '100%',
    padding: theme.spacing(3),
    marginTop: theme.spacing(8),
    // marginBottom: theme.spacing(2),
    // background: 'text.secondary',
    // backgroundColor:
    //   theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[100],
  },
  footer: {
    padding: theme.spacing(1),
    color: 'gray',
    // marginTop: 'auto',
   
  },
}));

export default function StickyFooter() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Box bgcolor="text.secondary"  className={classes.main} >
        <Container component="main" >
            {/* <Typography variant="h5" component="h2" gutterBottom>
            {'Pin a footer to the bottom of the viewport.'}
            {'The footer will move as the main element of the page grows.'}
            </Typography> */}
            
            <Grid container spacing={3}>
                <Grid item xs={6} sm={4}>
                    <Typography variant="h4" component="h1" gutterBottom>
                        Solapur SP
                    </Typography>
                    <Typography variant="body2">This website is developed for making online transfers of the Solapur Police Staff.</Typography>
                </Grid>
                <Grid item xs={6} sm={4}>
                    <Typography variant="h4" component="h1" gutterBottom>
                        Contact Solapur Station
                    </Typography>
                    <Typography variant="body2">WHATSAPP NO.: +91 9423880004</Typography>

                </Grid>
                {/* <Grid item xs={6} sm={4}>
                <Paper className={classes.paper}>xs=6 sm=3</Paper>
                </Grid> */}
                <Grid item xs={6} sm={4}>
                    <Typography variant="h4" component="h1" gutterBottom>
                        Developer Contact
                    </Typography>
                    {/* <Typography variant="body1">Pune Institute of Computer Technology</Typography> */}
                    <Typography variant="body1">Developed by <Link color="white" target="_blank" href="https://pict.edu/">PICT</Link> students</Typography>

                    <Typography variant="body2">Rushikesh Korade (+91-899238384)</Typography>

                </Grid>
            </Grid>
        </Container>
      </Box>
      
      
        <Box className={classes.footer} bgcolor="#3f51b5">
           
            <Container maxWidth="sm">
                <Copyright />
            </Container>
          
        </Box>
    </div>
  );
}