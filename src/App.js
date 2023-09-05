import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import './index.css';
import Header from './components/Header';
import WeatherCard from './components/WeatherCard';
import Forecast from './components/Forecast';
import { Loader } from 'semantic-ui-react';

const URL = `https://api.openweathermap.org/data/3.0/onecall`;
const API_KEY = `384e00a014d16c515e94898e7501082a`

function App() {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [city, setCity] = useState('');
  const [temperature, setTemperature] = useState(null);
  const [humidity, setHumidity] = useState(null);
  const [sunrise, setSunrise] = useState(null);
  const [sunset, setSunset] = useState(null);
  const [icon, setIcon] = useState('');
  const [forecast, setForecast] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function(position){
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);
    });

    axios.get(`${URL}?lat=${latitude}&lon=${longitude}&exclude=hourly,minutely&units=metric&appid=${API_KEY}`)
    .then((weatherData) => {
      setLoading(false);
      setTemperature(weatherData.data.current.temp);
      setHumidity(weatherData.data.current.humidity);
      setSunset(weatherData.data.current.sunset);
      setSunrise(weatherData.data.current.sunrise);
      setCity(weatherData.data.timezone);
      setIcon(weatherData.data.current.weather[0].main);
      setForecast(weatherData.data.daily);
    })
  }, [latitude, longitude])

  return (
    <div className="main">
      <Header />
      {loading ? (
      <div class="ui active centered inline loader">
        <p>Loading... Please wait!</p>
      </div>
      ) : (
      <WeatherCard 
      temperature={temperature}
      humidity={humidity}
      sunrise={sunrise}
      sunset={sunset}
      city={city}
      icon={icon}
      />
      )}
      
      <Forecast forecast={forecast} />
    </div>
  );
}

export default App;
