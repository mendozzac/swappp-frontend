import "./TimeCard.scss";

const TimeCard = ({ time }) => {
  return (
    <li className="time-box">
      <div className="time">
        <span className="time-element">{time.distance}</span>
      </div>
      <div className="time">
        <span className="time-element">{time.style}</span>
      </div>
      <div className="time">
        <span className="time-element">{time.time}</span>
      </div>
    </li>
  );
};

export default TimeCard;
