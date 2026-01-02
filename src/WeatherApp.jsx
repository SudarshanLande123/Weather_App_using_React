import { useState } from "react";
import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";
import "./App.css";
export default function WeatherApp () {
    const [weatherinfo , setWeatherinfo] = useState({
        city: "Pune",
        feelslike: 24.34,
        humidity: 44,
        maxTemp: 24.67,
        minTemp: 24.67,
        temp:24.67,
        weather: "scattered clouds",
    });

    let updateInfo = (newInfo) =>{
        setWeatherinfo(newInfo);
    }

    return(
        <div>
            <h2>Weather App</h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherinfo}/>
        </div>
    )
}