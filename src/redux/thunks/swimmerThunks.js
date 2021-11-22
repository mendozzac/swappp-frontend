import axios from "axios";
import path from "../../path/path";
import {
  createSwimmerAction,
  deleteSwimmerAction,
  loadSwimmersAction,
} from "../actions/actionCreators";

const apiUrl = process.env.REACT_APP_API_URL;

export const loadSwimmersThunk = () => {
  return async (dispatch) => {
    const { data: swimmers } = await axios.get(`${apiUrl}${path.swimmers}`);
    dispatch(loadSwimmersAction(swimmers));
  };
};

export const createSwimmerThunk = (swimmer) => {
  return async (dispatch) => {
    const { data: newSwimmer } = await axios.post(
      `${apiUrl}${path.register}`,
      swimmer
    );
    dispatch(createSwimmerAction(newSwimmer));
  };
};

export const deleteSwimmerThunk = (id) => {
  return async (dispatch) => {
    const { status } = await axios.delete(`${apiUrl}${id}`);
    if (status === 200) {
      dispatch(deleteSwimmerAction(id));
    }
  };
};
