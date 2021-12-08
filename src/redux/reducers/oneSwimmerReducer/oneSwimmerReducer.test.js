import {
  loadOneSwimmerAction,
  updateSwimmerAction,
} from "../../actions/actionCreators";
import oneSwimmerReducer from "./oneSwimmerReducer";

describe("Given a oneSwimmerReducer", () => {
  describe("When it receives an action loadOneSwimmer", () => {
    test("Then it should return a new swimmer", () => {
      const swimmer = {
        name: "Dean",
        surname: "McLean",
        user: {},
      };
      const action = loadOneSwimmerAction(swimmer);

      const newSwimmer = oneSwimmerReducer({}, action);

      expect(newSwimmer).toEqual(swimmer);
    });
  });
  describe("When it receives an action updateSwimmer", () => {
    test("Then it should return a new swimmer", () => {
      const swimmer = {
        name: "Dean",
        surname: "McLean",
        user: {},
      };
      const action = updateSwimmerAction(swimmer);

      const newSwimmer = oneSwimmerReducer({}, action);

      expect(newSwimmer).toEqual(swimmer);
    });
  });
  describe("When it receives an action unexpected and a swimmer", () => {
    test("Then it should return the current swimmer", () => {
      const swimmer = {
        name: "Dean",
        surname: "McLean",
        user: {},
      };
      const action = { type: "loQueSea" };

      const newSwimmer = oneSwimmerReducer(swimmer, action);

      expect(newSwimmer).toEqual(swimmer);
    });
  });
});
