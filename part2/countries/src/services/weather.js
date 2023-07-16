import axios from "axios";

const API_URL = "https://api.openweathermap.org/data/3.0/onecall";
const API_KEY = process.env.REACT_APP_API_KEY;

const getWeather = (lat, lon) => {
  return axios.get(API_URL, {
    params: {
      lat,
      lon,
      exclude: "hourly,daily,minutely,alerts",
      units: "metric",
      appid: API_KEY,
    },
  });
};



export default { getWeather};
