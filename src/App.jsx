import React,{useState} from 'react';
import './App.css';
import {WEATHER_KEY} from './Keys'
import WeatherInfo from './components/WeatherInfo';
import FormWether from './components/FormWeather';
import './css/bootwach/bootwach.min.css'
import Titulo from './components/Titulo';
function App() {

  const[clima, setClima] = useState('')

  const getWeather = async (e)=>{
    e.preventDefault();
    const {city, country}= e.target.elements;
    const cityValue = city.value;
    const countryValue = country.value;


    if(cityValue && countryValue){
      const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${cityValue},${countryValue}&appid=${WEATHER_KEY}&units=metric`
      const response = await fetch(apiURL);
      const data = await response.json();
      setClima({
        Temperatura: data.main.temp,
        Descripcion:data.weather[0].description,
        Humedad: data.main.humidity,
        Viento: data.wind.speed,
        Ciudad: data.name,
        Pais:data.sys.country,
        Error: null
    
      });
      

    }
    else{
      setClima({error: 'Please enter country and city'})

    }

  }


  return (
    <React.Fragment>
      <Titulo />
      <div className="conteiner p-4">
        <div className="row">
          <div className="col-md-4 mx-auto">
            <FormWether getWeather={getWeather} />
            <WeatherInfo {...clima} />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
