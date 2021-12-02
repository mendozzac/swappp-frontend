import { useNavigate, useParams } from "react-router";
import useSwimmers from "../../hooks/useSwimmers";
import Loading from "../Loading/Loading";
import "./SwimmerDetail.scss";
import path from "../../path/path";

const SwimmerDetail = ({ swimmer }) => {
  const { deleteSwimmer } = useSwimmers();
  const { idSwimmer } = useParams();
  const navigate = useNavigate();

  const onDelete = (event) => {
    event.preventDefault();
    deleteSwimmer(idSwimmer);
    navigate(path.swimmers);
  };
  return swimmer ? (
    <>
      <div className="swimer-data-box" onClick={onDelete}>
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
      </div>
    </>
  ) : (
    <Loading />
  );
};

export default SwimmerDetail;
