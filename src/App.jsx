import React from "react";
import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import { useEffect } from "react";
import useWeather from "./context/Weather";

const App = () => {
  const weather = useWeather();
  console.log(weather);
  useEffect(() => {
    weather.fetchDataForCurrentLocation();
  }, []);

  return (
    <div>
      <Navbar />
      <Home />
    </div>
  );
};

export default App;
