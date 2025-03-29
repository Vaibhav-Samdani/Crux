import React from "react";
import useWeather from "../../context/Weather";

const Input = () => {
  const weather = useWeather();
  console.log(weather);
  return (
    <label class="input w-4/5 mr-4 ">
      <svg
        className="h-[1em] opacity-50"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <g
          stroke-linejoin="round"
          stroke-linecap="round"
          stroke-width="2.5"
          fill="none"
          stroke="currentColor"
        >
          <circle cx="11" cy="11" r="8"></circle>
          <path d="m21 21-4.3-4.3"></path>
        </g>
      </svg>
      <input
        className="input-field rounded-sm  "
        type="text"
        value={weather.searchCity}
        onChange={(e) => weather.setSearchCity(e.target.value)}
      />
    </label>
  );
};

export default Input;
