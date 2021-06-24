import React from "react";
import EmptyCard from "./EmptyCard";
import { makeStyles, Grid } from "@material-ui/core";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";



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
const EligibleEmp = (props) => {
  const { allInfo } = props;
  const classes = useStyle();

  if(allInfo)
  {
  // console.log(allInfo);
  // allInfo.map((info)=>{
  //   console.log(info);
    return(
      <Grid className={classes.root} container>
         <Grid item sm={12}>
          <div style={{ display: 'flex', flexWrap: 'wrap', text: 'center', }}>
            {
              allInfo.map((info)=>{
              console.log(info);
              return(
                <div>
              <EmptyCard info={info} />


                </div>
              );
              })
            }
            
          </div>
        </Grid>
      </Grid>

    );

  // })

  }
  else
  {
    return (
      <div>
      <h1>Loading</h1>

      </div>
    )
  }
  
  // return (

  //   <div>
  //     <h1>&nbsp;पोलिस स्टेशन प्रमाणे रिक्त जागांची माहिती</h1>

  //     <Grid className={classes.root} container>
  //       <Grid item sm={12}>
  //         <div style={{ display: 'flex', flexWrap: 'wrap', text: 'center', }}>

  //           <EmptyCard/>
  //           <EmptyCard/>
  //           <EmptyCard/>
  //           <EmptyCard/>
  //           <EmptyCard/>
  //           <EmptyCard/>
  //           <EmptyCard/>
  //           <EmptyCard/>
  //           <EmptyCard/>
  //         </div>
  //       </Grid>
  //     </Grid>
      
  //   </div>
  // );
}


const mapStateToProps = (state) => {
  //const id = ownProps.match.params.id;
  //const allInfo = state.firestore.data.policetransfer;
  //const candidateInfo = allInfo ? allInfo[id] : null;
  console.log("from list",state)
  return {
   // PoliceStationInfo: allInfo,
   allInfo:state.firestore.ordered.policetransfer,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "policetransfer" }])
)(EligibleEmp);
