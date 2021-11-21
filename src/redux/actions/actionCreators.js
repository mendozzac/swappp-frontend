import actionTypes from "./actionTypes";

export const loadSwimmersAction = (swimmers) => ({
  type: actionTypes.loadSwimmers,
  swimmers,
});

export const createSwimmerAction = (swimmer) => ({
  type: actionTypes.createSwimmer,
  swimmer,
});
