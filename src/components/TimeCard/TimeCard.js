const TimeCard = ({ time }) => {
  return (
    <li className="time">
      <div>
        <span>{time.distance}</span>
        <span>{time.style}</span>
        <span>{time.pool}</span>
      </div>
    </li>
  );
};

export default TimeCard;
