import React from "react"
import { useState } from "react";
const SignUp = ({setIsShow})=>{

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

	return (
		<>
		<div className="w-96 bg-gray-200 text-gray-700 flex flex-col items-center justify-center">
			<div className="w-96 p-10 shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-white">
				<div className="flex items-center justify-center">
					<span className="text-lg font-semibold align-middle text-center mb-10">User Registration</span>
				</div>
			<div className="messages">
				{errorMessage()}
				{successMessage()}
			</div>

			<form className="">

				<div className="flex gap-7">
					<label className="label">Name</label>
					<input
						onChange={handleName}
						className="w-full bordeer border-1 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] border-gray-200"
						value={name}
						type="text"
					/>
				</div>

				<div className="mt-5 flex gap-8">
					<label className="label">Email</label>
					<input
						onChange={handleEmail}
						className="w-full shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] border-gray-200"
						value={email}
						type="email"
					/>
				</div>

				<div className="flex mt-5 gap-1 ">
					<label className="label">Password</label>
					<input
						onChange={handlePassword}
						className="w-full shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] border-gray-200"
						value={password}
						type="password"
					/>
				</div>

				<button onClick={handleSubmit} className="text-sm w-full mt-7 px-5 py-2 bg-blue-700 rounded-md text-white font-semibold shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]" type="submit">
					Submit
				</button>
				<button className="text-sm w-full mt-2 px-5 py-2 bg-blue-700 rounded-md text-white font-semibold shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]" onClick={handleLogin}>Login</button>
			</form>
				</div>

		</div>

    </>
  )
}

export default SignUp;
