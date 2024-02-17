const Input = (props) => {
  const { classes } = props;

  return (
    <div className={classes.input}>
      <label className={classes.label} htmlFor="city">
        Город
      </label>
      <input
        type="text"
        className={classes.textbox}
        id="city"
        placeholder="Название города..."
      />
    </div>
  );
};

export default Input;
