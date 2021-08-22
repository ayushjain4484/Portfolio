import React from "react";
import logo from "../logo.png";
//React FontAwesome Imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <div className="container">

        <a className="navbar-brand" href="#"><img className="logo" src={logo} alt="logo.." /></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <FontAwesomeIcon icon={faBars} className="FontAwesomeIcon"/>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto">
                <li class="nav-item active">
                    <a class="nav-link" href="/">Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/">About Me</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/">Experience</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/">Education</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/">Projects</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/">Contact</a>
                </li>
            </ul>
        </div>

        </div>
        </nav>
    )
}

export default Navbar
