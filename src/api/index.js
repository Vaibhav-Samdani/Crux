const api_key = "29ea7d3fd225492aa39144846252903";
const baseURL = `https://api.weatherapi.com/v1/current.json?key=${api_key}`;

const getWeatherDataForCity = async (city) => {
  const response = await fetch(`${baseURL}&q=${city}&aqi=yes`);

  console.log(response);
  return await response.json();
};

const getWeatherDataForCurrentLocation = async (lat, lon) => {
  const response = await fetch(
    `http://api.weatherapi.com/v1/forecast.json?key=${api_key}&q=${lat},${lon}&days=3&api=yes`
  );

  console.log(response);
  return await response.json();
};

const getWeatherDataForthreeDays = async (lat, lon) => {
  // http://api.weatherapi.com/v1/forecast.json?key=29ea7d3fd225492aa39144846252903&q=48.8567,2.3508&days=3

  const response = await fetch(
    `http://api.weatherapi.com/v1/forecast.json?key=${api_key}&q=${lat},${lon}&days=3`
  );
  console.log(response);
};

export {
  getWeatherDataForCity,
  getWeatherDataForCurrentLocation,
  getWeatherDataForthreeDays,
};
