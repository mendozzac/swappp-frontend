import { useContext, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ThemeContext from "../../contexts/ThemeContext";
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher";
import "./Menu.scss";

const Menu = () => {
  const { darkMode } = useContext(ThemeContext);
  const { isAuthenticated } = useSelector(({ user }) => user);
  const isCoach = useSelector(({ user }) => user?.user?.isCoach);
  const [isActive, setIsActive] = useState(false);

  const onShowMenu = (event) => {
    event.preventDefault();
    isActive ? setIsActive(false) : setIsActive(true);
  };
  return (
    <>
      <div
        onClick={onShowMenu}
        className={`main-header__burger ${isActive ? "active" : ""}${
          darkMode ? "dark" : ""
        }`}
      >
        <div></div>
        <div></div>
      </div>
      <div className={`main-menu-container${isActive ? "__active" : ""}`}>
        <div className="theme-icon">
          <ThemeSwitcher className="theme-icon__img" />
        </div>
        <nav className="main-menu">
          <ul onClick={onShowMenu}>
            {isAuthenticated ? (
              <>
                <li>
                  <Link to="nadadores">Nadadores</Link>
                </li>
                <li>
                  <Link to="21-22">Entrenamientos</Link>
                </li>
                <li>Perfil</li>
                <li>{isCoach ? <Link to="registro">Registro</Link> : ""}</li>
                <li>Contacto</li>
              </>
            ) : (
              <>
                <li>Quiénes somos</li>
                <li>Contacto</li>
              </>
            )}
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Menu;
