import { render, screen } from "@testing-library/react";
import SwimmerCard from "./SwimmerCard";
import { BrowserRouter } from "react-router-dom";

describe("Given a SwimmerCard component", () => {
  describe("When it receives swimmer information", () => {
    test("Then it should render a card with the information of the swimmer", () => {
      const swimmer = {
        name: "Geofrey",
        surname: "Campbell",
        birthdate: "11/08/90",
        height: 190,
        weight: 80,
        times: {
          distance: 200,
          style: "Espalda",
          date: "22/09/19",
          time: "1:56.09",
          pool: 50,
        },
      };

      render(
        <BrowserRouter>
          <SwimmerCard swimmer={swimmer} />
        </BrowserRouter>
      );
      const newSwimmer = screen.getByText("Geofrey");

      expect(newSwimmer).toBeInTheDocument();
    });
  });
});
