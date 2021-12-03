import { screen, render } from "@testing-library/react";
import { Provider } from "react-redux";
import SwimmersList from "../../components/SwimmersList/SwimmersList";
import configureStore from "../../redux/store/index";

describe("Given a SwimmerPage", () => {
  describe("When it renders", () => {
    test("Then it should render a title", () => {
      const store = configureStore();
      render(
        <Provider store={store}>
          <SwimmersList />
        </Provider>
      );
      const title = screen.getByText("Cargando...");

      expect(title).toBeInTheDocument();
    });
  });
});
