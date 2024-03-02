import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom";


const TwoButtons = ()=>{
  // const [isOnline,setIsOnline] = useState(true)

  // useEffect(()=>{
  //   window.addEventListener("online",()=>{
  //     setIsOnline(true)
  //   })
  //   window.addEventListener("offline",()=>{
  //     setIsOnline(false)
  //   })
  // },[isOnline]);

  return(
    <div className="w-full h-60 px-5 flex justify-center flex-col gap-4 items-center">
      {/* <h1>{isOnline ?"user is in online" : "user OFfline"}</h1> */}
      <Link to={"/violationForm"}>
        <button className="py-1 bg-blue-600 border-none px-5 text-white font-semibold text-sm shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] w-full">Traffic Violation</button>
      </Link>
      <Link to={"/emergencyForm"}>
        <button className="py-1 bg-blue-600 border-none px-5 text-white font-semibold text-sm shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] w-full">Medical Emergency</button>
      </Link>
    </div>
  )
}

export default TwoButtons;
