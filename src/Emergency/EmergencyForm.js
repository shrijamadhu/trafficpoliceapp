import React from "react"
import { useState } from "react";
const EmergencyForm = ({setIsShow})=>{

  const [emergency,setEmergency] = useState({
    location:"",
    emergencytype:"",
    effectedcount:"",
    priority:""
  })


  const handleDetails= (event) =>{
    const {value} = event.target;
    setEmergency((previousValue)=>{
      return{
        ...previousValue,
        [event.target.name]:value
      }
    })
  }

  const handleSubmit =(event)=>{
    event.preventDefault();
    console.log(emergency)
  }


  function handleLogin(){
    setIsShow(true);
  }


	return (
		<>
		<div className="w-full  bg-gray-200 text-gray-700 flex flex-col items-center justify-center">
			<div className="w-1/2 p-10 shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-white">
				<div className="flex items-center justify-center">
					<span className="text-lg font-semibold align-middle text-center mb-10">Emergency Details</span>
				</div>

			<form className="" onSubmit={(event)=>{handleSubmit(event)}}>

				<div className=" gap-7">
					<label className=" whitespace-nowrap">Location</label>
					<input
						onChange={handleDetails}
            name="location"
						className="py-1 w-full bordeer border-1 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] border-gray-200"
						value={emergency.location}
						type="text"
					/>
				</div>

				<div className="mt-5 gap-8">
					<label className=" whitespace-nowrap">Emergency Type</label>
					<input
						onChange={handleDetails}
            name="emergencytype"
						className="py-1 w-full shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] border-gray-200"
						value={emergency.emergencytype}
						type="text"
					/>
				</div>

				<div className=" mt-5 gap-1 ">
					<label className=" whitespace-nowrap">Number of People Effected</label>
					<input
						onChange={handleDetails}
            name="effectedcount"
						className="py-1 w-full shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] border-gray-200"
						value={emergency.effectedcount}
						type="text"
					/>
				</div>

        <div className=" mt-5 gap-1 ">
					<label className=" whitespace-nowrap">Priority</label>
					<input
						onChange={handleDetails}
            name="Priority"
						className="py-1 w-full shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] border-gray-200"
						value={emergency.priority}
						type="text"
					/>
				</div>



				<button onClick={handleSubmit} className="text-sm w-full mt-7 px-5 py-2 bg-blue-700 rounded-md text-white font-semibold shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]" type="submit">
					Submit
				</button>

			</form>
				</div>

		</div>

    </>
  )
}

export default EmergencyForm;
