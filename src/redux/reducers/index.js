import { combineReducers } from "redux";
import swimmersReducer from "./swimmersReducer/swimmersReducer";

export default combineReducers({ swimmers: swimmersReducer });
