import { createUserAction } from "../../actions/actionCreators";
import userReducer from "./userReducer";

describe("Given an userReducer", () => {
  describe("When it receives an action createUser", () => {
    test("Then it should return a new user", () => {
      const user = {
        isAuthenticated: false,
        user: {
          username: "pepe",
          password: "pepe",
        },
      };
      const action = createUserAction(user);
      const newUser = userReducer(user, action);

      expect(newUser).toEqual(user);
    });
  });
  describe("When it receives an action loadUsers and an users array", () => {
    test("Then it should return a new users array", () => {
      const users = {};
      const action = { type: "loQueSea" };

      const newUsers = userReducer({}, action);

      expect(newUsers).toEqual(users);
    });
  });
});
