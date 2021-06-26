export const infoCollector = (CandidateInfo) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    //make async call db
    // const firestore = getFirestore();
    dispatch({ type: "COLLECT_INFO", CandidateInfo });
  };
};
