const ExerciseCard =({exercise})=>{
    return(
        <li>
        <div>
        <span>{exercise.meters}</span>
        <span>{exercise.description}</span>
        </div>
        </li>
    )
}

export default ExerciseCard