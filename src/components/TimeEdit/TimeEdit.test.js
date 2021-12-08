import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import configureStore from "../../redux/store/index";
import TimeEdit from "./TimeEdit";

describe("Given a TimeEdit component", () => {
  describe("When it is rendered", () => {
    test("Ten it should render a button", () => {
      const store = configureStore();
      render(
        <Provider store={store}>
          <BrowserRouter>
            <TimeEdit />
          </BrowserRouter>
        </Provider>
      );
      const button = screen.getByText("Añadir");

      expect(button).toBeInTheDocument();
    });
  });
});
