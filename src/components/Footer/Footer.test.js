import Footer from "./Footer";
import { render, screen } from "@testing-library/react";

describe("Given a Footer component", () => {
  describe("When it renders", () => {
    test("Then it should render 'design by sr.mendozzac'", () => {
      const text = "design by sr.mendozzac";

      render(<Footer />);
      const footer = screen.getByText(text);

      expect(footer).toBeInTheDocument();
    });
  });
});
