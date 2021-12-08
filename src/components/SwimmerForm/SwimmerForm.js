import "./SwimmerForm.scss";
import { useState } from "react";
import useSwimmers from "../../hooks/useSwimmers";
import { useNavigate, useParams } from "react-router";
import path from "../../path/path";

const SwimmerForm = () => {
  const { createSwimmer } = useSwimmers();
  const { idUser } = useParams();
  const navigate = useNavigate();

  const initialSwimmerData = {
    name: "",
    surname: "",
    image: "",
    user: idUser,
  };

  const [formData, setFormData] = useState(initialSwimmerData);
  const [isDisabled, setIsDisabled] = useState(true);

  const checkForm = () => {
    if (formData.name !== "" && formData.surname !== "") {
      setIsDisabled(false);
    }
  };

  const changeData = (event) => {
    setFormData({
      ...formData,
      [event.target.id]:
        event.target.type === "file"
          ? event.target.files[0]
          : event.target.value,
    });

    checkForm();
  };

  const resetForm = () => {
    setFormData(initialSwimmerData);
    setIsDisabled(true);
  };

  const onCreateSwimmer = (event) => {
    event.preventDefault();
    const newSwimmer = new FormData();
    newSwimmer.append("name", formData.name);
    newSwimmer.append("surname", formData.surname);
    newSwimmer.append("image", formData.photo);

    createSwimmer(idUser, newSwimmer);
    resetForm();
    navigate(path.swimmers);
  };

  return (
    <div className="component-form">
      <h1 className="title">Registro 2/2</h1>
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
              value={formData.name}
              onChange={changeData}
            />
          </div>
          <div className="register-form_element">
            <label htmlFor="surname">Apellido </label>
            <input
              type="text"
              id="surname"
              value={formData.surname}
              onChange={changeData}
            />
          </div>
          <div className="register-form_element photo">
            <label htmlFor="photo">Foto </label>
            <input
              className="photo-element"
              type="file"
              id="photo"
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
