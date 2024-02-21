import classes from "./DropDown.module.css";
import { Chevron } from "../../SVG";
import { getData, URL, options } from "../../utils";

const DropDown = (props) => {
  const { selectState, loadingState, dataState, cityState } = props;
  const [select, setSelect] = selectState;
  const [isLoading, setIsLoading] = loadingState;
  const [data, setData] = dataState;
  const [city, setCity] = cityState;

  function handleSelect() {
    setSelect((prev) => ({ ...prev, isOpened: !prev.isOpened }));
  }

  function handleClickData(e) {
    setSelect((prev) => ({ ...prev, isOpened: false, value: e.target.id }));
    setIsLoading(true);
    getData(URL(city), options).then((json) => {
      setData(json);
      setIsLoading(false);
      console.log(json);
    });
  }

  return (
    <div className={classes.select} id="dropdown">
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
