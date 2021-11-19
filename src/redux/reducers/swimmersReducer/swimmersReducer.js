import actionTypes from "../../actions/actionTypes";

const swimmersReducer = (swimmers = [], action) => {
  let newSwimmers;

  switch (action.type) {
    case actionTypes.loadSwimmers:
      newSwimmers = [...action.swimmers];
      break;
    default:
      newSwimmers = swimmers;
  }
  return newSwimmers;
};

export default swimmersReducer;
