import { useEffect } from "react";
import { useParams } from "react-router";
import SessionDetail from "../../components/SessionDetail/SessionDetail";
import useSessions from "../../hooks/useSessions";

const OneSessionPage = () => {
  const { loadOneSession, session } = useSessions();
  const { idSession } = useParams();

  useEffect(() => {
    loadOneSession(idSession);
  }, [loadOneSession, idSession]);

  return <SessionDetail session={session} />;
};

export default OneSessionPage;
