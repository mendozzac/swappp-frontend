import { useState } from "react";
import { useNavigate } from "react-router";
import useUser from "../../hooks/useUser";
import path from "../../path/path";

const UserForm = () => {
  const { createUser } = useUser();
  const navigate = useNavigate();

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

  const changeData = (event) => {
    setUserData({
      ...userData,
      [event.target.id]: event.target.value,
    });
    checkForm();
  };

  const onCreateUser = (event) => {
    event.preventDefault();
    const newUser = {
      username: userData.username,
      password: userData.password,
      isCoach: false,
    };
    createUser(newUser);
    navigate(path.registerUser);
  };

  return (
    <div className="component-form">
      <h1 className="title">Registro</h1>
      <div className="register-box">
        <form
          className="register-form"
          noValidate
          autoComplete="off"
          onSubmit={onCreateUser}
        >
          <div className="login-form_element">
            <label htmlFor="username">Nombre de Usuario </label>
            <input
              type="text"
              id="username"
              value={userData.username}
              onChange={changeData}
            />
          </div>
          <div className="login-form_element">
            <label htmlFor="password">Contraseña </label>
            <input
              type="password"
              id="password"
              value={userData.password}
              onChange={changeData}
            />
          </div>
          <div>
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
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserForm;
