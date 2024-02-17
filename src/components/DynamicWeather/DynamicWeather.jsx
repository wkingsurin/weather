const DynamicWeather = (props) => {
  const { classes } = props;

  return (
    <div className={classes.dynamic}>
      <div className={classes.row}>
        <div className={classes.info}>
          <span className={classes.text}>Сейчас</span>
          <div className={classes.temperature}>
            <span className={classes.value}>-10</span>
            <span className={classes["measure_12"]}>o</span>
          </div>
        </div>
      </div>
      <div className={classes.row}>
        <div className={classes.info}>
          <span className={classes.text}>Солнечно</span>
          <div className={classes.precipitation}>
            <img src="./sun.png" alt="sun" />
          </div>
        </div>
        <div className={classes.info}>
          <span className={classes.text}>Ощущается как:</span>
          <div className={classes.temperature}>
            <span className={classes.value}>-15</span>
            <span className={classes["measure_12"]}>o</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DynamicWeather;