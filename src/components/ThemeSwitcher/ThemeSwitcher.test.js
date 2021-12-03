import { screen, render } from "@testing-library/react";
import ThemeContext from "../../contexts/ThemeContext";
import ThemeSwitcher from "./ThemeSwitcher";

describe("Given a ThemeSwitcher component", () => {
  describe("When it is renders", () => {
    test("Then it should render an image", () => {
      const darkMode = true;
      const toggleMode = jest.fn();
      render(
        <ThemeContext.Provider value={{ darkMode, toggleMode }}>
          <ThemeSwitcher />
        </ThemeContext.Provider>
      );
      const image = screen.getByRole("img");

      expect(image).toBeInTheDocument();
    });
  });
});
