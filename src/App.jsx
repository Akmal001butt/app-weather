import React from "react";
import "./App.css";

const App = () => {
  const [city, setCity] = useState("");
  const [weatherInfo, setWeatherInfo] = useState(null);

  function getWeather() {
    const API_KEY = "dbeca8d8e069b18ec903fde8de0ae512";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  }

  return (
    <div className="weather-container">
      <input
        type="text"
        placeholder="Enter Location"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={getWeather}>Get Weather</button>
      {weatherInfo && (
        <div className="weather-info">
          <h3></h3>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
        </div>
      )}
    </div>
  );

};

export default App;
