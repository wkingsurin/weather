import appStyles from "./App.module.css";

import Logo from "../Logo";
import InputBlock from "../InputBlock";
import DynamicWeather from "../DynamicWeather";
import ThreeDays from "../ThreeDays";

// test
const data = [
  {
    id: 0,
    day: "Вс",
    month: "18.02",
    temp: -15,
    tempLike: -16,
    image: { src: "./snow.png", name: "snow" },
  },
  {
    id: 1,
    day: "Вс",
    month: "18.02",
    temp: -15,
    tempLike: -16,
    image: { src: "./snow.png", name: "snow" },
  },
  {
    id: 2,
    day: "Вс",
    month: "18.02",
    temp: -15,
    tempLike: -16,
    image: { src: "./snow.png", name: "snow" },
  },
];

export default function App() {
  return (
    <div className={appStyles.app}>
      <div className={appStyles.container}>
        <div className={appStyles.content}>
          <div className={appStyles.inner}>
            <Logo classes={appStyles} />
            <InputBlock classes={appStyles} />
            <DynamicWeather classes={appStyles} />
            <ThreeDays classes={appStyles} data={data} />
          </div>
        </div>
      </div>
    </div>
  );
}
