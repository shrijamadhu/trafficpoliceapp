import React, { useState } from "react";

import AuthDecider from "./AuthDecider/AuthDecider";
import TwoButtons from "./Violation/TwoButtons";


const Home = ()=>{

  const [clicked,setClicked] = useState(false);

  const handleClick = ()=>{
    setClicked((beforeValue)=>!beforeValue);
    console.log(clicked)
  }

  return(
    <>
        <div className=" flex justify-between ">

          <div className="w-3/4 h-screen  flex gap-5 justify-center items-center">
              <div onClick={handleClick} className=" w-60 h-60 bg-white flex items-center justify-center shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px]">
                {
                  clicked ? <TwoButtons/> : "Trafic cop App"
                }
              </div>
              <div className=" w-60 h-60 bg-white flex items-center justify-center shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px]">
                  Medical Rapid Force Team
              </div>
              <div className=" w-60 h-60 bg-white flex items-center justify-center shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px]">
              -	Traffic Central Team
              </div>
          </div>
          <div className="flex items-center">
           <AuthDecider/>
          </div>
        </div>
    </>
  )
}

export default Home;
