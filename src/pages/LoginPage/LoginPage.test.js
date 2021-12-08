import { screen, render } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import configureStore from "../../redux/store/index";
import LoginPage from "./LoginPage";

describe("Given a LoginPage", () => {
  describe("When it is called", () => {
    test("Then it should render a title", () => {
      const store = configureStore();
      render(
        <Provider store={store}>
          <BrowserRouter>
            <LoginPage />
          </BrowserRouter>
        </Provider>
      );
      const title = screen.getByText("Login");

      expect(title).toBeInTheDocument();
    });
  });
});
