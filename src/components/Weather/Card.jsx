import React from "react";
import useWeather from "../../context/Weather";

const Card = () => {
  const weather = useWeather();
  //   const forecast = weather.data.forecast;
  const forcast = weather?.data?.forecast?.forecastday;
  console.log(forcast);

  return (
    <div className="card  flex">
      {/* {forcast?.map((el) => (
        <div>
          <img
            src={el?.condition?.icon}
            alt=""
            className="w-full h-50 object-cover rounded-t-md my-4"
          />
          <h2 className="font-bold text-7xl">{el?.day?.avgtemp_c}&#176;C</h2>
          <h5 className="font-bold text-3xl mb-4">
            {weather.data?.location?.name}, {weather.data?.location?.region}{" "}
            {weather.data?.location?.country}
          </h5>
        </div>
      ))} */}
    </div>
  );
};

export default Card;
