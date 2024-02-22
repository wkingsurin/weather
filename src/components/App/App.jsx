import appStyles from "./App.module.css";

import Logo from "../Logo";
import InputBlock from "../InputBlock";
import DynamicWeather from "../DynamicWeather";
import ThreeDays from "../ThreeDays";

import Spinner from "../Spinner/Spinner";

import { initialDropDown, getData, URL, options } from "../../utils";
import { useEffect, useState } from "react";

export default function App() {
  const [select, setSelect] = useState(initialDropDown);
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [city, setCity] = useState("Екатеринбург");

  useEffect(() => {
    setIsLoading(true);
    getData(URL(city), options).then(async (json) => {
      const result = await json;
      setData(result);
      setIsLoading(false);
    });

    document.addEventListener("click", (e) => {
      if (isLoading || !select.isOpened) return;
      if (!e.target.closest("#dropdown")) {
        setSelect((prev) => ({
          ...prev,
          isOpened: false,
        }));
        return;
      }
    });
  }, []);

  return (
    <div className={appStyles.app}>
      <div className={appStyles.container}>
        <div className={appStyles.content}>
          <div className={appStyles.inner}>
            <Logo classes={appStyles} />
            <InputBlock
              classes={appStyles}
              selectState={[select, setSelect]}
              loadingState={[isLoading, setIsLoading]}
              dataState={[data, setData]}
              cityState={[city, setCity]}
            />
            {isLoading && (
              <div className={appStyles.spinnerBlock}>
                <Spinner />
              </div>
            )}
            {isLoading === false && (
              <>
                {select.value === "today" && (
                  <DynamicWeather
                    classes={appStyles}
                    data={data?.current || {}}
                    day={select.value}
                  />
                )}
                {select.value === "tomorrow" && (
                  <DynamicWeather
                    classes={appStyles}
                    data={data.forecast.forecastday[1]}
                    day={select.value}
                  />
                )}
                {select.value === "three-days" && (
                  <ThreeDays
                    classes={appStyles}
                    data={data.forecast.forecastday}
                  />
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
