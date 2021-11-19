import axios from "axios";
import { loadSwimmersAction } from "../actions/actionCreators";

const apiUrl = process.env.REACT_APP_API_URL;
export const loadSwimmersThunk = () => {
  return async (dispatch) => {
    const { data: swimmers } = await axios.get(apiUrl + "/swimmers");
    dispatch(loadSwimmersAction(swimmers));
  };
};
