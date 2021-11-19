import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "../../redux/store/index";
import SwimmersList from "./SwimmersList";

describe("Given a SwimmersList component", () => {
  describe("When it is called", () => {
    test("Then it should render a list", () => {
      const store = configureStore();

      render(
        <Provider store={store}>
          <SwimmersList />
        </Provider>
      );
    });
  });
});
