import { render, screen, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import { server } from "../../mocks/server";
import configureStore from "../../redux/store/index";
import SwimmersList from "./SwimmersList";

beforeAll(() => {
  server.listen();
});

afterEach(() => {
  server.resetHandlers();
});

afterAll(() => {
  server.close();
});

describe("Given a SwimmersList component", () => {
  describe("When it is called", () => {
    test("Then it should render a list", () => {
      const store = configureStore();

      render(
        <Provider store={store}>
          <SwimmersList />
        </Provider>
      );
    });
  });
});

describe("Given a SwimmerList component", () => {
  describe("When it is rendered", () => {
    test("Then it should show the names of the swimmers", async () => {
      const store = configureStore();
      render(
        <Provider store={store}>
          <MemoryRouter>
            <SwimmersList />
          </MemoryRouter>
        </Provider>
      );
      const name = await screen.findByAltText("Cargando");
      await waitFor(() => {
        expect(name).toBeInTheDocument();
      });
    });
  });
});
