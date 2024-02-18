import classes from "./ThreeDays.module.css";

import Onday from "../Onday";

const ThreeDays = (props) => {
  const { data } = props;

  return (
    <div className={classes["three-days"]}>
      {data.map((res) => (
        <Onday key={res.date} data={res} />
      ))}
    </div>
  );
};

export default ThreeDays;
