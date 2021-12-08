import { screen, render } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "../src/redux/store/index";
import App from "./App";
import ThemeContextProvider from "./contexts/ThemeContextProvider";

describe("Given an App component", () => {
  describe("When it is called", () => {
    test("Then it should render a form", () => {
      const store = configureStore();
      render(
        <ThemeContextProvider>
          <Provider store={store}>
            <App />
          </Provider>
        </ThemeContextProvider>
      );
      const title = screen.getByText("Swappp");

      expect(title).toBeInTheDocument();
    });
  });
});
