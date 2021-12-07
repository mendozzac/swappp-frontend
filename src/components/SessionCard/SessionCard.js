import { useNavigate } from "react-router";
import path from "../../path/path";

const SessionCard = ({ session }) => {
  const navigate = useNavigate();

  const onSession = (session) => {
    navigate(`${path.season}/${session.id}`);
  };

  return (
    <li className="session-card">
      <div className="session-card__element" onClick={() => onSession(session)}>
        <span>{session.date}</span>
      </div>
    </li>
  );
};

export default SessionCard;
