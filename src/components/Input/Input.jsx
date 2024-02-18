import classes from "./Input.module.css";

const Input = (props) => {
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
