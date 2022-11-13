import React, { useState } from "react";
import "./Login.css"

const Login=()=>{
    const [name,setName]=useState("")
    const [password,setPassword]=useState("")
    return(<div class="main-cls">
    <div class="main-left">
        <form class="form-singup">
        <input type="text" placeholder="Name" value={name} onChange={(e)=>setName(e.target.value)} />
        <input type="text" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} />
        <button class="btn1">Login</button>
        </form>
    </div>
    <div class="main-right">
    </div>
  </div>)
}
export default Login