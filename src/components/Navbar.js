import React from "react";
import logo from "../images/logo.png";
//React FontAwesome Imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import {Link} from 'react-scroll'


const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark navbar-fixed-top" role="navigation">
        <div className="container">

        <a className="navbar-brand" href="#"><img className="logo" src={logo} alt="logo.." /></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <FontAwesomeIcon icon={faBars} className="FontAwesomeIcon"/>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto">
                <li className="nav-item">
                    <Link className="nav-link" to="About" smooth={true} offset={20} duration={500}>About Me</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="Experience" smooth={true}  offset={20}  duration={500} >Experience</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="Experience" smooth={true} offset={1200} duration={500}>Education</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="Skills" smooth={true} offset={20} duration={500}>Skills</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="Contact" smooth={true} offset={50} duration={500}>Contact</Link>
                </li>
            </ul>
        </div>

        </div>
        </nav>
    )
}

export default Navbar
