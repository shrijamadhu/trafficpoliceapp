import React, { useState } from "react";

const EmergencyForm = ({ setIsShow }) => {
  const [emergency, setEmergency] = useState({
    location: "",
    emergencytype: "",
    effectedcount: "",
    priority: "",
  });

  const handleDetails = (event) => {
    const { value } = event.target;
    setEmergency((previousValue) => ({
      ...previousValue,
      [event.target.name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(emergency);
  };

  function handleLogin() {
    setIsShow(true);
  }

  return (
    <>
      <div style={{ background: "linear-gradient(to right, #141e23, #243b67)"}} className="w-full pt-10 pb-24  text-gray-700 flex flex-col items-center justify-center">
        <div className="sdfdf p-10 shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-white">
          <div className="flex items-center justify-center">
            <span className="text-lg font-semibold align-middle text-center mb-10">
              Emergency Details
            </span>
          </div>

          <form onSubmit={(event) => handleSubmit(event)}>
            <div className="grid grid-cols-1 gap-5">
              <label className="whitespace-nowrap">Location</label>
              <input
                onChange={handleDetails}
                name="location"
                className="input-fields"
                value={emergency.location}
                type="text"
              />
            </div>

            <div className="mt-5 grid grid-cols-1 gap-5">
              <label className="whitespace-nowrap">Emergency Type</label>
              <input
                onChange={handleDetails}
                name="emergencytype"
                className="input-fields"
                value={emergency.emergencytype}
                type="text"
              />
            </div>

            <div className="mt-5 grid grid-cols-1 gap-5">
              <label className="whitespace-nowrap">
                Number of People Effected
              </label>
              <input
                onChange={handleDetails}
                name="effectedcount"
                className="input-fields"
                value={emergency.effectedcount}
                type="text"
              />
            </div>

            <div className="mt-5 grid grid-cols-1 gap-5">
              <label className="whitespace-nowrap">Priority</label>
              <input
                onChange={handleDetails}
                name="priority"
                className="input-fields"
                value={emergency.priority}
                type="text"
              />
            </div>

            <button
              onClick={handleSubmit}
              className="submit-button mt-7 py-2 px-4 bg-blue-700 text-white rounded-md font-semibold"
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default EmergencyForm;
