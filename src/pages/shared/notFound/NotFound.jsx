import React from "react";
import { Link } from "react-router-dom";
import notFound from "../../../assets/notFound.jpg";

const NotFound = () => {
  return (
    <div>
      <div className="class">
        <img className="w-full mx-auto lg:w-2/3 h-1/6" src={notFound} alt="" />
        <button className="flex flex-auto mx-auto my-5">
          <a className="relative inline-block text-sm font-medium text-[#FF6A3D] group active:text-orange-500 focus:outline-none focus:ring">
            <span className="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-[#FF6A3D] group-hover:translate-y-0 group-hover:translate-x-0"></span>

            <span className="relative block px-8 py-3 bg-[#1A2238] border border-current">
              <Link to="/">Go Home</Link>
            </span>
          </a>
        </button>
      </div>
    </div>
  );
};

export default NotFound;
