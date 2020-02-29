import React from 'react';
import '../index.css';
import wind from '../images/wind.png';
import temp from '../images/temp.png';
import pressure from '../images/pressure.png';

function Weather(props) {
  const { weather } = props;
  const array = weather.sol_keys;
  const lastValue = array[array.length - 1];

  return (
    <div className="weatherWrapper">
      <h1 className="title">Latest Weather at Elysium Planitia</h1>
      <p className="subtitle">
        Elysium Planitia is a flat-smooth plain just north of thes
        Mars' equator.
      </p>
      <div className="weather">
        <p className="sol">Sol: {lastValue}</p>
        <p className="subSol">Sol is day on Mars</p>
        <div className="data">
          <img src={temp} className="icon" alt="temp" />
          <p>{Math.round(weather[lastValue].AT.av)}°C</p>
        </div>
        <div className="data">
          <img src={wind} className="icon-wind" alt="wind" />
          <p>{Math.round(weather[lastValue].HWS.av)}m/s</p>
        </div>
        <div className="data">
          <img src={pressure} className="icon" alt="pressure" />
          <p>{Math.round(weather[lastValue].PRE.av)}Pa</p>
        </div>
        <p className="update">
          Updated on: {weather[lastValue].First_UTC.substring(0, 10)}
        </p>
      </div>
    </div>
  );
}

export default Weather;
