import { useEffect } from "react";
import SwimmersList from "../../components/SwimmersList/SwimmersList";
import useSwimmers from "../../hooks/useSwimmers";

const SwimmersPage = () => {
  const { loadSwimmers } = useSwimmers();

  useEffect(() => {
    loadSwimmers();
  }, [loadSwimmers]);

  return (
    <>
      <SwimmersList />
    </>
  );
};

export default SwimmersPage;
