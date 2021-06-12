import React from "react";

// import SearchIcon from '@material-ui/icons/Search';

import RequestedStation from './RequestedStation'
import OtherStation from './OtherStation'
import { makeStyles, Grid } from "@material-ui/core";



const useStyle = makeStyles((theme) => ({
  root: {
    "& .MuiFormControl-root": {
      width: "90%",
      margin: theme.spacing(1),
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function EligibleEmp() {
  const classes = useStyle();
  return (

    <div>
      <h1>&nbsp;बदलीचे पोलिस स्टेशन</h1>
      <hr></hr>
      <h1>&nbsp;विनंती केलेले</h1>

      <Grid className={classes.root} container>
        <Grid item xs={12}>
          <div style={{ display: 'flex', flexWrap: 'wrap'}}>
            <RequestedStation />
            <RequestedStation />
            <RequestedStation />
            <RequestedStation />
            <RequestedStation />
          </div>
        </Grid>
      </Grid>

      <hr/>
      <h1>&nbsp;इतर</h1>
      <Grid className={classes.root} container>
        <Grid item xs={12}>
          <div style={{ display: 'flex', flexWrap: 'wrap'}}>
            <OtherStation />
            <OtherStation />
            <OtherStation />
            <OtherStation />
            <OtherStation />
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
