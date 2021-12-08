import { useEffect, useState } from "react";
import { useParams } from "react-router";
import SessionDetail from "../../components/SessionDetail/SessionDetail";
import useSessions from "../../hooks/useSessions";

const OneSessionPage = () => {
  const { loadOneSession, sessions } = useSessions();
  const { idSession } = useParams();
  const sessionInicial = {
    id: "",
    exercises: [],
    day: "",
  };
  const [loadSession, SetLoadSession] = useState(sessionInicial);

  useEffect(() => {
    loadOneSession(idSession);
  }, [loadOneSession, idSession]);

  useEffect(() => {
    SetLoadSession(sessions[0]);
  }, [sessions]);

  return <SessionDetail session={loadSession} />;
};

export default OneSessionPage;
