import { useNavigate } from "react-router";
import useUser from "../../hooks/useUser";
import path from "../../path/path";
import "./LogoutPage.scss";

const LogoutPage = () => {
  const { logoutUser } = useUser();
  const navigate = useNavigate();

  const onLogout = (event) => {
    event.preventDefault();
    logoutUser();
    navigate(path.home);
  };

  return (
    <>
      <div className="logout-box">
        <h1 className="title">Hasta pronto</h1>
        <p>¿Seguro que quieres salir?</p>

        <button onClick={onLogout} className="button">
          Sí
        </button>
      </div>
    </>
  );
};

export default LogoutPage;
