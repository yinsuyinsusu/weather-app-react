import React, { useState } from "react";
import axios from "axios";
import "./App.css";

export default function WeatherSearch() {
  const [city, setCity] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [weather, setWeather] = useState({});

  function displayWeather(response) {
    setLoaded(true);
    setWeather({
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "30d1b892972f56e1061a5f63abf04e95";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeather);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  let form = (
    <form onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-6">
          <input
            type="search"
            placeholder="Enter a city.."
            onChange={updateCity}
            className="searchForm"
            autoFocus="on"
          />
        </div>
        <div className="col-6">
          <button type="Submit" className="searchButton">
            Search
          </button>
        </div>
      </div>
    </form>
  );

  if (loaded) {
    return (
      <div>
        {form}
        <ul>
          <span>Temperature: {Math.round(weather.temperature)}°C</span>
          <span>Description: {weather.description}</span>
          <span>Humidity: {weather.humidity}%</span>
          <span>Wind: {weather.wind}km/h</span>
          <span>
            <img src={weather.icon} alt={weather.description} />
          </span>
        </ul>
      </div>
    );
  } else {
    return form;
  }
}
