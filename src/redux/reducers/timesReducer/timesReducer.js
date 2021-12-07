import actionTypes from "../../actions/actionTypes";

const timesReducer = (times = [], action) => {
  let newTimes;

  switch (action.type) {
    case actionTypes.createTime:
      newTimes = [...times, action.time];
      break;
    case actionTypes.updateTime:
      newTimes = times.map((time) =>
        time.id === action.time.id ? { ...time, ...action.time } : time
      );
      break;
    default:
      newTimes = times;
  }
  return newTimes;
};

export default timesReducer;
