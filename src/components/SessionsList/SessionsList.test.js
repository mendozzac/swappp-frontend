import { render, screen, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import { server } from "../../mocks/server";
import configureStore from "../../redux/store/index";
import SessionsList from "./SessionsList";

beforeAll(() => {
  server.listen();
});

afterEach(() => {
  server.resetHandlers();
});

afterAll(() => {
  server.close();
});

describe("Given a SessionsList component", () => {
  describe("When it is called", () => {
    test("Then it should render a list", () => {
      const store = configureStore();

      render(
        <Provider store={store}>
          <SessionsList />
        </Provider>
      );
    });
  });
  describe("When ir is rendered", () => {
    test("Then it should show the dates of the sessions", async () => {
      const store = configureStore();
      render(
        <Provider store={store}>
          <MemoryRouter>
            <SessionsList />
          </MemoryRouter>
        </Provider>
      );
      const dates = await screen.findByAltText("Cargando");
      await waitFor(() => {
        expect(dates).toBeInTheDocument();
      });
    });
  });
});
