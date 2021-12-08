import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import configureStore from "../../redux/store";
import SignUpSwimmerPage from "./SignUpSwimmerPage";

describe("Given a SignUpSwimmerPage", () => {
  describe("When it is called", () => {
    test("Then it should render a form", () => {
      const store = configureStore();
      render(
        <Provider store={store}>
          <BrowserRouter>
            <SignUpSwimmerPage />
          </BrowserRouter>
        </Provider>
      );
      const title = screen.getByText("Registro 1/2");

      expect(title).toBeInTheDocument();
    });
  });
});
