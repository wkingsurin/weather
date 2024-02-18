import { getData, URL, options } from "../../utils";
import classes from "./Input.module.css";
import { useState } from "react";

const Input = (props) => {
  const { cityState, dataState, loadingState } = props;
  const [city, setCity] = cityState;
  const [data, setData] = dataState;
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = loadingState;

  function handleTyping(e) {
    setInput(e.target.value);
  }

  function handleClick() {
    if (input.trim().length === 0) {
      setInput("");
      return;
    }

    setCity(input);
    setInput("");
    setData(() => {
      setIsLoading(true);
      getData(URL(input), options).then((json) => {
        setData(json);
        setIsLoading(false);
      });
    });
  }

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
        value={input}
        onChange={(e) => handleTyping(e)}
      />
      <button onClick={() => handleClick()}>Ok</button>
    </div>
  );
};

export default Input;
