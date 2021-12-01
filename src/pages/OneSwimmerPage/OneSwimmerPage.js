import SwimmerDetail from "../../components/SwimmerDeatail/SwimmerDetail";
import { useEffect } from "react";
import useSwimmer from "../../hooks/useSwimmer";

const OneSwimmerPage = () => {
  const { loadOneSwimmer } = useSwimmer();

  useEffect(() => {
    loadOneSwimmer();
  }, [loadOneSwimmer]);

  return <SwimmerDetail />;
};

export default OneSwimmerPage;
