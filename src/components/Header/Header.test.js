import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import configureStore from "../../redux/store";
import Header from "./Header";

describe("Given a Header component", () => {
  describe("When it renders", () => {
    test("Then it should render a login icon", () => {
      const store = configureStore();
      render(
        <Provider store={store}>
          <BrowserRouter>
            <Header />
          </BrowserRouter>
        </Provider>
      );
      const header = screen.getByAltText("login icon");

      expect(header).toBeInTheDocument();
    });
  });
});
