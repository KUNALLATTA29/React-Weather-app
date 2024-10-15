import React from 'react'
import { useState } from 'react'

export default function Search({onSearch}) {
    const [city, setCity] = useState('');

    const handleSubmit = (e)=>{
        e.preventDefault();
        if(city){
            onSearch(city);
            setCity('');
        }
    }
  return (
    <form onSubmit={handleSubmit}>
        <input
        placeholder='Enter City'
        value={city}
        onChange={(e)=>setCity(e.target.value)}
        type='text'
        />
        <button type='submit'>Submit</button>
    </form>
  )
}
