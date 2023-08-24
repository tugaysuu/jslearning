'use client';

// pages/index.js
import Layout from "../components/Layout";

import { useEffect, useState } from 'react'; 

export default function Page2() {
    const [weather, setWeather] = useState(null);

    useEffect(() => {
        async function fetchWeather() {
            try {
                const res = await fetch('/api/weather');
                if (!res.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await res.json();
                setWeather(data);
            } catch (error) {
                console.error("Error fetching weather data:", error);
            }
        }
        
        fetchWeather();
    }, []);

    return (
      <Layout>
        <div>
            {weather && weather.location && weather.current && (
                <div>
                    <h1>{weather.location.name}</h1>
                    <p>Temperature: {weather.current.temp_c}°C</p>
                    <p>Condition: {weather.current.condition.text}</p>
                </div>
            )}
        </div>
      </Layout>
    );
}
