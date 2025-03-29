import React from "react";
import useWeather from "../context/Weather";

const Button = (props) => {
  const weather = useWeather();
  return (
    <button className="btn" onClick={() => weather.fetchData()}>
      {props.value}
    </button>
  );
};

export default Button;
