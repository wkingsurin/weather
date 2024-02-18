import classes from "./Onday.module.css";

import Date from "../Date";
import Temperature from "../Temperature";
import Precepitation from "../Precepitation";

import { getRoundTemp } from "../../utils";

const Onday = (props) => {
  const { data } = props;
  const day = data.day;

  return (
    <div className={classes.onday}>
      <Date classes={classes} day={1} month={data.date} />
      <div className={classes.weather}>
        <Temperature classes={classes} temp={getRoundTemp(day.avgtemp_c)} />
        <Precepitation classes={classes} image={day.condition} />
      </div>
      <div className={classes.info}>
        <span className={classes.text}>Ночью:</span>
        <Temperature
          classes={classes}
          temp={getRoundTemp(day.mintemp_c)}
          isTempLike
        />
      </div>
    </div>
  );
};

export default Onday;
