import actionTypes from "./actionTypes";

export const loadSwimmersAction = (swimmers) => ({
  type: actionTypes.loadSwimmers,
  swimmers,
});

export const createSwimmerAction = (swimmer) => ({
  type: actionTypes.createSwimmer,
  swimmer,
});

export const deleteSwimmerAction = (id) => ({
  type: actionTypes.deleteSwimmer,
  id,
});

export const loadOneSwimmerAction = (swimmer) => ({
  type: actionTypes.loadOneSwimmer,
  swimmer,
});

export const updateSwimmerAction = (swimmer, id) => ({
  type: actionTypes.updateSwimmer,
  swimmer,
  id,
});

export const userLoginAction = (user) => ({
  type: actionTypes.loginUser,
  user,
});

export const userLogoutAction = () => ({
  type: actionTypes.logoutUser,
});

export const createUserAction = (user) => ({
  type: actionTypes.createUser,
  user,
});

export const loadUsersAction = (users) => ({
  type: actionTypes.loadUsers,
  users,
});

export const createTimeAction = (time) => ({
  type: actionTypes.createTime,
  time,
});

export const updateTimeAction = (time, id) => ({
  type: actionTypes.updateTime,
  time,
  id,
});

export const loadSessionsAction = (sessions) => ({
  type: actionTypes.loadSessions,
  sessions,
});

export const loadOneSessionAction = (session) => ({
  type: actionTypes.loadOneSession,
  session,
});
