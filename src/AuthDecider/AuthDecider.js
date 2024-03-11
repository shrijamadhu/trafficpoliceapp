import React, { useState } from "react"
import Login from "./Login"
import SignUp from "./Signup"

const AuthDecider = ({user,setUser})=>{
  const [isShow,setIsShow] = useState(true)
  return(
    <div style={{ background: "linear-gradient(to right, #141e23, #243b67)"}} className="w-full flex items-center justify-center  h-screen">
      {
        isShow ? <Login user={user} setUser={setUser} setIsShow={setIsShow}/> : <SignUp user={user} setUser={setUser} setIsShow={setIsShow}/>
      }
    </div>
  )
}

export default AuthDecider;
