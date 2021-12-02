import { useContext } from "react";
import ThemeContext from "../../contexts/ThemeContext";

const ThemeSwitcher = () => {
  const { darkMode, toggleMode } = useContext(ThemeContext);

  return (
    <span className="theme-switcher" onClick={toggleMode}>
      {darkMode ? (
        <img src="/img/sol.png" alt="sol" />
      ) : (
        <img src="/img/luna.png" alt="luna" />
      )}
    </span>
  );
};

export default ThemeSwitcher;
