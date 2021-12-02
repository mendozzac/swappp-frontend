import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import ThemeContextProvider from "../../contexts/ThemeContextProvider";
import configureStore from "../../redux/store";
import Menu from "./Menu";

describe("Given a Menu component", () => {
  describe("When it is called", () => {
    test("Then it should render a menu with luna icon", () => {
      const store = configureStore();
      render(
        <ThemeContextProvider>
          <Provider store={store}>
            <BrowserRouter>
              <Menu />
            </BrowserRouter>
          </Provider>
        </ThemeContextProvider>
      );
      const menu = screen.getByAltText("luna");

      expect(menu).toBeInTheDocument();
    });
  });
});
