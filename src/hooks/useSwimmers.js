import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadSwimmersThunk } from "../redux/thunks/swimmerThunks";

const useSwimmers = () => {
  const swimmers = useSelector(({ swimmers }) => swimmers);
  const dispatch = useDispatch();

  const loadSwimmers = useCallback(() => {
    dispatch(loadSwimmersThunk());
  }, [dispatch]);

  return { swimmers, loadSwimmers };
};

export default useSwimmers;
