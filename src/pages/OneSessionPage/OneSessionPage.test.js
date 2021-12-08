import { screen, render } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import configureStore from "../../redux/store/index";
import OneSessionPage from "./OneSessionPage";

describe("Given a OneSessionPage", () => {
  describe("When it is called", () => {
    test("Then it should render a title", () => {
      const store = configureStore();
      render(
        <Provider store={store}>
          <BrowserRouter>
            <OneSessionPage />
          </BrowserRouter>
        </Provider>
      );
      const title = screen.getByText("Cargando...");

      expect(title).toBeInTheDocument();
    });
  });
});
