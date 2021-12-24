import { loadUsersAction } from "../../actions/actionCreators";
import usersReducer from "./usersReducer";

describe("Given an usersReducer", () => {
  describe("When it receives an action loadUsers and an users array", () => {
    test("Then it should return a new users array", () => {
      const users = [];
      const action = loadUsersAction(users);

      const newUsers = usersReducer([], action);

      expect(newUsers).toEqual(users);
    });
  });
  describe("When it receives an action unexpected and an users array", () => {
    test("Then it should return a new users array", () => {
      const users = [];
      const action = { type: "loQueSea" };

      const newUsers = usersReducer([], action);

      expect(newUsers).toEqual(users);
    });
  });
});
