import { screen, render } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import configureStore from "../../redux/store/index";
import OneSwimmerPage from "./OneSwimmerPage";

describe("Given a OneSwimmerPage", () => {
  describe("When it is called", () => {
    test("Then it should render a title", () => {
      const store = configureStore();
      render(
        <Provider store={store}>
          <BrowserRouter>
            <OneSwimmerPage />
          </BrowserRouter>
        </Provider>
      );
      const title = screen.getByAltText("nadador");

      expect(title).toBeInTheDocument();
    });
  });
});
