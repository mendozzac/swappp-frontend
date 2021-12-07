import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  loadSessionsThunk,
  loadOneSessionThunk,
} from "../redux/thunks/sessionThunks";
const useSessions = () => {
  const sessions = useSelector(({ sessions }) => sessions);
  const session = useSelector(({ session }) => session);
  const dispatch = useDispatch();

  const loadSessions = useCallback(() => {
    dispatch(loadSessionsThunk());
  }, [dispatch]);

  const loadOneSession = useCallback(
    (idSession) => {
      dispatch(loadOneSessionThunk(idSession));
    },
    [dispatch]
  );
  return { sessions, session, loadSessions, loadOneSession };
};

export default useSessions;
