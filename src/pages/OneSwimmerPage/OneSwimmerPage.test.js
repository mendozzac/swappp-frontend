import { screen, render } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import SwimmerDetail from "../../components/SwimmerDetail/SwimmerDetail";
import configureStore from "../../redux/store/index";

describe("Given a OneSwimmerPage", () => {
  describe("When it renders", () => {
    test("Then it should render a SwimmerDetail component", () => {
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
      const store = configureStore();
      render(
        <Provider store={store}>
          <BrowserRouter>
            <SwimmerDetail swimmer={swimmer} />
          </BrowserRouter>
        </Provider>
      );
      const detail = screen.getByText("Caroline");

      expect(detail).toBeInTheDocument();
    });
  });
});
