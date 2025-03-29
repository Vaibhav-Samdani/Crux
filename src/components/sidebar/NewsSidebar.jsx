import React from "react";
import News from "../News";

const NewsSidebar = () => {
  return (
    <div className=" p-4 bg-blue-800 text-white w-[400px] rounded-2xl ml-30w-40">
      {/* <div className="h-40">
        <span>Aqi is :</span>
        <select className="border-2 bg-white text-black rounded-sm ml-10">
          <option value="day1" className="text-black">
            Day 1
          </option>
          <option value="day2" className="text-black">
            Day 2
          </option>
          <option value="day3" className="text-black">
            Day 3
          </option>
        </select>
        <div className="text-center m-10 text-2xl bg-[#]">140 AQI</div>
      </div> */}

      <div className=" pt-2">
        <div className="text-center text-2xl">Alerts News :-</div>
        <div>
          <div className="bg-yellow-300 rounded-xl p-2 text-black">
            <News type="Flood" />
          </div>

          <div className="bg-red-600 rounded-xl p-2 text-black mt-2">
            <News type="Heavy Rain" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsSidebar;
