import classes from "./Onday.module.css";

import Date from "../Date";
import Temperature from "../Temperature";
import Precepitation from "../Precepitation";

import { getRoundTemp, correctDate } from "../../utils";

const Onday = (props) => {
  const { data } = props;
  const date = correctDate(data.date);
  const day = getDataOfTime(14, data);

  function getDataOfTime(time, data) {
    let day = data.hour[time];
    return day;
  }

  return (
    <div className={classes.onday}>
      <Date classes={classes} day={1} month={date} />
      <div className={classes.weather}>
        <Temperature classes={classes} temp={getRoundTemp(day.temp_c)} />
        <Precepitation classes={classes} image={day.condition} />
      </div>
      <div className={classes.info}>
        <span className={classes.text}>Ощущается как:</span>
        <Temperature
          classes={classes}
          temp={getRoundTemp(day.feelslike_c)}
          isTempLike
        />
      </div>
    </div>
  );
};

export default Onday;
