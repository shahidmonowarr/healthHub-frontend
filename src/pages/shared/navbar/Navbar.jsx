import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const menuItems = (
    <React.Fragment>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="about">About</Link>
      </li>
      <li>
        <Link to="appointment">Appointment</Link>
      </li>
      <li>
        <Link to="reviews">Reviews</Link>
      </li>
      <li>
        <Link to="contact">Contact Us</Link>
      </li>
    </React.Fragment>
  );
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menuItems}
          </ul>
        </div>
        <Link to="/" className=" normal-case">
          <img
            className=" w-5/6 overflow-hidden m-0"
            src="https://i.ibb.co/w4XnbD3/cover.png"
            alt=""
          />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{menuItems}</ul>
      </div>
      <div className="navbar-end">
        <Link to="/login" className="relative cursor-pointer normal-case ">
          <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-black rounded"></span>
          <span className="relative inline-block w-full h-fit px-6 py-2 text-base font-bold bg-white border-2 border-black rounded hover:bg-yellow-400 xl:text-xl fold-bold">
            Login
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
