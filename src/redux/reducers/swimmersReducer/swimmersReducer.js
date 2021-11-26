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
    case actionTypes.deleteSwimmer:
      newSwimmers = swimmers.filter((swimmer) => swimmer.id !== action.id);
      break;
    default:
      newSwimmers = swimmers;
  }
  return newSwimmers;
};

export default swimmersReducer;
