import React from 'react'

export default function Weather({data}) {
    if(!data) return null;
  return (
    <div>
        <h2>{data.name}</h2>
        <p>Temperature: {Math.round(data.main.temp - 273.15)}°C</p>
        <p>Weather: {data.weather[0].description}</p>
        <p>Humidity: {data.main.humidity}%</p>
    </div>
  )
}
