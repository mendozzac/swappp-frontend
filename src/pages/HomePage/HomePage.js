import { useContext } from "react";
import ThemeContext from "../../contexts/ThemeContext";

const HomePage = () => {
  const { darkMode } = useContext(ThemeContext);

  return darkMode ? (
    <img src="/img/swappp-negro.svg" width="80%" alt="logotipo" />
  ) : (
    <img src="/img/swappp-blanco.svg" width="80%" alt="logotipo" />
  );
};

export default HomePage;
