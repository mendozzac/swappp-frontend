import { loadOneSwimmerAction } from "../../actions/actionCreators";
import oneSwimmerReducer from "./oneSwimmerReducer";

describe("Given a oneSwimmerReducer reducer", () => {
  describe("when it receives a swimmer object and an action", () => {
    test("Then it should return a new swimmer", () => {
      const initialSwimmer = {};
      const swimmer = {
        name: "Caroline",
        image: "https://image.flaticon.com/icons/png/512/1228/1228248.png",
        surname: "Griffin",
        birthdate: "1998-12-06T00:00:00.000Z",
        height: 178,
        weight: 67,
        __v: 0,
        id: "61992a5f29e95e7ccc4b5bca",
      };
      const action = loadOneSwimmerAction(swimmer);
      const newSwimmer = oneSwimmerReducer(initialSwimmer, action);

      expect(newSwimmer).toEqual(swimmer);
    });
  });
  describe("When it receives an empty swimmer object", () => {
    test("Then it should return the same empty object", () => {
      const initialSwimmer = {};
      const action = { type: "" };

      const newSwimmer = oneSwimmerReducer(initialSwimmer, action);

      expect(newSwimmer).toEqual(initialSwimmer);
    });
  });
});
