import useSwimmers from "../../hooks/useSwimmers";
import SwimmerCard from "../SwimmerCard/SwimmerCard";

const SwimmersList = () => {
  const { swimmers } = useSwimmers();

  return (
    <ul className="swimmers-list">
      {swimmers.map((swimmer) => (
        <SwimmerCard swimmer={swimmer} key={swimmer.id} />
      ))}
    </ul>
  );
};

export default SwimmersList;
