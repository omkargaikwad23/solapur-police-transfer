import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper'
import GetAppIcon from '@material-ui/icons/GetApp';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(6),
    padding: theme.spacing(4)
    
  },
  container: {
    alignItems: 'center',
    margin: theme.spacing(4),

  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
  Paper: {
    width: '400',
    height: '500'
  }
}));

export default function () {

  const classes = useStyles();

  return (
    <div>
      <h1>अहवाल मिळवा</h1>

      <Paper className={classes.root} elevation={3}>
        <form className={classes.container} noValidate>
          <TextField
            id="date"
            label="तारीख निवडा"
            type="date"
            variant="standard"
            defaultValue={new Date().getDate() + "-" + (new Date().getMonth() + 1) + "-" + new Date().getFullYear()}
            className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </form>

        <Button 
          size="large" 
          variant="contained" 
          color="primary"
          endIcon={<GetAppIcon/>}>
          रिपोट मिळवा
        </Button>
      </Paper>
    </div>
  )
}