import { screen, render } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import configureStore from "../../redux/store/index";
import SwimmerEditPage from "./SwimmerEditPage";

describe("Given a SwimmerEditPage", () => {
  describe("When it is called", () => {
    test("Then it should render a form", () => {
      const store = configureStore();
      render(
        <Provider store={store}>
          <BrowserRouter>
            <SwimmerEditPage />
          </BrowserRouter>
        </Provider>
      );
      const title = screen.getByAltText("nadador");

      expect(title).toBeInTheDocument();
    });
  });
});
