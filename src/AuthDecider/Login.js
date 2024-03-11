import React, { useState } from "react";

const Login = ({ setIsShow, user, setUser }) => {
  const [username, setName] = useState("");
  const [password, setPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const handleName = (e) => {
    setName(e.target.value);
    setSubmitted(false);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
    setSubmitted(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const details = { username, password };
    console.log(details);
    try {
      const response = await fetch("http://localhost:8081/api/v1/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(details),
      });

      if (!response.ok) {
        throw new Error("Registration failed");
      }
      console.log("successfull");
      const resp = await response.json();
      setUser(resp);
      console.log(resp);
    } catch (error) {
      console.error(error);
      setError(true);
    }
  };

  const successMessage = () => {
    return (
      <div
        className="success bg-green-500 text-white py-2 px-4 rounded-md my-4"
        style={{
          display: submitted ? "" : "none",
        }}
      >
        <h1 className="font-bold">Successfully logged in!</h1>
      </div>
    );
  };

  const errorMessage = () => {
    return (
      <div
        className="error bg-red-500 text-white py-2 px-4 rounded-md my-4"
        style={{
          display: error ? "" : "none",
        }}
      >
        <h1 className="font-bold">Please enter both username and password</h1>
      </div>
    );
  };

  function handleLogin() {
    setIsShow(false);
  }

  return (
    <div className="flex w-96 items-center justify-center h-screen bg-gradient-to-r w-80">
      <div className="w-full max-w-md bg-white shadow-md rounded-md px-8 py-6">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-gray-800">Login</h1>
        </div>
        <form>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="username"
            >
              Username
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              placeholder="Username"
              onChange={handleName}
              value={username}
              type="text"
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="******************"
              onChange={handlePassword}
              value={password}
            />
          </div>
          <button
            type="button"
            onClick={handleSubmit}
            className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Login
          </button>
          <button
            onClick={handleLogin}
            className="mt-4 w-full bg-gray-300 hover:bg-gray-400 text-gray-700 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            Sign Up
          </button>
        </form>
        {successMessage()}
        {errorMessage()}
      </div>
    </div>
  );
};

export default Login;
