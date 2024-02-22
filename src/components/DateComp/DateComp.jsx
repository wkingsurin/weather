const Date = (props) => {
  const { classes, day, month, isTempLike } = props;

  return (
    <div className={classes.date}>
      <span className={isTempLike ? classes["value_16"] : classes.day}>
        {day}
      </span>
      <span className={isTempLike ? classes["measure_8"] : classes.month}>
        {month}
      </span>
    </div>
  );
};

export default Date;
