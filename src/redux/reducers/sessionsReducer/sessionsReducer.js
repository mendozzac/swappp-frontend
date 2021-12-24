import actionTypes from "../../actions/actionTypes";

const sessionsReducer = (sessions = [], action) => {
  let newSessions;
  switch (action.type) {
    case actionTypes.loadSessions:
      newSessions = [...action.sessions];
      break;
    case actionTypes.loadOneSession:
      newSessions = [{ ...action.session }];
      break;
    default:
      newSessions = sessions;
  }
  return newSessions;
};

export default sessionsReducer;
