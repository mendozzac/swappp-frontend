import { render, screen } from "@testing-library/react";
import LoginForm from "./LoginForm";

describe("Given a LoginForm component", () => {
  describe("When it is called", () => {
    test("Then it should render a form with an username input", () => {
      render(<LoginForm />);
      const form = screen.getByLabelText("Nombre de Usuario");

      expect(form).toBeInTheDocument();
    });
  });
});
