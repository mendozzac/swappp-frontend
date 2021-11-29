const SwimmerDetail = ({ swimmer }) => {
  return (
    <>
      <div>
        <div className="swimmer-data">
          <div className="swimmer-data__principal">
            <img className="picture" src={swimmer.image} alt={swimmer.name} />
            <span className="name"></span>
            <span className="surname"></span>
            <span className="year"></span>
          </div>
          <div className="swimmer-data__morphologic">
            <span className="height">
              Altura: <span>{swimmer.height}</span>cm
            </span>
            <span className="weight">Peso: {swimmer.weight}kg</span>
            <span className="times">Marcas: </span>
          </div>
        </div>
        <div className="swimmer-times">
          <ul>
            <li className="time"></li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default SwimmerDetail;
