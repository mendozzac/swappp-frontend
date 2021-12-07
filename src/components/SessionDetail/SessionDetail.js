import { useNavigate } from "react-router";
import path from "../../path/path";
import Loading from "../Loading/Loading";

const SessionDetail = ({ session }) => {
  const navigate = useNavigate();

  const onReturn = (event) => {
    event.preventDefault();
    navigate(`${path.season}`);
  };

  return session ? (
    <div className="session-data" onClick={onReturn}>
      <h1 className="title">{session.date}</h1>
      <div>{session.exercise}</div>
    </div>
  ) : (
    <Loading />
  );
};

export default SessionDetail;
