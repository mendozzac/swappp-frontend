import "./SwimmerCard.scss";

const SwimmerCard = ({ swimmer }) => {
  return (
    <li className="swimmer-card">
      <div className="swimmer-card_element">
        <img
          src={swimmer.image}
          alt={swimmer.name}
          width="140px"
          height="140px"
        />
        <span>{swimmer.name}</span>
        <span>{swimmer.surname}</span>
      </div>
    </li>
  );
};

export default SwimmerCard;
