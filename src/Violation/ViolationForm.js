import React, { useState } from "react";
const ViolationForm = ({setIsShow})=>{

  const [violation,setViolation] = useState({
    violatorName:"",
    violationType:"",
    drivingLisence:"",
    vechileType:"",
    vechileRegNum:"",
    vechileColor:"",
    ownedBy:"",
    currentDate:"",
    location:""

  })


  const handleDetails= (event) =>{
    const {value} = event.target;
    setViolation((previousValue)=>{
      return{
        ...previousValue,
        [event.target.name]:value
      }
    })
  }

  const handleSubmit =(event)=>{
    event.preventDefault();
    console.log(violation)
  }


  function handleLogin(){
    setIsShow(true);
  }


	return (
		<>
		<div className="w-full mt-10 text-gray-700 flex flex-col items-center justify-center">
		<form onSubmit={handleSubmit} className="w-full max-w-lg">
			<div className="flex flex-wrap -mx-3 mb-6">
				<div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
					<label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
						ViolatorName
					</label>
					<input
						className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
						id="grid-first-name"
						type="text"
						placeholder="Jane"
						onChange={handleDetails}
						name="violatorName"
						// className="py-1 w-full bordeer border-1 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] border-gray-200"
						value={violation.violatorName}
					/>
					<p className="text-red-500 text-xs italic">Please fill out this field.</p>
				</div>
				<div className="w-full md:w-1/2 px-3">
					<label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
						Last Name
					</label>
					<input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe"/>
				</div>
			</div>
			<div className="flex flex-wrap -mx-3 mb-6">
				<div className="w-full px-3">
					<label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
						Vechile Registration Number
					</label>
					<input
					className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
					id="grid-password"
					type="password"
					placeholder="******************"
					onChange={handleDetails}
					name="vechileRegNum"
					// className="py-1 w-full shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] border-gray-200"
					value={violation.vechileRegNum}
					/>
					<p className="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p>
				</div>
			</div>
			<div className="flex flex-wrap -mx-3 mb-2">
				<div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
					<label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-city">
						Driving License
					</label>
					<input
						className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
						id="grid-city"
						type="text"
						placeholder="License"
						onChange={handleDetails}
						name="drivingLisence"
						// className="py-1 w-full shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] border-gray-200"
						value={violation.drivingLisence}
					/>
				</div>
				<div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
					<label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
						Vechile Type
					</label>
					<div className="relative">
						<select
							className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
							id="grid-state"
							nChange={handleDetails} name="vechileType"
						>
							<option>Two wheeler</option>
							<option>Four Wheeler</option>
							<option>12 wheeler</option>
						</select>
						<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
							<svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
						</div>
					</div>
				<div>

			</div>
				</div>
				<div className="flex flex-wrap -mx-3 mb-2">
				<div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
					<label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-city">
						City
					</label>
					<input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" placeholder="Albuquerque"/>
				</div>
				<div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
					<label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
						VechileColor
					</label>
					<div className="relative">
						<select
						className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
						id="grid-state"
						onChange={handleDetails}
            name="vechileColor"
						value={violation.vechileColor}
						>
							<option>Blue</option>
							<option>Black</option>
							<option>Red</option>
						</select>
						<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
							<svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
						</div>
					</div>
				</div>
				<div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
					<label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-zip">
						Zip
					</label>
					<input
						className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
						id="grid-zip"
						type="text"
						placeholder="90210"
						onChange={handleDetails}
            name="currentDate"
						// className="py-1 w-full shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] border-gray-200"
						value={violation.currentDate}
						/>
				</div>
			</div>
	</div>
	<button className="w-full bg-blue-500 font-semibold text-white mt-8 py-2" type="submit">Submit</button>
</form>
</div>
		{/* <div className="w-full  bg-gray-200 text-gray-700 flex flex-col items-center justify-center">
			<div className="w-1/2 p-10 shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-white">
				<div className="flex items-center justify-center">
					<span className="text-lg font-semibold align-middle text-center mb-10">Violation Details</span>
				</div>

			<form className="" onSubmit={(event)=>{handleSubmit(event)}}>

				<div className=" gap-7">
					<label className=" whitespace-nowrap">violatorName</label>
					<input
						onChange={handleDetails}
            name="violatorName"
						className="py-1 w-full bordeer border-1 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] border-gray-200"
						value={violation.violatorName}
						type="text"
					/>
				</div>

				<div className="mt-5 gap-8">
					<label className=" whitespace-nowrap">violationType</label>
					<input
						onChange={handleDetails}
            name="violationType"
						className="py-1 w-full shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] border-gray-200"
						value={violation.violationType}
						type="text"
					/>
				</div>

				<div className=" mt-5 gap-1 ">
					<label className=" whitespace-nowrap">DrivingLisence</label>
					<input
						onChange={handleDetails}
            name="drivingLisence"
						className="py-1 w-full shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] border-gray-200"
						value={violation.drivingLisence}
						type="text"
					/>
				</div>

        <div className=" mt-5 gap-1 ">
					<label className=" whitespace-nowrap">Vechile Type</label>

					<select onChange={handleDetails} name="vechileType" className="py-1 w-full shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] border-gray-200" >
						<option>Two wheeler</option>
						<option>Three wheeler</option>
						<option>Four wheeler</option>
						<option>12 wheeler</option>
					</select>

				</div>

        <div className=" mt-5 gap-1 ">
					<label className=" whitespace-nowrap">Reg Number</label>
					<input
						onChange={handleDetails}
            name="vechileRegNum"
						className="py-1 w-full shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] border-gray-200"
						value={violation.vechileRegNum}
						type="text"
					/>
				</div>

        <div className=" mt-5 gap-1 ">
					<label className=" whitespace-nowrap">Vechile color</label>
					<input
						onChange={handleDetails}
            name="vechileColor"
						value={violation.vechileColor}
						className="py-1 w-full shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] border-gray-200"

						type="text"
					/>
				</div>

        <div className=" mt-5 gap-1 ">
					<label className=" whitespace-nowrap">Ownedby</label>
					<input
						onChange={handleDetails}
            name="ownedBy"
						className="py-1 w-full shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] border-gray-200"
						value={violation.ownedBy}
						type="text"
					/>
				</div>

        <div className=" mt-5 gap-1 ">
					<label className=" whitespace-nowrap">Date</label>
					<input
						onChange={handleDetails}
            name="currentDate"
						className="py-1 w-full shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] border-gray-200"
						value={violation.currentDate}
						type="text"
					/>
				</div>

        <div className=" mt-5 gap-1 ">
					<label className=" whitespace-nowrap">Location</label>
					<input
						onChange={handleDetails}
            name="location"
						className="py-1 w-full shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] border-gray-200"
						value={violation.location}
						type="text"
					/>
				</div>

				<button onClick={handleSubmit} className="text-sm w-full mt-7 px-5 py-2 bg-blue-700 rounded-md text-white font-semibold shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]" type="submit">
					Submit
				</button>

			</form>
				</div>

		</div> */}

    </>
  )
}

export default ViolationForm;
