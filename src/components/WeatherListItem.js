import React from 'react'

const WeatherListItem = ({ dt, weatherMain, weatherDesc, weatherIcon }) => {
    return (
        <div>
            <li class="list-group-item">{dt}, {weatherMain}, {weatherDesc}, {weatherIcon}</li>
        </div>
    )
}

export default WeatherListItem
