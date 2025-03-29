import React from "react";
import { IoMdHome } from "react-icons/io";
import { IoEarth } from "react-icons/io5";
import { FaPlus } from "react-icons/fa";
import { IoMdContact } from "react-icons/io";
import { BiSolidBookAlt } from "react-icons/bi";

const Navbar = () => {
  return (
    <div className="fixed w-full z-10">
      <div className="navbar bg-blue-800 text-primary-content flex justify-between h-24">
        <div className="">
          <a className="text-2xl font-semibold px-8">Neutrons</a>
        </div>

        <div className="flex space-x-20 font-semibold">
          <a href="" className="flex items-center">
            <IoMdHome className="text-3xl mr-0.5 " />
            <span className="text-xl">Home</span>
          </a>
          <a href="" className="flex items-center">
            <IoEarth className="text-2xl mr-0.5" />
            <span className="text-xl">Disaster Insights</span>
          </a>
          <a href="" className="flex items-center">
            <FaPlus className="text-2xl mr-0.5" />
            <span className="text-xl">Survival Tips</span>
          </a>
          {/* <a href="" className="flex">
            <IoMdContact className="text-xl mr-0.5" />
            Contact
          </a> */}
          <a href="" className="flex items-center">
            <BiSolidBookAlt className="text-2xl mr-0.5" />
            <span className="text-xl">About us</span>
          </a>
        </div>
        <div className=" px-4">
          <button className="btn btn-ghost text-xl p-6 bg-black ">Login</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
