import "./SwimmerList.scss";
import useSwimmers from "../../hooks/useSwimmers";
import SwimmerCard from "../SwimmerCard/SwimmerCard";

const SwimmersList = () => {
  const { swimmers } = useSwimmers();

  return (
    <div className="component-list">
      <h1 className="title">Nadadores</h1>
      <ul className="swimmers-list">
        {swimmers.map((swimmer) => (
          <SwimmerCard swimmer={swimmer} key={swimmer.id} />
        ))}
      </ul>
    </div>
  );
};

export default SwimmersList;
