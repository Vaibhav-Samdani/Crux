import React from "react";
import NewsSidebar from "../components/sidebar/NewsSidebar";
import Alert from "../components/Alert";
import SearchBox from "../components/SearchBox/SearchBox";
// import Weather from "../components/Weather/Weather";
import NavSidebar from "../components/sidebar/NavSidebar";

const Home = () => {
  return (
    <div className="pt-30 mx-20 ">
      <div className="flex">
        <div className="bg-blue-800 w-[1200px] rounded-xl p-4 mb-4">
          <Alert />
        </div>
        <SearchBox />
      </div>
      <div className="flex">
        <NavSidebar />
        <div className="w-[800px] bg-amber-300 mx-10 rounded-xl">map</div>
        <div className=" bg-blue-800 w-[400px] rounded-xl  ">
          <NewsSidebar />
        </div>
      </div>
    </div>
  );
};

export default Home;
