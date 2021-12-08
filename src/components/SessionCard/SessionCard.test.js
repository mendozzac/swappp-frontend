import { screen, render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import SessionCard from "./SessionCard";
import { MemoryRouter } from "react-router-dom";
import ReactTestRenderer from "react-test-renderer";

describe("Given a SessionCard component", () => {
  describe("When it is called", () => {
    test("Then it should render a card", () => {
      const session = { day: "10/10/21", exercises: [] };
      render(
        <BrowserRouter>
          <SessionCard session={session} />
        </BrowserRouter>
      );
      const newSession = screen.getByText("10/10/21");

      expect(newSession).toBeInTheDocument();
    });
  });
  describe("When it receives a session", () => {
    test("Then it should render a card with the session", () => {
      const newSession = { day: "10/10/21", exercises: [] };

      const sessionCard = ReactTestRenderer.create(
        <MemoryRouter>
          <SessionCard session={newSession} />
        </MemoryRouter>
      );

      expect(sessionCard.toJSON()).toMatchSnapshot();
    });
  });
});
