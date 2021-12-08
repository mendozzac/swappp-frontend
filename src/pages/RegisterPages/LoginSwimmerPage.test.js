import { screen, render } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import configureStore from "../../redux/store/index";
import LoginSwimmerPage from "./LoginSwimmerPage";

describe("Given a LoginSwimmerPage", () => {
  describe("When it is called", () => {
    test("Then it should render a loading", () => {
      const store = configureStore();
      render(
        <Provider store={store}>
          <BrowserRouter>
            <LoginSwimmerPage />
          </BrowserRouter>
        </Provider>
      );
      const title = screen.getByText("Cargando...");

      expect(title).toBeInTheDocument();
    });
  });
});
