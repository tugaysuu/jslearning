'use client';

import Layout from "../components/Layout";


import { useEffect, useState } from 'react'; 


export default function Page1() {
  const [weather, setWeather] = useState(null);

    useEffect(() => {
        async function fetchWeather() {
            
                const res = await fetch('/api/weather');
                
                const data = await res.json();
                setWeather(data);
            
        }
        
        fetchWeather();
    }, []);
  return (
    <Layout>
      { weather && weather.location && weather.current && (
      <div className="weather-page">
        <div className="header">
          <h1>Weather in {weather.location.name}, {weather.location.country}</h1>
          <div className="date1">Current Time: {weather.location.localtime}</div>
          <div className="date2">Last Updated: {weather.current.last_updated}</div>
        </div>

        <div className="current-weather">
          <div className="temperature">{weather.current.temp_c}°C</div>
          <div className="description">{weather.current.condition.text}</div>
          <img src="//cdn.weatherapi.com/weather/64x64/day/116.png" alt="Cloudy Weather" />
        </div>

        <div className="details">
          <div>Humidity: {weather.current.humidity}</div>
          <div>Wind Speed: {weather.current.wind_kph}km/h</div>
          <div>Feels Like: {weather.current.feelslike_c}°C</div>
        </div>

        <div className="hourly-forecast">
          <h2>Hourly Forecast</h2>
          {/* This is a sample; you'd ideally loop over hourly data here */}
          <div className="hour">10 AM: 21°C, Cloudy</div>
          <div className="hour">11 AM: 22°C, Partly Cloudy</div>
          <div className="hour">12 PM: 23°C, Sunny</div>
          {/* ... */}
        </div>

        <div className="weekly-forecast">
          <h2>Weekly Forecast</h2>
          {/* This is a sample; you'd ideally loop over weekly data here */}
          <div className="day">Wednesday: 25°C, Sunny</div>
          <div className="day">Thursday: 23°C, Cloudy</div>
          <div className="day">Friday: 24°C, Rain</div>
          {/* ... */}
        </div>
      </div>)}

      <style jsx>{`
        .weather-page {
          
          flex-direction: column;
          padding: 20px;
          background-color: #e5f2ff;
          min-height: 100vh;
        }
        .header {
        
          text-align: center;
          margin-bottom: 30px;
        }
        .header h1 {
          font-size: 2.5em;
          margin: 0;
        }
        .date1 {
          font-size: 15px;
          color: rgba(123, 115, 123, 0.5);
        }
        .date2 {
          font-size: 12px;
          color: rgba(123, 130, 123, 0.5);
        }
        .current-weather {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px;
          background-color: white;
          border-radius: 10px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          margin-bottom: 20px;
        }
        .temperature {
          font-size: 3em;
          font-weight: bold;
        }
        .description {
          font-size: 1.5em;
          color: gray;
          margin-left: 20px;
        }
        .details {
          display: flex;
          justify-content: space-between;
          background-color: white;
          padding: 20px;
          border-radius: 10px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          margin-bottom: 20px;
        }
        .hourly-forecast,
        .weekly-forecast {
          background-color: white;
          padding: 20px;
          border-radius: 10px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          margin-bottom: 20px;
        }
        .hourly-forecast h2,
        .weekly-forecast h2 {
          text-align: center;
          margin-top: 0;
        }
      `}</style>
    </Layout>
  );
}
