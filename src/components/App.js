
import React, { useState, useEffect } from 'react';
import WeatherDisplay from './WeatherDisplay';
import './../styles/App.css';

const App = () => {

   // Initialize weather data state with default values
  const [weatherData, setWeatherData] = useState({ temperature: 0, conditions: "" });

  // Simulate fetching weather data
  useEffect(() => {
    // Mock weather data
    const mockWeatherData = { temperature: 25, conditions: "Sunny" };

    // Update weather data state
    setWeatherData(mockWeatherData);
  }, []);

  return (
    <div>
      {/* Pass weather data as prop to WeatherDisplay component */}
      <WeatherDisplay weather={weatherData} />
    </div>
  );
}

export default App
