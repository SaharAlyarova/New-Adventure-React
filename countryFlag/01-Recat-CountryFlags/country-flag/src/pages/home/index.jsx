import React, { useId }  from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import {uid} from 'uid'

const HomePage = () => {
  const [countries, setCountries]=useState([]);
  useEffect(()=>{
    fetch(" https://restcountries.com/v2/all")
    .then((response)=>response.json())
    .then((data)=>setCountries(data));
  }, [])
 
  return (
    <div className='home-page'>
<div>
  {countries.map((element)=>{
    return (
      <div key={uid()}>
        <img src={element.flags.png}/>
        <h3>{element.name}</h3>
        <p>Population: {element.population}</p>
        <p>Region: {element.region}</p>
        <p>Capital: {element.capital}</p>
      </div>
    );
  })}
</div>
    </div>
  )
}

export default HomePage