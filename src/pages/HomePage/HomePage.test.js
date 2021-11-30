import { render, screen } from "@testing-library/react";
import HomePage from "./HomePage";

describe("Given a HomePage", () => {
  describe("When it renders", () => {
    test("Then it should render a image", () => {
      render(<HomePage />);
      const image = screen.getByAltText("logotipo");

      expect(image).toBeInTheDocument();
    });
  });
});
