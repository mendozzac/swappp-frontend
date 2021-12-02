import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  createSwimmerThunk,
  deleteSwimmerThunk,
  loadSwimmersThunk,
} from "../redux/thunks/swimmerThunks";

const useSwimmers = () => {
  const swimmers = useSelector(({ swimmers }) => swimmers);
  const dispatch = useDispatch();

  const loadSwimmers = useCallback(() => {
    dispatch(loadSwimmersThunk());
  }, [dispatch]);

  const createSwimmer = (swimmer) => {
    dispatch(createSwimmerThunk(swimmer));
  };

  const deleteSwimmer = (idSwimmer) => {
    dispatch(deleteSwimmerThunk(idSwimmer));
  };

  return {
    swimmers,
    loadSwimmers,
    createSwimmer,
    deleteSwimmer,
  };
};

export default useSwimmers;
