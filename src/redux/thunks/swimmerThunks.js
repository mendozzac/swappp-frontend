import axios from "axios";
import path from "../../path/path";
import {
  createSwimmerAction,
  deleteSwimmerAction,
  loadSwimmersAction,
  loadOneSwimmerAction,
  updateSwimmerAction,
} from "../actions/actionCreators";

const apiUrl = process.env.REACT_APP_API_URL;

export const loadSwimmersThunk = () => {
  return async (dispatch) => {
    const { data: swimmers } = await axios.get(`${apiUrl}${path.swimmers}`);
    dispatch(loadSwimmersAction(swimmers));
  };
};

export const createSwimmerThunk = (id, swimmer) => {
  return async (dispatch) => {
    const { data: newSwimmer } = await axios.post(
      `${apiUrl}${path.register}/${id}`,
      swimmer
    );
    dispatch(createSwimmerAction(newSwimmer));
  };
};

export const deleteSwimmerThunk = (idSwimmer) => {
  return async (dispatch) => {
    const { status } = await axios.delete(
      `${apiUrl}${path.swimmers}/${idSwimmer}`
    );
    if (status === 200) {
      dispatch(deleteSwimmerAction(idSwimmer));
    }
  };
};

export const loadOneSwimmerThunk = (idSwimmer) => {
  return async (dispatch) => {
    const { data: swimmer } = await axios.get(
      `${apiUrl}${path.swimmers}/${idSwimmer}`
    );
    dispatch(loadOneSwimmerAction(swimmer));
  };
};

export const updateSwimmerThunk = (swimmer) => async (dispatch) => {
  const { data: newSwimmer } = await axios.put(
    `${apiUrl}${path.swimmers}/${swimmer.id}`,
    swimmer
  );
  dispatch(updateSwimmerAction(newSwimmer));
};
