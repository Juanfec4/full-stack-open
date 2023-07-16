import { useState, useEffect } from "react";
import weatherService from "../services/weather";
const CountryCard = ({ country }) => {
  const [weather, setWeather] = useState({
    temperature: "",
    windSpeed: "",
    icon: "",
  });

  useEffect(() => {
    const [lat, lon] = country.capitalInfo.latlng;
    weatherService.getWeather(lat, lon).then((response) => {
      const { current } = response.data;
      let newWeather = {
        temperature: current.temp,
        windSpeed: current.wind_speed,
        icon: `https://openweathermap.org/img/wn/${current.weather[0].icon}@2x.png`,
      };
      setWeather(newWeather);
    });
  }, []);

  const getLanguages = (country) => {
    let languages = [];
    for (let key in country.languages) {
      languages.push({ key: key, name: country.languages[key] });
    }
    return languages;
  };

  const languages = getLanguages(country);
  const flag = { image: country.flags.png, alt: country.flags.alt };


  return (
    <div>
      <h1>{country.name.common}</h1>
      <div>
        <p>Capital: {country.capital[0]}</p>
        <p>Area: {country.area}</p>
      </div>
      <h3>Languages</h3>
      <ul>
        {languages.map((language) => {
          return <li key={language.key}>{language.name}</li>;
        })}
      </ul>
      <img src={flag.image} alt={flag.alt} />
      <h3>Weather in {country.capital[0]}</h3>
      <p>Temperature: {weather.temperature} Celsius</p>
      <img src={weather.icon}/>
      <p>Wind: {weather.windSpeed} m/s</p>
    </div>
  );
};
export default CountryCard;
