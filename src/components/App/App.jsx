import appStyles from "./App.module.css";

import Logo from "../Logo";
import InputBlock from "../InputBlock";
import DynamicWeather from "../DynamicWeather";
import ThreeDays from "../ThreeDays";

import { initialDropDown } from "../../utils";
import { useState } from "react";

// test data
// today
const today = [
  {
    id: 0,
    day: "Вс",
    month: "18.02",
    temp: -9,
    tempLike: -14,
    image: { src: "./snow.png", name: "snow" },
  },
];
const tomorrow = [
  {
    id: 0,
    day: "Пн",
    month: "19.02",
    temp: -8,
    tempLike: -12,
    image: { src: "./sun.png", name: "sun" },
  },
];
const threeDays = [
  {
    id: 0,
    day: "Вс",
    month: "18.02",
    temp: -9,
    tempLike: -14,
    image: { src: "./snow.png", name: "snow" },
  },
  {
    id: 1,
    day: "Пн",
    month: "19.02",
    temp: -8,
    tempLike: -12,
    image: { src: "./sun.png", name: "sun" },
  },
  {
    id: 2,
    day: "Вт",
    month: "20.02",
    temp: -15,
    tempLike: -16,
    image: { src: "./snow.png", name: "snow" },
  },
];

export default function App() {
  const [select, setSelect] = useState(initialDropDown);

  return (
    <div className={appStyles.app}>
      <div className={appStyles.container}>
        <div className={appStyles.content}>
          <div className={appStyles.inner}>
            <Logo classes={appStyles} />
            <InputBlock classes={appStyles} selectState={[select, setSelect]} />
            {select.value === "today" && (
              <DynamicWeather classes={appStyles} data={today[0]} />
            )}
            {select.value === "tomorrow" && (
              <DynamicWeather classes={appStyles} data={tomorrow[0]} />
            )}
            {select.value === "three-days" && (
              <ThreeDays classes={appStyles} data={threeDays} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
