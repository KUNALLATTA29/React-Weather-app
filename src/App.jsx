import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import Search from './Component/Search/Search'
import Weather from './Component/Weather/Weather'
import './App.css'
export default function App() {
  const [weather, setweather] = useState(null)


  const fetch = async(city)=>{
    const apikey = '0f63cc31f15de54834505b5363badf19';
    let response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`)
    setweather(response.data)
  }

  
  return (
    <div className='box'>
      <h1>Weather App</h1>
      <Search onSearch={fetch} />
      <Weather data={weather} />
    </div>
  )
}
