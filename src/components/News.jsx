import React from "react";

const News = (props) => {
  return (
    <div>
      <div className="disaterType  text-center text-2xl">{props.type}</div>
      <div className="bg-white p-4 rounded-xl">
        <div className="flex justify-between">
          <div className="Location font-semibold"> Location :Vadodra</div>
        </div>
        <div className="time ">Time : 04 Sep 2024 23:59:10</div>

        <div className="range font-semibold"> Serverity : Medium</div>
        <div className="description">
          A light thunderstorm struck Vadodara this evening, bringing moderate
          rain and occasional lightning. While there have been no significant
          disruptions so far, residents are advised to remain cautious and avoid
          outdoor activities unless...more
        </div>
      </div>
    </div>
  );
};

export default News;
