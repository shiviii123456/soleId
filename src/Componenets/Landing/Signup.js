import React, { useState } from "react";
import "./Signup.css"
const Signup = () => {
  const [name, setName] = useState("")
  const [password, setPassword] = useState("")
  const [email, setEmail] = useState("")
  return (<div class="main-cls">
    <div class="main-left">
      <form class="form-singup">
        <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button class="btn1">Register</button>
      </form>
    </div>
    <div class="main-right">
    </div>
  </div>);
}
export default Signup