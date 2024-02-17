import Onday from "../Onday";

const ThreeDays = (props) => {
  const { classes, data } = props;

  return (
    <div className={classes["three-days"]}>
      {data.map((date) => (
        <Onday key={date.id} classes={classes} data={date} />
      ))}
    </div>
  );
};

export default ThreeDays;
