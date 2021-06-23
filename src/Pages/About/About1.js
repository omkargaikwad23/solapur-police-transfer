import React from "react";
import ProfileCard from "./ProfileCard";
import { makeStyles, Grid } from "@material-ui/core";



const useStyle = makeStyles((theme) => ({
  root: {
    
  },
}));

export default function EligibleEmp() {
  const classes = useStyle();
  return (

    <div>
      <h1>&nbsp;Developer Team</h1>

      <Grid item xs={12} className={classes.root} container>
        <Grid item sm={12} >
          <div style={{ display: 'flex', flexWrap: 'wrap', text: 'center', }}>
            <ProfileCard/>      
          </div>
        </Grid>
      </Grid>
      
    </div>
  );
}
