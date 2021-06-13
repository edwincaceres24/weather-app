import React from 'react';
import './styles/pages.css';
import WeatherCardForecast from '../components/weathercard_forecastcontainer.js'
function ForeCastPage (){
  return(
    <main>
      <h1 className="mt-5 text-center">Forecast Time</h1>
      <div className="container text-center">
        <p>Write down the city you in which you would like to know the time</p>
      </div>
      <WeatherCardForecast />
    </main>
  )
}

export default ForeCastPage;
