import { useNavigate } from "react-router";
import path from "../../path/path";

const SessionCard = ({ session }) => {
  const navigate = useNavigate();
  console.log("1", session);
  const onSession = (session) => {
    navigate(`${path.season}/${session.id}`);
  };

  return (
    <li className="session-card">
      <div className="session-card__element" onClick={() => onSession(session)}>
        <span>{session.day}</span>
      </div>
    </li>
  );
};

export default SessionCard;
