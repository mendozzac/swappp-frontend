import { useDispatch, useSelector } from "react-redux";

import { userLogoutAction } from "../redux/actions/actionCreators";
import { loginUserThunk } from "../redux/thunks/userThunk";

const useUser = () => {
  const user = useSelector(({ user }) => user);
  const dispatch = useDispatch();

  const loginUser = (user) => {
    dispatch(loginUserThunk(user));
  };

  const logoutUser = () => {
    localStorage.removeItem(process.env.REACT_APP_LOCAL_STORAGE);
    dispatch(userLogoutAction());
  };

  return {
    user,
    loginUser,
    logoutUser,
  };
};

export default useUser;
