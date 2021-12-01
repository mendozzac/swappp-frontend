import "./LoginForm.scss";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import useUser from "../../hooks/useUser";
import { useNavigate } from "react-router";
import path from "../../path/path";

const LoginForm = () => {
  const initialUserData = {
    username: "",
    password: "",
  };

  const [userData, setUserData] = useState(initialUserData);
  const isAuth = useSelector(({ user }) => user.isAuthenticated);
  const { loginUser } = useUser();
  const [isDisabled, setIsDisabled] = useState(true);
  const navigate = useNavigate();

  const checkForm = () => {
    if (userData.username !== "" && userData.password !== "") {
      setIsDisabled(false);
    }
  };

  const onChange = (event) => {
    setUserData({
      ...userData,
      [event.target.id]: event.target.value,
    });
    checkForm();
  };

  useEffect(() => {
    if (isAuth) {
      navigate(path.swimmers);
    }
  });

  const onLogin = (event) => {
    event.preventDefault();
    loginUser(userData);
  };

  return (
    <div className="component-login">
      <h1 className="title">Login</h1>
      <div className="login-box">
        <form
          className="login-form"
          noValidate
          autoComplete="off"
          onSubmit={onLogin}
        >
          <div className="login-form_element">
            <label htmlFor="username">Nombre de Usuario </label>
            <input
              type="text"
              id="username"
              value={userData.username}
              onChange={onChange}
            />
          </div>
          <div className="login-form_element">
            <label htmlFor="password">Contraseña </label>
            <input
              type="password"
              id="password"
              value={userData.password}
              onChange={onChange}
            />
          </div>
          <button
            className={
              isDisabled
                ? "register-form_button"
                : "register-form_button-active"
            }
            disabled={isDisabled}
          >
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
