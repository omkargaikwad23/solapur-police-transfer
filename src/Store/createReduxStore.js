import { createStore } from "redux";
import reducer from "./Reducers/rootReducer";
import thunk from "redux-thunk";
import { getFirebase } from "react-redux-firebase";
import { applyMiddleware, compose } from "redux";

const initialState = {};
const middlewares = [thunk.withExtraArgument(getFirebase)];

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  return createStore(
    reducer,
    initialState,
    // applyMiddleware(...middleware) // to add other middleware
    //applyMiddleware([thunk.withExtraArgument(getFirebase)])
    compose(applyMiddleware(...middlewares))
  );
};
