import { useState } from "react";
import "./Menu.scss";

const Menu = () => {
  const [isActive, setIsActive] = useState(false);

  const onSubmit = (event) => {
    event.preventDefault();
    setIsActive();
  };
  return (
    <>
      <div
        onSubmit={onSubmit}
        className={`main-header__burger${isActive ? "active" : ""}`}
      >
        <div></div>
        <div></div>
      </div>
      <div className="main-menu-container">
        <nav className="main-menu">
          <ul>
            <li>Link link 1</li>
            <li>Link link 2</li>
            <li>Link link 3</li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Menu;
