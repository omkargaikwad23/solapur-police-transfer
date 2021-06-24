const initState = {};

const displayInfoReducer = (state = initState, action) => {
  switch (action.type) {
    case "COLLECT_INFO":
      console.log("calling collector");
      return state;

    default:
      return state;
  }
};

export default displayInfoReducer;
