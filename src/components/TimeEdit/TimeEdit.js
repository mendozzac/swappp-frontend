import { useState } from "react";
import { useParams } from "react-router";
import useTimes from "../../hooks/useTimes";
import "./TimeEdit.scss";

const TimeEdit = () => {
  const { createTime } = useTimes();
  const { idSwimmer } = useParams();

  const initalTimeData = {
    style: "",
    distance: "",
    time: "",
  };
  const [timeData, setTimeData] = useState(initalTimeData);

  const changeData = (event) => {
    setTimeData({
      ...timeData,
      [event.target.id]: event.target.value,
    });
  };

  const resetForm = () => {
    setTimeData(initalTimeData);
  };

  const onChangeTime = (event) => {
    event.preventDefault();
    const newTime = {
      style: timeData.style,
      distance: timeData.distance,
      time: timeData.time,
      swimmer: idSwimmer,
    };
    createTime(newTime);
    resetForm();
  };

  return (
    <>
      <div>
        <p className="times">Marcas: </p>
        <div className="time-data-box">
          <form
            className="time-data"
            noValidate
            autoComplete="off"
            onSubmit={onChangeTime}
          >
            <label htmlFor="distance" />
            <input
              id="distance"
              value={timeData.distance}
              onChange={changeData}
              placeholder="Metros"
            />
            <label htmlFor="style" />
            <input
              id="style"
              value={timeData.style}
              onChange={changeData}
              placeholder="Estilo"
            />
            <label htmlFor="time" />
            <input
              id="time"
              value={timeData.time}
              onChange={changeData}
              placeholder="Tiempo"
            />
            <button className="button">Añadir</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default TimeEdit;
