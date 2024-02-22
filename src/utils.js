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
  const result = date.toString().match(regexp);

  const month = result[2];
  const day = result[3];
  return `${day}.${month}`;
};
