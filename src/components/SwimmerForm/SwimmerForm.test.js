import { render, screen } from "@testing-library/react";
import SwimmerForm from "./SwimmerForm";
import configureStore from "../../redux/store/index";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

describe("Given a SwimmerForm component", () => {
  describe("When it is called", () => {
    test("Then it should render a form with a name input", () => {
      const store = configureStore();
      render(
        <Provider store={store}>
          <BrowserRouter>
            <SwimmerForm />
          </BrowserRouter>
        </Provider>
      );
      const form = screen.getByLabelText("Nombre");

      expect(form).toBeInTheDocument();
    });
  });
});
