import { screen, render } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "../../redux/store/index";
import SwimmersPage from "./SwimmersPage";

describe("Given a SwimmersPage", () => {
  describe("When it renders", () => {
    test("Then it should render a title", () => {
      const store = configureStore();
      render(
        <Provider store={store}>
          <SwimmersPage />
        </Provider>
      );
      const title = screen.getByText("Cargando...");

      expect(title).toBeInTheDocument();
    });
  });
});
