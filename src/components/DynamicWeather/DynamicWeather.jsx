const DynamicWeather = (props) => {
  const { classes, data } = props;

  return (
    <div className={classes.dynamic}>
      <div className={classes.row}>
        <div className={classes.info}>
          <span className={classes.text}>Сейчас</span>
          <div className={classes.temperature}>
            <span className={classes.value}>{data.temp}</span>
            <span className={classes["measure_12"]}>o</span>
          </div>
        </div>
      </div>
      <div className={classes.row}>
        <div className={classes.info}>
          <span className={classes.text}>Солнечно</span>
          <div className={classes.precipitation}>
            <img src={data.image.src} alt={data.image.name} />
          </div>
        </div>
        <div className={classes.info}>
          <span className={classes.text}>Ощущается как:</span>
          <div className={classes.temperature}>
            <span className={classes.value}>{data.tempLike}</span>
            <span className={classes["measure_12"]}>o</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DynamicWeather;
