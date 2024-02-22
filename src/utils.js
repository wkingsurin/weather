export const initialDropDown = {
  isOpened: false,
  value: "today",
};

export const getRoundTemp = (temp) => {
  return `${Math.round(temp)}`;
};

export const getData = async (url, options) => {
  const response = await fetch(url, options);
  const json = await response.json();

  return json;
};

export const URL = (city) =>
  `https://weatherapi-com.p.rapidapi.com/forecast.json?q=${city}&days=3`;

export const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "23d69b86bamsh94fba5230ac5a8cp18797djsnf9487f8916a2",
    "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
  },
};

export const correctDate = (date) => {
  const regexp = /(\d{4})-(\d{2})-(\d{2})/;
  const string = date.toString().match(regexp);

  const year = string[1];
  const month = string[2];
  const day = string[3];

  const result = `${day}.${month}`;
  return { year: year, month: month, day: day, date: result };
};

export const getWeekday = (date) => {
  const formatter = Intl.DateTimeFormat("ru", { weekday: "short" });
  const weekday = formatter.format(date);
  const result = weekday[0].toUpperCase() + weekday[1];
  return result;
};
