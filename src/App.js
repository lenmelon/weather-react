import React from "react";
import Weather from "./Weather";

import "./App.css";

import "./App.css";

export default function App() {
  let weatherData = {
    city: "New York",
    date: "Tuesday, 17:14h",
    description: "Rain",
    img: "https://ssl.gstatic.com/onebox/weather/64/rain.png",
    humidity: "80",
    wind: "10",
    temperature: "19",
  };

  return (
    <div className="App">
      <div className="container">
        <div className="weather-app">
          <form className="search-form">
            <input
              type="text"
              placeholder="Look for another city"
              className="search-input"
            />
            <input type="submit" value="Search" className="search-button" />
          </form>
          <small>Last updated: {weatherData.date}</small>
          <div className="weather-info">
            <div className="weather-main">
              <h1>{weatherData.city}</h1>
              <h3 className="weather-description">{weatherData.description}</h3>

              <div className="weather-temperature">
                <img
                  src={weatherData.img}
                  alt="weather icon"
                  className="weather-img"
                />
                <h2>
                  {weatherData.temperature} <span>ºC</span> | <span>ºF</span>
                </h2>
              </div>
            </div>
            <div className="weather-details">
              <ul>
                <li>
                  Humidity: <span>{weatherData.humidity}%</span>
                </li>
                <li>
                  Wind: <span>{weatherData.wind} km/h</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}