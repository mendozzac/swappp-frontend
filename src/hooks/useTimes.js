import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createTimeThunk, updateTimeThunk } from "../redux/thunks/timesThunks";

const useTimes = () => {
  const times = useSelector(({ times }) => times);
  const dispatch = useDispatch();

  const createTime = (time) => {
    dispatch(createTimeThunk(time));
  };

  const updateTime = useCallback(
    (newTime) => {
      dispatch(updateTimeThunk(newTime));
    },
    [dispatch]
  );

  return {
    times,
    createTime,
    updateTime,
  };
};

export default useTimes;
