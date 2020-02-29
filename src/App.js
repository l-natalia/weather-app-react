import React, { Fragment, useState, useEffect } from 'react';
import './index.css';
import Weather from './components/Weather';

function App() {
  const [weather, setWeather] = useState('');

  const getData = async () => {
    const api_call = await fetch(
      `//api.nasa.gov/insight_weather/?api_key=DEMO_KEY&feedtype=json&ver=1.0`,
    );
    const data = await api_call.json();
    setWeather(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Fragment>{weather && <Weather weather={weather} />}</Fragment>
  );
}

export default App;
