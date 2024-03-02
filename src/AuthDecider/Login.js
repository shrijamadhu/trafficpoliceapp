import React, { useState } from "react";
const Login = ({setIsShow})=>{

  function handleLogin(){
    setIsShow(true);
  }
  const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	// States for checking the errors
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


	const handleSubmit = (e) => {
		e.preventDefault();
		if (name === "" || email === "" || password === "") {
			setError(true);
		} else {
			setSubmitted(true);
			setError(false);
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
  function handleLogin(){
    setIsShow(false);
  }

  const renderErrorMessage =()=>{

  }

  return(
    <>
		<div className=" rounded-lg w-96 bg-gray-200 text-gray-700 flex flex-col items-center justify-center"></div>
			<div className="w-full max-w-xs">
  <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
        Username
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
			id="username"
			placeholder="Username"
			onChange={handleName}
			value={name}
			type="text"
			/>
    </div>
    <div className="mb-6">
      <label className="block text-gray-700 text-sm font-bold mb-2" for="password">
        Password
      </label>
      <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password"
			type="password"
			placeholder="******************"
			onChange={handlePassword}
			value={password}
			/>
      <p className="text-red-500 text-xs italic">Please choose a password.</p>
    </div>
    <div className="flex items-center justify-between">
      <button onClick={handleLogin} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
        Sign In
      </button>
      <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
        Forgot Password?
      </a>
    </div>
  </form>
  <p className="text-center text-gray-500 text-xs">

  </p>
</div>

</>

  )
}

export default Login;
