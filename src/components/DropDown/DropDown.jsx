import classes from "./DropDown.module.css";
import Chevron from "../../Chevron";

const DropDown = (props) => {
  const { selectState } = props;
  const [select, setSelect] = selectState;

  function handleSelect() {
    setSelect((prev) => ({ ...prev, isOpened: !prev.isOpened }));
  }

  function handleClickData(e) {
    setSelect((prev) => ({ ...prev, isOpened: false, value: e.target.id }));
  }

  return (
    <div className={classes.select}>
      <button
        onClick={handleSelect}
        style={{
          borderRadius: select.isOpened ? "var(--rt)" : "",
        }}
      >
        Погода на <Chevron />
      </button>
      <ul
        className={classes.list}
        style={{
          display: select.isOpened ? "flex" : "none",
          boxShadow: select.isOpened ? "var(--shdw)" : "",
        }}
      >
        <li onClick={handleClickData} id="today">
          Сегодня
        </li>
        <li onClick={handleClickData} id="tomorrow">
          Завтра
        </li>
        <li onClick={handleClickData} id="three-days">
          3 дня
        </li>
      </ul>
      <select value={select.value} onChange={() => {}}>
        <option className={classes.option} value="today">
          Сегодня
        </option>
        <option className={classes.option} value="tomorrow">
          Завтра
        </option>
        <option className={classes.option} value="three-days">
          3 дня
        </option>
      </select>
    </div>
  );
};

export default DropDown;
