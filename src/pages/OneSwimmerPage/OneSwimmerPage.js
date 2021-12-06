import SwimmerDetail from "../../components/SwimmerDetail/SwimmerDetail";
import { useEffect } from "react";
import useSwimmer from "../../hooks/useSwimmer";
import { useParams } from "react-router";

const OneSwimmerPage = () => {
  const { loadOneSwimmer, swimmer } = useSwimmer();
  const { idSwimmer } = useParams();

  useEffect(() => {
    loadOneSwimmer(idSwimmer);
  }, [loadOneSwimmer, idSwimmer]);

  return <SwimmerDetail swimmer={swimmer} />;
};

export default OneSwimmerPage;
