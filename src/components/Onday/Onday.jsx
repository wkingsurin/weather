import classes from "./Onday.module.css";

import DateComp from "../DateComp";
import Temperature from "../Temperature";
import Precepitation from "../Precepitation";

import { getRoundTemp, correctDate, getWeekday } from "../../utils";

const Onday = (props) => {
  const { data } = props;
  const { year, month, day, date } = correctDate(data.date);
  const onDay = getDataOfTime(14, data);
  const weekday = getWeekday(new Date(year, month, day - 1));

  function getDataOfTime(time, data) {
    let day = data.hour[time];
    return day;
  }

  return (
    <div className={classes.onday}>
      <DateComp classes={classes} day={weekday} month={date} />
      <div className={classes.weather}>
        <Temperature classes={classes} temp={getRoundTemp(onDay.temp_c)} />
        <Precepitation classes={classes} image={onDay.condition} />
      </div>
      <div className={classes.info}>
        <span className={classes.text}>Ощущается как:</span>
        <Temperature
          classes={classes}
          temp={getRoundTemp(onDay.feelslike_c)}
          isTempLike
        />
      </div>
    </div>
  );
};

export default Onday;
