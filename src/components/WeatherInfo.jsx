import React from 'react'

const WeatherInfo = (props) => {
  return (
    <div>
        {
            props.error&&
            <div className='alert alert-danger'>
                <p>
                    {props.error}
                </p>
            </div>
        }
        {
            props.Temperatura?
            <div className='card card-body bg-secondary'>
            <p>
                Ubication: &nbsp; { props.Ciudad }, { props.Pais }
            </p>
            <p>
                Temp: &nbsp; { props.Temperatura } °C, &nbsp; { props.Descripcion }
            </p>
            <p>
                Humidity: &nbsp; { props.Humedad }
            </p>
            <p>
                Wind speed: &nbsp;{ props.Viento } m/s
            </p>
            </div>
            :
            <div className='card card-body'>
                <p>
                Enter country and city
                </p>

            </div>
        }
        
        
    </div>
  )
}

export default WeatherInfo