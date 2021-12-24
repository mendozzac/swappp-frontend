import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import configureStore from "../../redux/store";
import SessionDetail from "./SessionDetail";

describe("Given a SessionDetail component", () => {
  describe("When it renders", () => {
    test("Then it should render an array with a title", () => {
      const store = configureStore();
      render(
        <Provider store={store}>
          <BrowserRouter>
            <SessionDetail />
          </BrowserRouter>
        </Provider>
      );
      const title = screen.getByText("Cargando...");

      expect(title).toBeInTheDocument();
    });
  });
});
