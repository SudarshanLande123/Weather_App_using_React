import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function SearchBox({ updateInfo }) {
    let [city, setCity] = useState("");
    let [error, setError] = useState(false);

    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "489db4df1b10dccc6b1ca95c2dc4068a";

    let getWeatherInfo = async () => {
        try {
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let jsonResponse = await response.json();
            console.log(jsonResponse);

            if (jsonResponse.cod !== 200) {
                setError(true);
                return null;
            }

            let result = {
                city: jsonResponse.name,
                temp: jsonResponse.main.temp,
                minTemp: jsonResponse.main.temp_min,
                maxTemp: jsonResponse.main.temp_max,
                humidity: jsonResponse.main.humidity,
                feelslike: jsonResponse.main.feels_like,  // fixed key
                weather: jsonResponse.weather[0].description
            };
            console.log(result);

            setError(false);
            return result;

        } catch (err) {
            setError(true);
            return null;
        }
    };

    let handleSubmit = async (event) => {
        event.preventDefault();
        
        let newInfo = await getWeatherInfo();

        if (newInfo) {
            updateInfo(newInfo);
            setCity("");
        }
    };

    return (
        <div className='searchbox'>
            <h3>Search for the Weather</h3>

            <form onSubmit={handleSubmit}>
                <TextField
                    id="city"
                    label="City Name"
                    variant="outlined"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    required
                />

                <br /><br />

                <Button variant="contained" type="submit">
                    Search
                </Button>

                {error && <p style={{ color: "red" }}>No such place exists!</p>}

                <br /><br />
            </form>
        </div>
    );
}
