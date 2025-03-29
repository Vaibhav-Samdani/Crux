import React from "react";
import Card from "./Card";
import Button from "../Button";
import Input from "../SearchBox/Input";

const Weather = () => {
  return (
    <div className="text-center space-y-8  rounded-xl w-[400]">
      <h1 className="text-3xl text-white font-bold mt-4">Weather</h1>
      <div className="mx-10">
        <Card />
        <Button value="Refresh" />
      </div>
    </div>
  );
};

export default Weather;
