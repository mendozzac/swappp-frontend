import {
  createSwimmerAction,
  deleteSwimmerAction,
  loadSwimmersAction,
} from "../../actions/actionCreators";
import swimmersReducer from "./swimmersReducer";

const swimmersList = [
  {
    name: "Geofrey",
    surname: "Campbell",
    birthdate: "11/08/90",
    height: 190,
    weight: 80,
    times: {
      distance: 200,
      style: "Espalda",
      date: "22/09/19",
      time: "1:56.09",
      pool: 50,
    },
  },
  {
    name: "Kevin",
    surname: "Andrew",
    birthdate: "27/04/93",
    height: 196,
    weight: 85,
    times: {
      distance: 100,
      style: "Mariposa",
      date: "20/03/20",
      time: "52.09",
      pool: 50,
    },
  },
];

describe("Given a swimmerReducer reducer", () => {
  describe("When it receives a swimmers list and a load action", () => {
    test("Then it should return a new swimmers list", () => {
      const initialSwimmersList = [];

      const action = loadSwimmersAction(swimmersList);

      const newSwimmersList = swimmersReducer(initialSwimmersList, action);

      expect(newSwimmersList).toEqual(swimmersList);
    });
  });
  describe("When it receives an empty swimmers list", () => {
    test("Then it should return the same empty list", () => {
      const initialSwimmersList = [];
      const action = { type: "" };

      const newSwimmersList = swimmersReducer(initialSwimmersList, action);

      expect(newSwimmersList).toEqual(initialSwimmersList);
    });
  });
  describe("When it receives an action deleteSwimmer", () => {
    test("Then it should return a new swimmers array without the newSwimmer", () => {
      const swimmer = {
        id: "6185993022dd92661d3cfca6",
        name: "Kevin",
        surname: "Andrew",
        birthdate: "27/04/93",
        height: 196,
        weight: 85,
        times: {
          distance: 100,
          style: "Mariposa",
          date: "20/03/20",
          time: "52.09",
          pool: 50,
        },
      };
      const action = deleteSwimmerAction(swimmer.id);
      const newSwimmers = swimmersReducer(swimmersList, action);

      expect(newSwimmers).not.toContain(swimmer);
    });
  });
  describe("When it receives an action unexpected and a swimmers array", () => {
    test("Then it should return a new swimmer array", () => {
      const action = { type: "loQueSea" };
      const newSwimmers = swimmersReducer(swimmersList, action);

      expect(newSwimmers).toEqual(swimmersList);
    });
  });
  describe("When it receives an action createSwimmer", () => {
    test("Then it should return a new swimmers array with the new swimmer include", () => {
      const swimmer = {
        name: "Geofrey",
        surname: "Campbell",
        birthdate: "11/08/90",
        height: 190,
        weight: 80,
        times: {
          distance: 200,
          style: "Espalda",
          date: "22/09/19",
          time: "1:56.09",
          pool: 50,
        },
      };
      const action = createSwimmerAction(swimmer);
      const newSwimmers = swimmersReducer(swimmersList, action);

      expect(newSwimmers).toContain(swimmer);
    });
  });
});
