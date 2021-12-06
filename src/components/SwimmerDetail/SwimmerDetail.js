import { useNavigate } from "react-router";
import Loading from "../Loading/Loading";
import "./SwimmerDetail.scss";
import path from "../../path/path";
import { useSelector } from "react-redux";
import TimeCard from "../TimeCard/TimeCard";

const SwimmerDetail = ({ swimmer }) => {
  const isCoach = useSelector(({ user }) => user.user.isCoach);
  const navigate = useNavigate();

  const onNavigate = (event) => {
    event.preventDefault();
    navigate(`${path.swimmers}/edit/${swimmer.id}`);
  };

  const onReturn = (event) => {
    event.preventDefault();
    navigate(path.swimmers);
  };

  return swimmer ? (
    <>
      <div className="swimer-data-box">
        <div className="swimmer-data" onClick={onReturn}>
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
          <ul className="time">
            {swimmer.times &&
              swimmer.times.map((time, index) => (
                <TimeCard time={time} key={index} />
              ))}
          </ul>
        </div>
        <div className="button-box">
          {isCoach ? (
            <button className="button" onClick={onNavigate}>
              Editar
            </button>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  ) : (
    <Loading />
  );
};

export default SwimmerDetail;
