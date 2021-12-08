import { createTimeAction } from "../../actions/actionCreators";
import timesReducer from "./timesReducer";

describe("Given  a timesReducer reducer", () => {
  describe("When it receives a times list and a create action", () => {
    test("Then it should add it to the list", () => {
      const times = [];
      const newTime = {
        distance: "200",
        style: "Braza",
        time: "2:20.06",
      };

      const action = createTimeAction(newTime);
      const newTimes = timesReducer(times, action);

      expect(newTimes).toContain(newTime);
    });
  });
});
