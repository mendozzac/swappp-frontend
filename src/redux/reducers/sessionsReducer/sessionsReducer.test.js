import { loadSessionsAction } from "../../actions/actionCreators";
import sessionsReducer from "./sessionsReducer";

describe("Given a sessionsreducer", () => {
  describe("When it receives a sessions list", () => {
    test("Then it should return a new sessions list", () => {
      const initialSessionsList = [];
      const sessions = [{}, {}];
      const action = loadSessionsAction(sessions);

      const newSessions = sessionsReducer(initialSessionsList, action);

      expect(newSessions).toEqual(sessions);
    });
  });
});
