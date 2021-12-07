import Loading from "../Loading/Loading";
import SessionCard from "../SessionCard/SessionCard";
import useSessions from "../../hooks/useSessions";

const SessionsList = () => {
  const { sessions } = useSessions();

  return sessions.lenght ? (
    <div>
      <h1 className="title">Temporada 21/22</h1>
      <ul className="sessions-list">
        {sessions.map((session) => (
          <SessionCard session={session} key={session.id} />
        ))}
      </ul>
    </div>
  ) : (
    <Loading />
  );
};

export default SessionsList;
