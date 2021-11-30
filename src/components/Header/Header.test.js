import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Header from "./Header";

describe("Given a Header component", () => {
  describe("When it renders", () => {
    test("Then it should render a login icon", () => {
      render(
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      );
      const header = screen.getByAltText("login icono");

      expect(header).toBeInTheDocument();
    });
  });
});
