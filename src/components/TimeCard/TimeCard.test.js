import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { MemoryRouter } from "react-router-dom";
import ReactTestRenderer from "react-test-renderer";
import TimeCard from "./TimeCard";

describe("Given a TimeCard component", () => {
  describe("When it receives time information", () => {
    test("Then it should render a card with the information of the time", () => {
      const time = { meters: "200", style: "Braza", time: "2:16.02" };

      render(
        <BrowserRouter>
          <TimeCard time={time} />
        </BrowserRouter>
      );
      const newTime = screen.getByText("Braza");

      expect(newTime).toBeInTheDocument();
    });
  });
  describe("When it receives a time", () => {
    test("Then it should render a card with the time", () => {
      const newTime = {};

      const timeCard = ReactTestRenderer.create(
        <MemoryRouter>
          <TimeCard time={newTime} />
        </MemoryRouter>
      );

      expect(timeCard.toJSON()).toMatchSnapshot();
    });
  });
});
