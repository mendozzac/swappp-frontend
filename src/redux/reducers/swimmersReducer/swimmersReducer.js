import actionTypes from "../../actions/actionTypes";

const swimmersReducer = (swimmers = [], action) => {
  let newSwimmers;

  switch (action.type) {
    case actionTypes.loadSwimmers:
      newSwimmers = [...action.swimmers];
      break;
    case actionTypes.createSwimmer:
      newSwimmers = [...swimmers, action.swimmer];
      break;
    default:
      newSwimmers = swimmers;
  }
  return newSwimmers;
};

export default swimmersReducer;
