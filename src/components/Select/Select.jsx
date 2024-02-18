import classes from "./Select.module.css";
import Chevron from "../../Chevron";

const Select = (props) => {
  return (
    <div className={classes.select}>
      <button>
        Погода на <Chevron />
      </button>
      <ul className={classes.list}>
        <li name="today">Сегодня</li>
        <li name="yesterday">Завтра</li>
        <li name="three-days">3 дня</li>
      </ul>
      <select>
        <option className={classes.option} value="today">
          Сегодня
        </option>
        <option className={classes.option} value="yesterday">
          Завтра
        </option>
        <option className={classes.option} value="three-days">
          3 дня
        </option>
      </select>
    </div>
  );
};

export default Select;
