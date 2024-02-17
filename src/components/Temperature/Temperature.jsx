const Temperature = (props) => {
  const { classes, temp } = props;

  return (
    <div className={classes.temperature}>
      <span className={classes["value_16"]}>{temp}</span>
      <span className={classes["measure_8"]}>o</span>
    </div>
  );
};

export default Temperature;
