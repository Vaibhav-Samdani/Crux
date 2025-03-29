import { createContext } from "react";
import { useContext, useState } from "react";
import {
  getWeatherDataForCity,
  getWeatherDataForCurrentLocation,
  getWeatherDataForthreeDays,
} from "../api/index.js";

const WeatherContext = createContext(null);

const useWeather = () => {
  return useContext(WeatherContext);
};

export default useWeather;

export const WeatherProvider = (props) => {
  const [data, setdata] = useState(null);
  const [searchcity, setSearchCity] = useState(null);

  const fetchData = async () => {
    const res = await getWeatherDataForCity(searchcity);
    if (res) {
      setdata(res);
    }
  };

  const fetchDataForCurrentLocation = async (lat, lon) => {
    navigator.geolocation.getCurrentPosition((position) => {
      console.log(position);
      getWeatherDataForCurrentLocation(
        position.coords.latitude,
        position.coords.longitude
      )
        .then((data) => setdata(data))
        .catch((error) => {
          console.error("Error fetching weather data:", error);
        });
    });
  };

  return (
    <WeatherContext.Provider
      value={{
        data,
        searchcity,
        setSearchCity,
        fetchData,
        fetchDataForCurrentLocation,
      }}
    >
      {props.children}
    </WeatherContext.Provider>
  );
};
