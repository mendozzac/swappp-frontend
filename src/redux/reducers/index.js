import { combineReducers } from "redux";
import oneSwimmerReducer from "./oneSwimmerReducer/oneSwimmerReducer";
import sessionsReducer from "./sessionsReducer/sessionsReducer";
import swimmersReducer from "./swimmersReducer/swimmersReducer";
import timesReducer from "./timesReducer/timesReducer";
import userReducer from "./userReducer/userReducer";
import usersReducer from "./usersReducer/usersReducer";

export default combineReducers({
  swimmers: swimmersReducer,
  swimmer: oneSwimmerReducer,
  user: userReducer,
  users: usersReducer,
  times: timesReducer,
  sessions: sessionsReducer,
});
