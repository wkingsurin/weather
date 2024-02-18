import classes from "./Onday.module.css";

import Date from "../Date";
import Temperature from "../Temperature";
import Precepitation from "../Precepitation";

const Onday = (props) => {
  const { data } = props;

  return (
    <div className={classes.onday}>
      <Date classes={classes} day={data.day} month={data.month} />
      <div className={classes.weather}>
        <Temperature classes={classes} temp={data.temp} />
        <Precepitation classes={classes} image={data.image} />
      </div>
      <div className={classes.info}>
        <span className={classes.text}>Ощущается как:</span>
        <Temperature classes={classes} temp={data.tempLike} isTempLike />
      </div>
    </div>
  );
};

export default Onday;
