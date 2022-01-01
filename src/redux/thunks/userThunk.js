import axios from "axios";
import {
  createUserAction,
  deleteUserAction,
  loadUsersAction,
  userLoginAction,
} from "../actions/actionCreators";
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

export const createUserThunk = (user) => {
  return async (dispatch) => {
    const { data: newUser } = await axios.post(
      `${apiUrl}${path.register}`,
      user
    );
    dispatch(createUserAction(newUser));
  };
};

export const loadUsersThunk = () => {
  return async (dispatch) => {
    const { data: users } = await axios.get(`${apiUrl}${path.register}`);
    dispatch(loadUsersAction(users));
  };
};

export const deleteUserThunk = (idUser) => async (dispatch) => {
  const { status } = await axios.delete(
    `${apiUrl}${path.oneSwimmer}/${idUser}`
  );
  if (status === 200) {
    dispatch(deleteUserAction(idUser));
  }
};
