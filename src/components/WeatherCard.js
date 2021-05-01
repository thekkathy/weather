import React from 'react'

const WeatherCard = ({heading, location, weatherMain, weatherDesc, weatherIcon}) => {
    return (
        <div className="card m-4">
            <div className="row justify-content-center m-4">
                <div className="row w-100 m-2 justify-content-center">
                    <div className="heading h3">{heading}</div>
                </div>
                <div className="row w-100 m-2 justify-content-center">
                    <div className="location h3">{location}</div>
                </div>
                <div className="row w-100 mt-3 justify-content-center">
                    <div className="weather-main display-4">{weatherMain}</div>
                </div>
                <div className="row w-100 m-1 justify-content-center">
                    <div className="weather-desc h4">{weatherDesc}</div>
                </div>
                <div className="row w-100 m-1 justify-content-center">
                    <div className="weather-icon h4">{weatherIcon}</div>
                </div>
            </div>
        </div>
    )
}

export default WeatherCard
