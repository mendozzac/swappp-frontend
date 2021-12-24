import { render, screen } from "@testing-library/react";
import Loading from "./Loading";

describe("Given a Loading component", () => {
  describe("When it is called", () => {
    test("Then it should render an image", () => {
      render(<Loading />);
      const expectedImg = screen.getByAltText("Cargando");

      expect(expectedImg).toBeInTheDocument();
    });
  });
});
