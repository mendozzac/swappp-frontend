import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadOneSwimmerThunk } from "../redux/thunks/swimmerThunks";

const useSwimmer = () => {
  const swimmer = useSelector(({ swimmer }) => swimmer);
  const dispatch = useDispatch;
  const loadOneSwimmer = useCallback(
    (swimmerId) => {
      dispatch(loadOneSwimmerThunk(swimmerId));
    },
    [dispatch]
  );
  return { swimmer, loadOneSwimmer };
};

export default useSwimmer;
