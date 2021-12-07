import actionTypes from "../../actions/actionTypes";

const sessionsReducer = (sessions = [], action) => {
  let newSessions;

  switch (action.type) {
    case actionTypes.loadSession:
      newSessions = [...action.sessions];
      break;
    case actionTypes.loadOneSession:
      newSessions = sessions.map((session) =>
        session.id === action.session.id
          ? { ...session, ...action.session }
          : session
      );
      break;
    default:
      newSessions = sessions;
  }
  return newSessions;
};

export default sessionsReducer;
