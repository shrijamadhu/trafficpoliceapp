import React, { useState } from "react";
const SignUp = ({ setIsShow, user, setUser }) => {
  function handleLogin() {
    setIsShow(true);
  }
  const [username, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const handleName = (e) => {
    setName(e.target.value);
    setSubmitted(false);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
    setSubmitted(false);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
    setSubmitted(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const details = { username, email, password };
    console.log(details);
    try {
      const response = await fetch("http://localhost:8081/api/v1/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(details),
      });

      if (!response.ok) {
        throw new Error("Registration failed");
      }

      const resp = await response.json();
      setUser(resp);
    } catch (error) {
      console.error(error);
      setError(true);
    }
  };

  const successMessage = () => {
    return (
      <div
        className="success"
        style={{
          display: submitted ? "" : "none",
        }}
      >
        <h1> successfully registered!!</h1>
      </div>
    );
  };

  const errorMessage = () => {
    return (
      <div
        className="error"
        style={{
          display: error ? "" : "none",
        }}
      >
        <h1>Please enter all the fields</h1>
      </div>
    );
  };

  return (
    <>
      <div className="w-96 bg-gray-200 text-gray-700 flex flex-col items-center justify-center">
        <div className="w-96 p-10 shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-white">
          <div className="flex items-center justify-center">
            <span className="text-lg font-semibold align-middle text-center mb-5">
              User Registration
            </span>
          </div>

          <form className="">
            <div className="flex gap-3">
              <input
                onChange={handleName}
                className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                value={username}
                name="username"
                placeholder="userName"
                type="text"
              />
            </div>

            <div className="mt-5 flex gap-8">
              <input
                onChange={handleEmail}
                className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                value={email}
                placeholder="email"
                type="email"
              />
            </div>

            <div className="flex mt-5 gap-1 ">
              <input
                onChange={handlePassword}
                className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                value={password}
                placeholder="password"
                type="password"
              />
            </div>

            <button
              onClick={handleSubmit}
              className="text-sm w-full mt-7 px-5 py-2 bg-blue-700  text-white font-semibold shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]"
              type="submit"
            >
              Submit
            </button>
            <button
              className="text-sm w-full mt-2 px-5 py-2 bg-blue-700  text-white font-semibold shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] bg-gray-300 hover:bg-gray-400"
              onClick={handleLogin}
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;
