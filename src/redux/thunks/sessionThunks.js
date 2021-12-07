import axios from "axios";
import path from "../../path/path";
import {
  loadOneSessionAction,
  loadSessionsAction,
} from "../actions/actionCreators";

const apiUrl = process.env.REACT_APP_API_URL;

export const loadSessionsThunk = () => async (dispatch) => {
  const { data: sessions } = await axios.get(`${apiUrl}${path.season}`);
  dispatch(loadSessionsAction(sessions));
};

export const loadOneSessionThunk = (idSession) => async (dispatch) => {
  const { data: session } = await axios.get(
    `${apiUrl}${path.season}/${idSession}`
  );
  dispatch(loadOneSessionAction(session));
};
