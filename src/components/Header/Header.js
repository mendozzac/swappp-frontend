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
          <span className="isotipo">Swappp</span>
        </div>
        <div className="login"></div>
      </div>
    </header>
  );
};

export default Header;
