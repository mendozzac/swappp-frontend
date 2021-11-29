import "./SwimmerForm.scss";
import { useState } from "react";
import useSwimmers from "../../hooks/useSwimmers";

const SwimmerForm = () => {
  const { createSwimmer } = useSwimmers();

  const initialSwimmerData = {
    name: "",
    surname: "",
    email: "",
    username: "",
    password: "",
  };

  const [swimmerData, setSwimmerData] = useState(initialSwimmerData);
  const [isDisabled, setIsDisabled] = useState(true);

  const checkForm = () => {
    if (
      swimmerData.name !== "" &&
      swimmerData.surname !== "" &&
      swimmerData.email !== "" &&
      swimmerData.username !== "" &&
      swimmerData.password !== ""
    ) {
      setIsDisabled(false);
    }
  };

  const changeData = (event) => {
    setSwimmerData({
      ...swimmerData,
      [event.target.id]: event.target.value,
    });
    checkForm();
  };

  const resetForm = () => {
    setSwimmerData(initialSwimmerData);
    setIsDisabled(true);
  };

  const onCreateSwimmer = (event) => {
    event.preventDefault();
    const newSwimmer = {
      name: swimmerData.name,
      surname: swimmerData.surname,
      email: swimmerData.email,
      username: swimmerData.username,
      password: swimmerData.password,
    };
    createSwimmer(newSwimmer);
    resetForm();
  };

  return (
    <div className="component-form">
      <h1 className="title">Registro</h1>
      <div className="form-box">
        <form
          className="register-form"
          noValidate
          autoComplete="off"
          onSubmit={onCreateSwimmer}
        >
          <div className="register-form_element">
            <label htmlFor="name">Nombre </label>
            <input
              type="text"
              id="name"
              value={swimmerData.name}
              onChange={changeData}
            />
          </div>
          <div className="register-form_element">
            <label htmlFor="surname">Apellido </label>
            <input
              type="text"
              id="surname"
              value={swimmerData.surname}
              onChange={changeData}
            />
          </div>
          <div className="register-form_element">
            <label htmlFor="email">Email </label>
            <input
              type="email"
              id="email"
              value={swimmerData.email}
              onChange={changeData}
            />
          </div>
          <div className="register-form_element">
            <label htmlFor="username">Nombre de usuario </label>
            <input
              type="text"
              id="username"
              value={swimmerData.username}
              onChange={changeData}
            />
          </div>
          <div className="register-form_element">
            <label htmlFor="password">Contraseña </label>
            <input
              type="password"
              id="password"
              value={swimmerData.password}
              onChange={changeData}
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

export default SwimmerForm;
