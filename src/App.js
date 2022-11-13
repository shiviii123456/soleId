import React, { useState } from "react";
import Navbar from "./Componenets/Navbar/navbar";
import Main from "./Componenets/Landing/Main";
import Login from "./Componenets/Landing/Login";
import Signup from "./Componenets/Landing/Signup";
const App=()=>{
    const [bool,setBool]=useState(false);
    const [register,setRegister]=useState(false);
    const loginClick=()=>{
        setBool(true)
        setRegister(false)
    }
    const registerClick=()=>{
        setBool(false)
        setRegister(true)
    }
    return (<>
     <Navbar loginClick={loginClick} registerClick={registerClick} />
     {(bool || register) ? (bool?<Login/>:<Signup/>):<Main/>}
    </>
    )
}
export default App