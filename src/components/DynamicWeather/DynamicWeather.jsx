import { getRoundTemp } from "../../utils";

const DynamicWeather = (props) => {
  const { classes, data, day } = props;

  function isToday() {
    if (day === "today") return true;
    return false;
  }

  const images = {
    clear: "./moon.png",
    overcast: "./clouds.png",
    partlyCloudy: "./partly-cloudy.png",
    sunny: "./sun.png",
    mist: "./mist.png",
  };

  return (
    <div className={classes.dynamic}>
      <div className={classes.row}>
        <div className={classes.info}>
          <span className={classes.text}>
            {day === "today" ? "Сейчас" : "Завтра"}
          </span>
          <div className={classes.temperature}>
            <span className={classes.value}>
              {isToday()
                ? getRoundTemp(data.temp_c)
                : getRoundTemp(data.day.avgtemp_c)}
            </span>
            <span className={classes["measure_12"]}>o</span>
          </div>
        </div>
      </div>
      <div className={classes.row}>
        <div className={classes.info}>
          <span className={classes.text}>Солнечно</span>
          <div className={classes.precipitation}>
            {isToday() && (
              <img src={data?.condition?.icon} alt={data?.condition?.text} />
            )}
            {isToday() === false && (
              <img
                src={data?.day?.condition?.icon}
                alt={data?.day?.condition?.text}
              />
            )}
          </div>
        </div>
        <div className={classes.info}>
          <span className={classes.text}>
            {isToday() ? "Ощущается как" : "Ночью"}
          </span>
          <div className={classes.temperature}>
            <span className={classes.value}>
              {isToday()
                ? getRoundTemp(data.feelslike_c)
                : getRoundTemp(data.day.mintemp_c)}
            </span>
            <span className={classes["measure_12"]}>o</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DynamicWeather;
