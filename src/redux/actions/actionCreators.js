import actionTypes from "./actionTypes";

export const loadSwimmersAction = (swimmers) => ({
  type: actionTypes.loadSwimmers,
  swimmers,
});
