import { useState } from "react";
import "./Menu.scss";

const Menu = () => {
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
        <nav className="main-menu">
          <ul>
            <li>Quiénes somos</li>
            <li>Contacto</li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Menu;
