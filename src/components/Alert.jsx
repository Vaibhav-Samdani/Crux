import React from "react";
import { GoDotFill } from "react-icons/go";

const Alert = () => {
  return (
    <div>
      <div className="flex items-center space-x-2">
        <span className="text-white">Recent Alerts </span>
        <GoDotFill className="text-red-600 text-2xl" />
      </div>
      <div className="bg-white text-black rounded-lg p-4 mt-2">
        U’khand to adopt weather impact forecast service for better disaster
        prep
      </div>
    </div>
  );
};

export default Alert;
