import SwimmerDetail from "../../components/SwimmerDeatail/SwimmerDetail";
import { useEffect } from "react";
import useSwimmer from "../../hooks/useSwimmer";
import { useNavigate, useParams } from "react-router";
import useSwimmers from "../../hooks/useSwimmers";
import path from "../../path/path";

const OneSwimmerPage = () => {
  const { loadOneSwimmer, swimmer } = useSwimmer();
  const { deleteSwimmer } = useSwimmers();
  const { idSwimmer } = useParams();
  const navigate = useNavigate();

  const onDelete = (event) => {
    event.preventDefault();
    deleteSwimmer(idSwimmer);
    navigate(path.swimmers);
  };

  useEffect(() => {
    loadOneSwimmer(idSwimmer);
  }, [loadOneSwimmer, idSwimmer]);

  return <SwimmerDetail swimmer={swimmer} onClick={onDelete} />;
};

export default OneSwimmerPage;
