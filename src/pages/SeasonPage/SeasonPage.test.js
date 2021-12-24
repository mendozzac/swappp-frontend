import { screen, render } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import configureStore from "../../redux/store/index";
import SeasonPage from "./SeasonPage";

describe("Given a RSeasonPage", () => {
  describe("When it is called", () => {
    test("Then it should render a title", () => {
      const store = configureStore();
      render(
        <Provider store={store}>
          <BrowserRouter>
            <SeasonPage />
          </BrowserRouter>
        </Provider>
      );
      const title = screen.getByText("22/11 -");

      expect(title).toBeInTheDocument();
    });
  });
});
