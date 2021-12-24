import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Menu from "../Menu/Menu";
import "./Header.scss";

const Header = () => {
  const { isAuthenticated } = useSelector(({ user }) => user);

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
          {isAuthenticated ? (
            <Link className="login" to="/logout">
              <img
                src="/img/nadador.webp"
                width="37px"
                height="37px"
                alt="logout icon"
              />
            </Link>
          ) : (
            <Link className="login" to="login">
              <img
                src="/img/login-ico.webp"
                width="37px"
                height="37px"
                alt="login icon"
              />
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
