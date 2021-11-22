import actionTypes from "./actionTypes";

export const loadSwimmersAction = (swimmers) => ({
  type: actionTypes.loadSwimmers,
  swimmers,
});

export const createSwimmerAction = (swimmer) => ({
  type: actionTypes.createSwimmer,
  swimmer,
});

export const deleteSwimmerAction = (id) => ({
  type: actionTypes.deleteSwimmer,
  id,
});
