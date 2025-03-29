import React from "react";
import Input from "./Input";
import Button from "../Button";

const SearchBox = () => {
  return (
    <div className="w-[600px] ml-4 h-30 bg-[#FFBE9A] p-4 text-center rounded-xl ">
      <div className="text-black text-2xl">Search</div>
      <Input />
      <Button value="Submit" />
    </div>
  );
};

export default SearchBox;
