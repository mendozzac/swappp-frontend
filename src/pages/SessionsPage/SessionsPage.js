import { useEffect } from "react";
import SessionsList from "../../components/SessionsList/SessionsList";
import useSessions from "../../hooks/useSessions";

const SessionsPage = () => {
  const { loadSessions } = useSessions();
  useEffect(() => {
    loadSessions();
  }, [loadSessions]);

  return <SessionsList />;
};

export default SessionsPage;
