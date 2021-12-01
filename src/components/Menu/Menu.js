import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./Menu.scss";

const Menu = () => {
  const { isAuthenticated } = useSelector(({ user }) => user);
  const [isActive, setIsActive] = useState(false);

  const onShowMenu = (event) => {
    event.preventDefault();
    isActive ? setIsActive(false) : setIsActive(true);
  };
  return (
    <>
      <div
        onClick={onShowMenu}
        className={`main-header__burger ${isActive ? "active" : ""}`}
      >
        <div></div>
        <div></div>
      </div>
      <div className={`main-menu-container${isActive ? "__active" : ""}`}>
        <div className="theme-icon">
          <img src="/img/luna.png" alt="luna" />
        </div>
        <nav className="main-menu">
          <ul onClick={onShowMenu}>
            {isAuthenticated ? (
              <>
                <li>
                  <Link to="nadadores">Nadadores</Link>
                </li>
                <li>Entrenamientos</li>
                <li>Perfil</li>
                <li>
                  <Link to="registro">Registro</Link>
                </li>
                <li>Quiénes somos</li>
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
