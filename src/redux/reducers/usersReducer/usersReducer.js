import actionTypes from "../../actions/actionTypes";

const usersReducer = (users = [], action) => {
  let newUsers;

  switch (action.type) {
    case actionTypes.loadUsers:
      newUsers = [...action.users];
      break;
    case actionTypes.deleteUser:
      newUsers = users.filter((user) => user.id !== action.id);
      break;
    default:
      newUsers = users;
  }
  return newUsers;
};

export default usersReducer;
