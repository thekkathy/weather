import React, { useEffect, useState } from 'react';
import API_KEY from '../keys';
import WeatherCard from './WeatherCard'
import WeatherList from './WeatherList'

function App() {
  const [weather, setWeather] = useState({});
  const [zip, setZip] = useState(10001);
  const [freq, setFreq] = useState("hourly");

  //main weather card
  const [location, setLocation] = useState("");
  const [main, setMain] = useState("");
  const [desc, setDesc] = useState("");
  const [icon, setIcon] = useState("");

  // useEffect(() => {
  //   const url = new URL("https://api.openweathermap.org/data/2.5/weather");
  //   url.searchParams.append("appid", API_KEY);
  //   url.searchParams.append("zip", zip);
  //   url.searchParams.append("units", "imperial");
  //   fetch(url)
  //     .then((resp) => {
  //       return resp.json();
  //     })
  //     .then((obj) => {
  //       setWeather(obj);
  //       console.log(obj);
  //     })
  // }, []);

  const getWeather = async (e) => {
    if (e.key === 'Enter') {
      const url = new URL("https://api.openweathermap.org/data/2.5/weather");
      url.searchParams.append("appid", API_KEY);
      url.searchParams.append("zip", zip);
      url.searchParams.append("units", "imperial");
      await fetch(url)
        .then((resp) => {
          return resp.json();
        })
        .then((obj) => {
          setWeather(obj);
          console.log(obj);
        })
    }
  }

  const getLocation = (weather) => {
    return `${weather.name}, ${weather.sys.country}`;
  }

  const hourlyTest = [{ dt: 'dt', main: "main", desc: "desc", icon: "icon" },
  { dt: 'dt2', main: "main2", desc: "desc2", icon: "icon2" },
  { dt: 'dt3', main: "main3", desc: "desc3", icon: "icon3" },
  { dt: 'dt4', main: "main4", desc: "desc4", icon: "icon4" }];

  const dailyTest = [{ dt: 'ddt', main: "dmain", desc: "ddesc", icon: "dicon" },
  { dt: 'ddt2', main: "dmain2", desc: "ddesc2", icon: "dicon2" },
  { dt: 'ddt3', main: "dmain3", desc: "ddesc3", icon: "dicon3" },
  { dt: 'ddt4', main: "dmain4", desc: "ddesc4", icon: "dicon4" }];


  return (
    <div>
      <main className="p-4">
        <div className="display-3 text-center m-4">
          Weather App
        </div>
        <div className="card m-4">
          <div className="row justify-content-center m-4">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Find current weather with zip code (press enter to display)"
              aria-label="Search"
              onChange={e => { setZip(e.target.value) }}
              onKeyPress={getWeather}
            />
          </div>
          {(typeof weather.main != "undefined") ? <WeatherCard
            heading="CURRENT WEATHER"
            location={getLocation(weather)}
            weatherMain={weather.weather[0].main}
            weatherDesc={weather.weather[0].description}
            weatherIcon={weather.weather[0].icon}
          />
            :
            null}
        </div>

        <div className="card m-4">
          <div className="row justify-content-center m-4">
            <div className="row w-100 m-2 justify-content-center">
              <div className="heading h3">View hourly weather or daily weather for your current location.</div>
            </div>
            <div className="btn-group" role="group" aria-label="Basic example">
              <button type="button" className="btn btn-secondary" onClick={() => setFreq("hourly")}>Hourly</button>
              <button type="button" className="btn btn-secondary" onClick={() => setFreq("daily")}>Daily</button>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="card m-4">
              {(freq === "hourly") ?
                <WeatherList predictions={hourlyTest} />
                :
                <WeatherList predictions={dailyTest} />
              }
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
