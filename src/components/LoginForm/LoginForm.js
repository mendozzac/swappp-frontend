import "./LoginForm.scss";
import { useState } from "react";

const LoginForm = () => {
  const initialUserData = {
    username: "",
    password: "",
  };
  const [userData, setUserData] = useState(initialUserData);
  const [isDisabled, setIsDisabled] = useState(true);

  const checkForm = () => {
    if (userData.username !== "" && userData.password !== "") {
      setIsDisabled(false);
    }
  };

  const onLogin = (event) => {
    event.preventDefault();
  };

  const onChange = (event) => {
    setUserData({
      ...userData,
      [event.target.id]: event.target.value,
    });
    checkForm();
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
