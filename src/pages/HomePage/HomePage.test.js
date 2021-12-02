import { render, screen } from "@testing-library/react";
import ThemeContextProvider from "../../contexts/ThemeContextProvider";
import HomePage from "./HomePage";

describe("Given a HomePage", () => {
  describe("When it renders", () => {
    test("Then it should render an image", () => {
      render(
        <ThemeContextProvider>
          <HomePage />
        </ThemeContextProvider>
      );
      const image = screen.getByAltText("logotipo");

      expect(image).toBeInTheDocument();
    });
  });
});
