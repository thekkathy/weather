import React from 'react'
import WeatherListItem from './WeatherListItem'

const WeatherList = ({ predictions }) => {
    return (
        <div>
            <ul class="list-group">
                {predictions.map((prediction) => {
                    return <WeatherListItem
                        dt={prediction.dt}
                        weatherMain={prediction.main}
                        weatherDesc={prediction.desc}
                        weatherIcon={prediction.icon}
                    />
                })}
            </ul>
        </div>
    )
}

export default WeatherList
