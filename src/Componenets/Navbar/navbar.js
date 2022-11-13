import React from "react"
import "./navbar.css"
import Signup from "../Landing/Signup"
import Login from "../Landing/Login"

const Navbar = (props) => {
    return (
        <React.Fragment>
        <header class="header-navbar">
            <div class="left-navbar">
                <span>SOLE ID</span>
            </div>
            <div class="center-navbar" id="right-nav">
                <ul id="list-ul">
                    <li><a href="#">How it works</a></li>
                    <li><a href="#">Use Cases</a></li>
                    <li><a href="#">Enquire</a></li>
                </ul>
            </div>
            <div class="right-navbar">
                    <button id="navbar-btn1" class="navbar-btn" onClick={() =>  props.loginClick()}>LOGIN</button>
                    <button id="navbar-btn2" class="navbar-btn" onClick={() =>  props.registerClick()} >SIGNUP</button>
            </div>
        </header>
        <div class="navbar-hr"></div>
        </React.Fragment>
    )
}
export default Navbar