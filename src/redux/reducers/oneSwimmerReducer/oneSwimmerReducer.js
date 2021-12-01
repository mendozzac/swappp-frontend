import actionTypes from "../../actions/actionTypes";

const oneSwimmerReducer = (swimmer = {}, action) => {
  let newSwimmer;
  switch (action.type) {
    case actionTypes.loadOneSwimmer:
      newSwimmer = action.swimmer;
      break;
    default:
      newSwimmer = swimmer;
  }
  return newSwimmer;
};

export default oneSwimmerReducer;
