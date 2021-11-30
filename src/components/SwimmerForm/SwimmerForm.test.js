import { render, screen } from "@testing-library/react";
import SwimmerForm from "./SwimmerForm";
import configureStore from "../../redux/store/index";
import { Provider } from "react-redux";

describe("Given a SwimmerForm component", () => {
  describe("When it is called", () => {
    test("Then it should render a form with a name input", () => {
      const store = configureStore();
      render(
        <Provider store={store}>
          <SwimmerForm />
        </Provider>
      );
      const form = screen.getByLabelText("Nombre");

      expect(form).toBeInTheDocument();
    });
  });
});
