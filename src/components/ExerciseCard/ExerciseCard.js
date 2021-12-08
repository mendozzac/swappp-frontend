import "./ExerciseCard.scss";

const ExerciseCard = ({ exercise }) => {
  return (
    <>
      <li>
        <div className="exercise">
          <span className="meters">{exercise.meters}</span>
          <span className="description">{exercise.description}</span>
        </div>
      </li>
    </>
  );
};

export default ExerciseCard;
