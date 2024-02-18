import classes from "./ThreeDays.module.css";

import Onday from "../Onday";

const ThreeDays = (props) => {
  const { data } = props;

  return (
    <div className={classes["three-days"]}>
      {data.map((date) => (
        <Onday key={date.id} data={date} />
      ))}
    </div>
  );
};

export default ThreeDays;
