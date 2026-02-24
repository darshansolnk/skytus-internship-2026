import { useState } from "react";
import SearchBox from "./components/SearchBox";
import WeatherCard from "./components/WeatherCard";
import Loader from "./components/Loader";
import ErrorMessage from "./components/ErrorMessage";
import { getWeatherByCity } from "./services/weatherService";

function App() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchWeather = async (city) => {
    setLoading(true);
    setError("");
    setWeather(null);

    try {
      const data = await getWeatherByCity(city);
      setWeather(data);
    } catch (err) {
      setError("City not found. Please enter a valid city name.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app-container">
      <h1>🌦 Weather App</h1>

      <SearchBox onSearch={fetchWeather} />

      {loading && <Loader />}
      {error && <ErrorMessage message={error} />}
      {weather && <WeatherCard weather={weather} />}
    </div>
  );
}

export default App;