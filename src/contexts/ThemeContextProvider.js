import { useState } from "react";
import ThemeContext from "./ThemeContext";

const ThemeContextProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);
  const toggleMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    <ThemeContext.Provider value={{ darkMode, toggleMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
