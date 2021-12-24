import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  loadOneSwimmerThunk,
  updateSwimmerThunk,
} from "../redux/thunks/swimmerThunks";

const useSwimmer = () => {
  const swimmer = useSelector(({ swimmer }) => swimmer);
  const dispatch = useDispatch();

  const loadOneSwimmer = useCallback(
    (idSwimmer) => {
      dispatch(loadOneSwimmerThunk(idSwimmer));
    },
    [dispatch]
  );

  const updateSwimmer = useCallback(
    (newSwimmer) => {
      dispatch(updateSwimmerThunk(newSwimmer));
    },
    [dispatch]
  );

  return { swimmer, loadOneSwimmer, updateSwimmer };
};

export default useSwimmer;
