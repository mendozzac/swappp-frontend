import { useContext } from "react";
import ThemeContext from "../../contexts/ThemeContext";

const ThemeSwitcher = () => {
  const { darkMode, toggleMode } = useContext(ThemeContext);

  return (
    <span className="theme-switcher" onClick={toggleMode}>
      {darkMode ? (
        <img src="/img/sol.png" alt="sol" width="37px" height="37px" />
      ) : (
        <img src="/img/luna.png" alt="luna" width="37px" height="37px" />
      )}
    </span>
  );
};

export default ThemeSwitcher;
