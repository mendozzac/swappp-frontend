import { screen, render } from "@testing-library/react";
import { Provider } from "react-redux";
import LogoutPage from "./LogoutPage";
import configureStore from "../../redux/store/index";
import { BrowserRouter } from "react-router-dom";

describe("Given a LogoutPage", () => {
  describe("When it renders", () => {
    test("Then it should render a button", () => {
      const store = configureStore();
      render(
        <Provider store={store}>
          <BrowserRouter>
            <LogoutPage />
          </BrowserRouter>
        </Provider>
      );
      const button = screen.getByRole("button", "Sí");

      expect(button).toBeInTheDocument();
    });
  });
});
