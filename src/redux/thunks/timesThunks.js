import axios from "axios";
import path from "../../path/path";
import {
  createTimeAction,
  updateSwimmerAction,
} from "../actions/actionCreators";

const apiUrl = process.env.REACT_APP_API_URL;

export const createTimeThunk = (time) => async (dispatch) => {
  const { data: newTime } = await axios.post(
    `${apiUrl}${path.swimmers}/${time.swimmer}`,
    time
  );
  dispatch(createTimeAction(newTime));
};

export const updateTimeThunk = (time) => async (dispatch) => {
  const { data: newTime } = await axios.put(
    `${apiUrl}${path.oneSwimmer}/${time.id}`,
    time
  );
  dispatch(updateSwimmerAction(newTime));
};
