import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import { userLogoutAction } from "../redux/actions/actionCreators";
import {
  createUserThunk,
  deleteUserThunk,
  loadUsersThunk,
  loginUserThunk,
} from "../redux/thunks/userThunk";

const useUser = () => {
  const user = useSelector(({ user }) => user);
  const users = useSelector(({ users }) => users);
  const dispatch = useDispatch();

  const loginUser = (user) => {
    dispatch(loginUserThunk(user));
  };

  const logoutUser = () => {
    localStorage.removeItem(process.env.REACT_APP_LOCAL_STORAGE);
    dispatch(userLogoutAction());
  };

  const createUser = (user) => {
    dispatch(createUserThunk(user));
  };

  const loadUsers = useCallback(() => {
    dispatch(loadUsersThunk());
  }, [dispatch]);

  const deleteUser = (idUser) => {
    dispatch(deleteUserThunk(idUser));
  };

  return {
    user,
    users,
    loginUser,
    logoutUser,
    createUser,
    loadUsers,
    deleteUser,
  };
};

export default useUser;
