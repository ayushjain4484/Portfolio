import React from "react"
import ProfilePicture from "../images/profile.jpg"
import { SiGithub } from 'react-icons/si'
import { SiLinkedin } from 'react-icons/si'
import { SiXing } from 'react-icons/si'
import {Link} from 'react-scroll'
import { FiMail } from 'react-icons/fi'
import { GoLocation } from 'react-icons/go'
const Footer = () => {
    return (
        <div className="jumbotron footer" id="Footer"> 

            <div className="container">
                <div className="row">
                    <div class="col-sm-5">
                        <ul class="footer-nav ms-auto">
                            <li className="nav-item"><FiMail/> : ayushjain@gmx.de</li>
                            <li className="nav-item"><GoLocation/> : Koblenz, Germany.</li>
                        </ul>
                    </div>
                    <div class="col-sm-5">
                        <div id="footer-nav-div">
                            <ul class="footer-nav ms-auto">
                                <li className="nav-item">
                                    <Link  to="About" smooth={true} offset={20} duration={500}>About Me</Link>
                                </li>
                                <li className="nav-item">
                                    <Link  to="Experience" smooth={true} offset={500} duration={500}>Experience</Link>
                                </li>
                                <li className="nav-item">
                                    <Link  to="Experience" smooth={true} offset={50} duration={500}>Education</Link>
                                </li>
                                <li className="nav-item">
                                    <Link  to="Skills" smooth={true} offset={20} duration={500}>Skills</Link>
                                </li>

                            </ul>
                        </div>
                    </div>

                    <div class="col-sm-2 social-logo">
                            <a style={{ textDecoration: 'none', color: 'white' }} href="https://github.com/ayushjain4484"><SiGithub size={35}/>&nbsp;</a>
                            <a style={{ textDecoration: 'none', color: 'white' }} href="https://www.linkedin.com/in/ayushjain119/"><SiLinkedin size={35}/>&nbsp;</a>
                            <a style={{ textDecoration: 'none', color: 'white' }} href="https://www.xing.com/profile/Ayush_Jain17/cv"><SiXing size={35}/>&nbsp;</a>
                    </div>

                </div>
                <div >

                </div>
            </div>
        </div>
    )
}

export default Footer

