import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Menu from "./Menu";

describe("Given a Menu component", () => {
  describe("When it is called", () => {
    test("Then it should render a menu with luna icon", () => {
      render(
        <BrowserRouter>
          <Menu />
        </BrowserRouter>
      );
      const menu = screen.getByAltText("luna");

      expect(menu).toBeInTheDocument();
    });
  });
});
