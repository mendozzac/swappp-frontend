import { useNavigate } from "react-router";
import path from "../../path/path";
import ExerciseCard from "../ExerciseCard/ExerciseCard";
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
      <div>
        <ul>
          {session.exercises &&
            session.exercises.map((exercise, index) => (
              <ExerciseCard exercise={exercise} key={index} />
            ))}
        </ul>
      </div>
    </div>
  ) : (
    <Loading />
  );
};

export default SessionDetail;
