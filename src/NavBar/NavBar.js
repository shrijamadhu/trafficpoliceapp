import React from "react";
import { FaHome, FaInfoCircle, FaBriefcase, FaEnvelope } from "react-icons/fa";
import {Link} from "react-router-dom"
const Navbar = () => {
  return (
    <div style={{ background: "linear-gradient(to right, #141e23, #243b67)",borderBottomColor:'gray',borderBottom:'2px solid gray' }} className="w-full bg-gradient-to-r  p-4 py-8">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <span className="text-3xl font-extrabold text-white">🚀 Traffic Police App</span>
          <span className="text-2xl text-pink-300">•</span>
        </div>

        {/* Navigation Links */}
        <div className="flex space-x-6">
          <a
            href="#"
            className="text-white flex items-center hover:text-pink-300 transition duration-300"
          >
            <FaHome className="mr-2" /> Home
          </a>
          <a
            href="#"
            className="text-white flex items-center hover:text-pink-300 transition duration-300"
          >
            <FaInfoCircle className="mr-2" /> About
          </a>
          <Link to={"/auth"}>
          <a
            href="#"
            className="text-white flex items-center hover:text-pink-300 transition duration-300"
          >
            <FaBriefcase className="mr-2" /> Login
          </a>
          </Link>


          

        </div>
      </div>
    </div>
  );
};

export default Navbar;
