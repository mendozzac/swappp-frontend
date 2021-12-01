import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import configureStore from "../../redux/store";
import LoginForm from "./LoginForm";

describe("Given a LoginForm component", () => {
  describe("When it is called", () => {
    test("Then it should render a form with an username input", () => {
      const store = configureStore();
      render(
        <Provider store={store}>
          <BrowserRouter>
            <LoginForm />
          </BrowserRouter>
        </Provider>
      );
      const form = screen.getByLabelText("Nombre de Usuario");

      expect(form).toBeInTheDocument();
    });
  });
});
