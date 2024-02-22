import { getRoundTemp, weatherType } from "../../utils";

const DynamicWeather = (props) => {
  const { classes, data, day } = props;

  const dayData = getDataOfTime(isToday, 14, data);

  function isToday() {
    if (day === "today") return true;
    return false;
  }

  function getDataOfTime(isToday, time, data) {
    let day = isToday() ? data : data.hour[time];
    return day;
  }

  return (
    <div className={classes.dynamic}>
      <div className={classes.row}>
        <div className={classes.info}>
          <span className={classes.text}>
            {day === "today" ? "Сейчас" : "Завтра"}
          </span>
          <div className={classes.temperature}>
            <span className={classes.value}>
              {getRoundTemp(dayData.temp_c)}
            </span>
            <span className={classes["measure_12"]}>o</span>
          </div>
        </div>
      </div>
      <div className={classes.row}>
        <div className={classes.info}>
          <span className={classes.text}>
            {weatherType[dayData?.condition?.text.trim()]?.text}
          </span>
          <div className={classes.precipitation}>
            <img
              src={weatherType[dayData?.condition?.text.trim()]?.icon}
              alt={weatherType[dayData?.condition?.text.trim()]?.text}
            />
          </div>
        </div>
        <div className={classes.info}>
          <span className={classes.text}>Ощущается как</span>
          <div className={classes.temperature}>
            <span className={classes.value}>
              {getRoundTemp(dayData.feelslike_c)}
            </span>
            <span className={classes["measure_12"]}>o</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DynamicWeather;
