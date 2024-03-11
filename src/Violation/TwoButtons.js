import React from "react";
import { Link } from "react-router-dom";

const TwoButtons = () => {
  return (
    <div className="w-full h-60 px-5 flex justify-center flex-col gap-4 items-center">
      <Link to={"/violationForm"}>
        <button className="button-primary w-full hover:opacity-90 transition duration-300 focus:outline-none focus:ring focus:border-blue-300">
          Traffic Violation
        </button>
      </Link>
      <Link to={"/emergencyForm"}>
        <button className="button-secondary w-full hover:opacity-90 transition duration-300 focus:outline-none focus:ring focus:border-blue-300">
          Medical Emergency
        </button>
      </Link>
    </div>
  );
};

export default TwoButtons;
