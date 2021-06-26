import authReducer from "./authReducers";
import displayInfoReducer from "./displayInfoReducer";

import { combineReducers } from "redux";
// import { firebaseReducer } from "react-redux-firebase";
import { firestoreReducer } from "redux-firestore";

const rootReducer = combineReducers({
  Auth: authReducer,
  CandidateInfo: displayInfoReducer,
  //   firebase: firebaseReducer,
  firestore: firestoreReducer,
});

export default rootReducer;
