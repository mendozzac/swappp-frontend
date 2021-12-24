import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import configureStore from "../../redux/store";
import SwimmerDetail from "./SwimmerDetail";

describe("Given a SwimmerDetail component", () => {
  describe("When it renders", () => {
    test("Then it should render an array with a title", () => {
      const store = configureStore();
      render(
        <Provider store={store}>
          <BrowserRouter>
            <SwimmerDetail />
          </BrowserRouter>
        </Provider>
      );
      const title = screen.getByText("Cargando...");

      expect(title).toBeInTheDocument();
    });
  });
});
