import { useNavigate } from "react-router";
import Loading from "../Loading/Loading";
import "./SwimmerDetail.scss";
import path from "../../path/path";

const SwimmerDetail = ({ swimmer }) => {
  const navigate = useNavigate();

  const onNavigate = (event) => {
    event.preventDefault();
    navigate(`${path.swimmers}/edit/${swimmer.id}`);
  };

  return swimmer ? (
    <>
      <div className="swimer-data-box">
        <div className="swimmer-data">
          <div className="swimmer-data swimmer-data__principal">
            <img
              className="picture"
              src={swimmer.image}
              width="140px"
              height="140px"
              alt={swimmer.name}
            />
            <div className="swimmer-data__name">
              <p className="name">{swimmer.name}</p>
              <p className="surname">{swimmer.surname}</p>
              <p className="year"></p>
            </div>
          </div>
          <div className="swimmer-data swimmer-data__morphologic">
            <p className="height">
              Altura: <span>{swimmer.height}cm</span>
            </p>
            <p className="weight">
              Peso: <span>{swimmer.weight}kg</span>
            </p>
            <p className="times">Marcas: </p>
          </div>
        </div>
        <div className="swimmer-times">
          <ul>
            <li className="time"></li>
          </ul>
        </div>
        <button className="button" onClick={onNavigate}>
          Edit
        </button>
      </div>
    </>
  ) : (
    <Loading />
  );
};

export default SwimmerDetail;
