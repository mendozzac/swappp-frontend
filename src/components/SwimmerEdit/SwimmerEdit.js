import { useState } from "react";
import { useNavigate } from "react-router";
import useSwimmer from "../../hooks/useSwimmer";
import useSwimmers from "../../hooks/useSwimmers";
import path from "../../path/path";
import "./SwimmerEdit.scss";

const SwimmerEdit = () => {
  const { updateSwimmer, swimmer } = useSwimmer();
  const { deleteSwimmer } = useSwimmers();

  const navigate = useNavigate();

  const initialSwimmerData = {
    name: swimmer.name || "",
    surname: swimmer.surname || "",
    height: swimmer.height || "",
    weight: swimmer.weight || "",
  };
  const idSwimmer = swimmer.id;
  const [swimmerData, setSwimmerData] = useState(initialSwimmerData);

  const changeData = (event) => {
    setSwimmerData({
      ...swimmerData,
      [event.target.id]: event.target.value,
    });
  };

  const onChange = (event) => {
    event.preventDefault();
    const newSwimmer = {
      name: swimmerData.name,
      surname: swimmerData.surname,
      height: swimmerData.height,
      weight: swimmerData.weight,
      id: idSwimmer,
    };
    updateSwimmer(newSwimmer);
    navigate(`${path.swimmers}/${newSwimmer.id}`);
  };

  const onDelete = (event) => {
    event.preventDefault();
    deleteSwimmer(idSwimmer);
    navigate(path.swimmers);
  };

  return (
    <>
      <div className="container-edit">
        <form
          className="swimer-data-box"
          noValidate
          autoComplete="off"
          onSubmit={onChange}
        >
          <div className="swimmer-data">
            <div className="swimmer-data swimmer-data__principal">
              <img
                className="picture"
                src={swimmer.image}
                width="140px"
                height="140px"
                alt="nadador"
              />
              <div className="swimmer-data__name">
                <label htmlFor="name" />
                <input
                  type="text"
                  id="name"
                  value={swimmerData.name}
                  onChange={changeData}
                />
                <label htmlFor="surname" />
                <input
                  id="surname"
                  value={swimmerData.surname}
                  onChange={changeData}
                />
              </div>
            </div>
            <div className="swimmer-data swimmer-data__morphologic">
              <label htmlFor="height">Altura: </label>
              <input
                id="height"
                value={swimmerData.height}
                onChange={changeData}
              />

              <label htmlFor="weight">Peso: </label>
              <input
                id="weight"
                value={swimmerData.weight}
                onChange={changeData}
              />
            </div>
          </div>
          <div className="button-box">
            <button className="button button-edit">Enviar</button>
            <button className="button button-edit" onClick={onDelete}>
              Baja
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default SwimmerEdit;
