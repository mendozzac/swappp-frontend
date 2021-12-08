import { screen, render } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import RegisterSwimmerPage from "./RegisterSwimmerPage";
import configureStore from "../../redux/store/index";

describe("Given a RegisterPage", () => {
  describe("When it is called", () => {
    test("Then it should render a form", () => {
      const store = configureStore();
      render(
        <Provider store={store}>
          <BrowserRouter>
            <RegisterSwimmerPage />
          </BrowserRouter>
        </Provider>
      );
      const title = screen.getByText("Registro 2/2");

      expect(title).toBeInTheDocument();
    });
  });
});
