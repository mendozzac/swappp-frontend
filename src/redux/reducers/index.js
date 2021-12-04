import { combineReducers } from "redux";
import oneSwimmerReducer from "./oneSwimmerReducer/oneSwimmerReducer";
import swimmersReducer from "./swimmersReducer/swimmersReducer";
import userReducer from "./userReducer/userReducer";
import usersReducer from "./usersReducer/usersReducer";

export default combineReducers({
  swimmers: swimmersReducer,
  swimmer: oneSwimmerReducer,
  user: userReducer,
  users: usersReducer,
});
