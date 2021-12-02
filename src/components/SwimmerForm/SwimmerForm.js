import "./SwimmerForm.scss";
import { useState } from "react";
import useSwimmers from "../../hooks/useSwimmers";

const SwimmerForm = () => {
  const { createSwimmer } = useSwimmers();

  const initialSwimmerData = {
    name: "",
    surname: "",
    birthdate: "",
    // image: "",
  };

  const [swimmerData, setSwimmerData] = useState(initialSwimmerData);
  const [isDisabled, setIsDisabled] = useState(true);

  const checkForm = () => {
    if (
      swimmerData.name !== "" &&
      swimmerData.surname !== ""
      // swimmerData.birthdate !== ""
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

    const newSwimmer = new swimmerData();
    newSwimmer.append("name", swimmerData.name);
    newSwimmer.append("surname", swimmerData.surname);
    newSwimmer.append("birthdate", swimmerData.birthdate);

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
          <div className="register-form_element birthdate">
            <label htmlFor="birthdate">Fecha de Nacimiento </label>
            <input
              type="date"
              id="birthdate"
              value={swimmerData.birthdate}
              onChange={changeData}
            />
          </div>
          {/* <div className="register-form_element photo">
            <label htmlFor="image">Foto </label>
            <input
              type="file"
              id="image"
              value={swimmerData.image}
              onChange={changeData}
            />
          </div> */}
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
