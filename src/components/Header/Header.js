import { Link } from "react-router-dom";
import Menu from "../Menu/Menu";
import "./Header.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="menu">
          <Menu />
        </div>
        <div className="isotipo-box">
          <span className="isotipo">
            <Link to="/">Swappp</Link>
          </span>
        </div>
        <div className="login">
          <Link className="login" to="login">
            <img
              src="/img/login-ico.png"
              width="37px"
              height="37px"
              alt="login icono"
            />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
