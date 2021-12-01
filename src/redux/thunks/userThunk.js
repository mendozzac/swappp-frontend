import axios from "axios";
import { userLoginAction } from "../actions/actionCreators";
import jwDecode from "jwt-decode";
import path from "../../path/path";

const apiUrl = process.env.REACT_APP_API_URL;

export const loginUserThunk = (user) => async (dispatch) => {
  try {
    const { data, status } = await axios.post(`${apiUrl}${path.login}`, user);
    const token = data.token;
    if (status === 200) {
      const user = jwDecode(token);
      dispatch(userLoginAction(user));
      localStorage.setItem(
        process.env.REACT_APP_LOCAL_STORAGE,
        JSON.stringify({ token: token })
      );
    }
  } catch {
    const error = new Error("Error en la identificación");
    return error;
  }
};
