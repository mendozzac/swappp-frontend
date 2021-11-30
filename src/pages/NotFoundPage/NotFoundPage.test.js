import { render, screen } from "@testing-library/react";
import NotFoundPage from "./NotFoundPage";

describe("Given a NotFoundPage", () => {
  describe("When it renders", () => {
    test("Then it should render '404 Not Found'", () => {
      const text = "404 Not Found";

      render(<NotFoundPage />);
      const notFound = screen.getByText(text);

      expect(notFound).toBeInTheDocument();
    });
  });
});
