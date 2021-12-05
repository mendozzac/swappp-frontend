import "./SwimmerList.scss";
import useSwimmers from "../../hooks/useSwimmers";
import SwimmerCard from "../SwimmerCard/SwimmerCard";
import Loading from "../Loading/Loading";

const SwimmersList = () => {
  const { swimmers } = useSwimmers();
  const sortedSwimmers = swimmers.sort((a, b) => {
    if (a.surname < b.surname) {
      return -1;
    }
    return 0;
  });

  return swimmers.length ? (
    <div className="component-list">
      <h1 className="title">Nadadores</h1>
      <ul className="swimmers-list">
        {sortedSwimmers.map((swimmer) => (
          <SwimmerCard swimmer={swimmer} key={swimmer.id} />
        ))}
      </ul>
    </div>
  ) : (
    <Loading />
  );
};

export default SwimmersList;
