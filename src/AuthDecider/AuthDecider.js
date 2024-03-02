import React, { useState } from "react"
import Login from "./Login"
import SignUp from "./Signup"

const AuthDecider = ()=>{
  const [isShow,setIsShow] = useState(true)
  return(
    <div className="w-full">
      {
        isShow ? <Login setIsShow={setIsShow}/> : <SignUp setIsShow={setIsShow}/>
      }
    </div>
  )
}

export default AuthDecider;
