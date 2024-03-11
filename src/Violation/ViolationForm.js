import React, { useState } from "react";

const ViolationForm = ({ setIsShow }) => {
  const [violation, setViolation] = useState({
    // violatorName: "",
    // violationType: "",
    // drivingLisence: "",
    // vechileType: "",
    // vechileRegNum: "",
    // vechileColor: "",
    // ownedBy: "",
    // currentDate: "",
    // location: "",
    violatorname: "",
    violationtype: "",
    vechi1etype: "",
    vechi1eregnum: "",
    vechi1ecolor: "",
    ownedby: "",
    currentdate: "",
    location: "",
  });

  const [currentStep, setCurrentStep] = useState(1);

  const handleDetails = (event) => {
    const { value, name } = event.target;
    setViolation((previousValue) => ({
      ...previousValue,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch("http://localhost:8081/api/v1/addviolation", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(violation),
    });
    if (response.ok) {
      const resp = await response.json();
      alert("Your Response is successfully submitted");
      window.location = "/";
    }
  };

  const handleNext = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  function handleLogin() {
    setIsShow(true);
  }

  return (
    <>
      <div
        style={{ background: "linear-gradient(to right, #141e23, #243b67)" }}
        className="h-screen px-24 flex items-center justify-center bg-gradient-to-b from-transparent via-gray-800 to-transparent"
      >
        <div className="sdfdf bg-white p-8 rounded-md shadow-lg">
          <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">
            Violation Details - Step {currentStep}
          </h1>

          <form className="mt-10" onSubmit={(event) => handleSubmit(event)}>
            {/* Render first four fields in step 1 */}
            {currentStep === 1 && (
              <>
                <div className="mb-4">
                  <label className="block text-sm font-semibold text-gray-600">
                    Violator Name
                  </label>
                  <input
                    onChange={handleDetails}
                    name="violatorname"
                    className="input-fields"
                    value={violation.violatorname}
                    type="text"
                  />
                </div>

                {/* Violation Type */}
                <div className="mb-4">
                  <label className="block text-sm font-semibold text-gray-600">
                    Violation Type
                  </label>
                  <input
                    onChange={handleDetails}
                    name="violationtype"
                    className="input-fields"
                    value={violation.violationtype}
                    type="text"
                  />
                </div>

                {/* Driving License */}
                <div className="mb-4">
                  <label className="block text-sm font-semibold text-gray-600">
                    Driving License
                  </label>
                  <input
                    onChange={handleDetails}
                    name="drivingLisence"
                    className="input-fields"
                    value={violation.drivingLisence}
                    type="text"
                  />
                </div>

                {/* Vehicle Type */}
                <div className="mb-4">
                  <label className="block text-sm font-semibold text-gray-600">
                    Vehicle Type
                  </label>
                  <select
                    onChange={handleDetails}
                    name="vechi1etype"
                    className="select-field w-full border-1"
                  >
                    <option>Two Wheeler</option>
                    <option>Three Wheeler</option>
                    <option>Four Wheeler</option>
                    <option>12 Wheeler</option>
                  </select>
                </div>
              </>
            )}

            {/* Render next five fields in step 2 */}
            {currentStep === 2 && (
              <>
                {/* Vehicle Registration Number */}
                <div className="mb-4">
                  <label className="block text-sm font-semibold text-gray-600">
                    Vehicle Registration Number
                  </label>
                  <input
                    onChange={handleDetails}
                    name="vechi1eregnum"
                    className="input-fields"
                    value={violation.vechi1eregnum}
                    type="text"
                  />
                </div>

                {/* Vehicle Color */}
                <div className="mb-4">
                  <label className="block text-sm font-semibold text-gray-600">
                    Vehicle Color
                  </label>
                  <input
                    onChange={handleDetails}
                    name="vechi1ecolor"
                    className="input-fields"
                    value={violation.vechi1ecolor}
                    type="text"
                  />
                </div>

                {/* Owner Details */}
                <div className="mb-4">
                  <label className="block text-sm font-semibold text-gray-600">
                    Owner Details
                  </label>
                  <input
                    onChange={handleDetails}
                    name="ownedby"
                    className="input-fields"
                    value={violation.ownedby}
                    type="text"
                  />
                </div>

                {/* Date */}
                <div className="mb-4">
                  <label className="block text-sm font-semibold text-gray-600">
                    Date
                  </label>
                  <input
                    onChange={handleDetails}
                    name="currentdate"
                    className="input-fields"
                    value={violation.currentdate}
                    type="date" // Use type="date" for date inputs
                  />
                </div>

                {/* Location */}
                <div className="mb-4">
                  <label className="block text-sm font-semibold text-gray-600">
                    Location
                  </label>
                  <input
                    onChange={handleDetails}
                    name="location"
                    className="input-fields"
                    value={violation.location}
                    type="text"
                  />
                </div>
              </>
            )}

            <div className="flex justify-between">
              {currentStep !== 1 && (
                <button
                  onClick={() => setCurrentStep(currentStep - 1)}
                  className="back-button bg-gray-500 text-white py-2 px-4 rounded-md hover:bg-gray-600 focus:outline-none focus:shadow-outline"
                  type="button"
                >
                  Back
                </button>
              )}

              {currentStep !== 2 && (
                <button
                  onClick={handleNext}
                  className="next-button bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                  type="button"
                >
                  Next
                </button>
              )}

              {currentStep === 2 && (
                <button
                  onClick={handleSubmit}
                  className="submit-button bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Submit
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ViolationForm;
