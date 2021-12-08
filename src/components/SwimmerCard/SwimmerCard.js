import "./SwimmerCard.scss";
import { useNavigate } from "react-router";
import path from "../../path/path";

const SwimmerCard = ({ swimmer }) => {
  const navigate = useNavigate();

  const onSwimmer = (swimmer) => {
    navigate(`${path.swimmers}/${swimmer.id}`);
  };
  return (
    <li className="swimmer-card">
      <div className="swimmer-card_element" onClick={() => onSwimmer(swimmer)}>
        <img src={swimmer.image} alt="nadador" width="140px" height="140px" />
        <span>{swimmer.name}</span>
        <span>{swimmer.surname}</span>
      </div>
    </li>
  );
};

export default SwimmerCard;
