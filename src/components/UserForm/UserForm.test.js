import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import UserForm from "./UserForm";
import configureStore from "../../redux/store/index";

describe("Given a UserForm component", () => {
  describe("When it is rendered", () => {
    test("Ten it should render a button", () => {
      const store = configureStore();
      render(
        <Provider store={store}>
          <BrowserRouter>
            <UserForm></UserForm>
          </BrowserRouter>
        </Provider>
      );
      const button = screen.getByText("Enviar");

      expect(button).toBeInTheDocument();
    });
  });
});
