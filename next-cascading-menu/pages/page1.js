"use client";

import Layout from "../components/Layout";
import { useUser } from "@auth0/nextjs-auth0/client";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Page1() {
  const [forecast, setForecast] = useState(null);

  const { user, error, isLoading } = useUser();
  const router = useRouter();

  const [showModal, setShowModal] = useState(true);
  const [locationInput, setLocationInput] = useState("");

  const handleModalResponse = (response) => {
    setShowModal(false);

    if (response) {
      navigator.geolocation.getCurrentPosition(async position => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        const res = await fetch(`/api/forecast?q=${latitude},${longitude}`);
        const data = await res.json();
        setForecast(data);
        console.log(latitude, longitude);
      }, (error) => {
        console.error("Error obtaining geolocation: ", error);

        switch (error.code) {
          case error.PERMISSION_DENIED:
            alert("Geolocation permission was denied. Please enter your location manually.");
            break;
          case error.POSITION_UNAVAILABLE:
            alert("Location information is unavailable. Please enter your location manually.");
            break;
          case error.TIMEOUT:
            alert("The request to get user location timed out. Please enter your location manually.");
            break;
        }
      
      });
    }
  };

  const handleInputChange = (event) => {
    setLocationInput(event.target.value);
  };

  const handleSubmitLocation = async () => {
    const res = await fetch(`/api/forecast?q=${locationInput}`);
    const data = await res.json();
    setForecast(data);
  };

  useEffect(() => {
    if (!isLoading && !user) {
      router.push("/");
    }
  }, [isLoading, user]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return null;
  }

  function getDayOfWeek(dateString) {
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const date = new Date(dateString);
    return days[date.getDay()];
  }

  const dateFromAPI = `${forecast?.location?.localtime}`;
  const dateTomorrow = `${forecast?.forecast?.forecastday[1]?.date}`;
  const dateNextDay = `${forecast?.forecast?.forecastday[2]?.date}`;
  const dateNexterDay = `${forecast?.forecast?.forecastday[3]?.date}`;
  const dayOfWeek = getDayOfWeek(dateFromAPI);
  const dateOfTomorrow = getDayOfWeek(dateTomorrow);
  const dateOfNextDay = getDayOfWeek(dateNextDay);
  const dateOfNexterDay = getDayOfWeek(dateNexterDay);

  return (
    <div>
      {showModal && (
        <div className="modal">
          <p className="modal-q" >Do you allow us to get your geolocation to show local weather?</p>
          <button className="modal-button" onClick={() => handleModalResponse(true)}>Yes</button>
          <button className="modal-button" onClick={() => handleModalResponse(false)}>No</button>
        </div>
      )}

      {!showModal && !forecast && (
        <div className="input-form">
          <input
            value={locationInput}
            onChange={handleInputChange}
            placeholder="Enter city name"
          />
          <button onClick={handleSubmitLocation}>Submit</button>
        </div>
      )}
      {forecast &&
        forecast.forecast &&
        forecast.forecast.forecastday &&(
          <div className="weather-page">
            <div className="header">
              <h1>
                Weather in {forecast.location.name}, {forecast.location.country}
              </h1>
              <div className="date1">
                Current Time: {forecast.location.localtime}, {`${dayOfWeek}`}
              </div>
              <div className="date2">
                Last Updated: {forecast.current.last_updated}
              </div>
            </div>

            <div className="current-weather">
              <div className="temperature">{forecast.current.temp_c}°C</div>
              <div className="description">
                {forecast.current.condition.text}
              </div>
              <img src={forecast.current.condition.icon} alt="Weather Icon" />
            </div>

            <div className="details">
              <div>Humidity: {forecast.current.humidity} </div>
              <div>Wind Speed: {forecast.current.wind_kph} km/h </div>
              <div>Feels Like: {forecast.current.feelslike_c} °C </div>
            </div>

            <div className="hourly-forecast">
              <h2>Day Times</h2>
              <div className="hour">
                Sunrise: {forecast.forecast.forecastday[0].astro.sunrise}
              </div>
              <div className="hour">
                Sunset: {forecast.forecast.forecastday[0].astro.sunset}
              </div>
            </div>

            <div className="weekly-forecast">
              <h2>Weekly Forecast</h2>
              <div className="day">
                {dateOfTomorrow}:{" "}
                {forecast.forecast.forecastday[1].day.maxtemp_c} °C{" "}
                <img
                  className="weekDay"
                  src={forecast.forecast.forecastday[1].day.condition.icon}
                ></img>{" "}
              </div>
              <div className="day">
                {dateOfNextDay}:{" "}
                {forecast.forecast.forecastday[2].day.maxtemp_c} °C{" "}
                <img
                  className="weekDay"
                  src={forecast.forecast.forecastday[2].day.condition.icon}
                ></img>{" "}
              </div>
              <div className="day">
                {dateOfNexterDay}:{" "}
                {forecast.forecast.forecastday[3].day.maxtemp_c} °C{" "}
                <img
                  className="weekDay"
                  src={forecast.forecast.forecastday[3].day.condition.icon}
                ></img>{" "}
              </div>
            </div>
          </div>
        )}
    </div>
  );
}
