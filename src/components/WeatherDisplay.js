import React from 'react';

function WeatherDisplay({ weather }) {
  // Determine color based on temperature
  const temperatureColor = weather.temperature > 20 ? 'red' : 'blue';

  return (
    <div>
      {/* Display temperature with inline style for color */}
      <p style={{ color: temperatureColor }}>Temperature: {weather.temperature}</p>
      
      {/* Display weather conditions */}
      <p>Conditions: {weather.conditions}</p>
    </div>
  );
}

export default WeatherDisplay;
