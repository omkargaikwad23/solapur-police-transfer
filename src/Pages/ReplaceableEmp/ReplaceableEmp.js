import React from "react";

// import SearchIcon from '@material-ui/icons/Search';
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Card from "./Card"

// import PeopleOutlineTwoToneIcon from "@material-ui/icons/PeopleOutlineTwoTone";
import { makeStyles, Grid } from "@material-ui/core";

const InitialValues = {

}

const useStyle = makeStyles((theme) => ({
  root: {
    "& .MuiFormControl-root": {
      width: "90%",
      margin: theme.spacing(1),
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,

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
      <h1>&nbsp;बदलीस पात्र कर्मचारी</h1>
      <Grid className={classes.root} container>
        <Grid  item xs={4}>
          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel id="demo-simple-select-outlined-label" color="secondary">
              पोलिस स्टेशन निवडा
            </InputLabel>
            <Select color="primary"
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              // value={basicInfo.policeStation}
              // onChange={handleInputChange}
              label="पोलिस स्टेशन निवडा"
              name="typeOfTransfer"
              className={classes.selectEmpty}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={"p1"}>PoliceStation-1</MenuItem>
              <MenuItem value={"p2"}>PoliceStation-2</MenuItem>
              <MenuItem value={"p3"}>PoliceStation-3</MenuItem>
            </Select>
            {/* <FormHelperText>Required</FormHelperText> */}

          </FormControl>
        </Grid>

        <Grid  item xs={4}>
          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel id="demo-simple-select-outlined-label" color="secondary">
              बदलीचा प्रकार निवडा
            </InputLabel>
            <Select color="primary"
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              // value={basicInfo.policeStation}
              // onChange={handleInputChange}
              label="पोलिस स्टेशन निवडा"
              name="policeStation"
              className={classes.selectEmpty}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={"t1"}>प्रशासकीय बदली</MenuItem>
              <MenuItem value={"t2"}>कसुरी बदली</MenuItem>
              <MenuItem value={"t3"}>विनंती बदली</MenuItem>
            </Select>
            {/* <FormHelperText>Required</FormHelperText> */}
          </FormControl>
        </Grid>

        <Grid item xs={4}>
          <TextField className={classes.selectEmpty}
            label="शोध"
            name="searchBox"
            variant="outlined"
            // value={basicInfo.bakkalNo}
            // onChange={handleInputChange}
            required
            autoComplete="off"
            color="secondary"
            id="standard-required"
            // helperText="Required"
          />
        </Grid>

      </Grid>


      <Grid className={classes.root} container>
        <Grid item xs={12}>
          <div style={{ display: 'flex', flexWrap: 'wrap', marginLeft:30, marginRight: 0}}>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
