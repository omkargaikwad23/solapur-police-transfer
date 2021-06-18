import React from "react";
import EmptyCard from "./EmptyCard";
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
      <h3>&nbsp;पोलिस स्टेशन प्रमाणे रिक्त जागांची माहिती</h3>

      <Grid className={classes.root} container>
        <Grid item xs={12}>
          <div style={{ display: 'flex', flexWrap: 'wrap'}}>
            <EmptyCard/>
            <EmptyCard/>
            <EmptyCard/>
            <EmptyCard/>
            <EmptyCard/>
            <EmptyCard/>
            <EmptyCard/>
            <EmptyCard/>
            <EmptyCard/>
          </div>
        </Grid>
      </Grid>
      
    </div>
  );
}
