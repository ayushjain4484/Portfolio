import React from "react"
import Typed from "react-typed"
import video from "../images/header.mp4"
import bg_image from "../images/header.jpeg"
import pdf from "../lebenslauf_2.pdf"


const Header = () => {
    return (
        <div id="Header">
            {
                /*<video autoPlay muted loop id="myVideo"><source src={video} type="video/mp4"/></video>*/
            }
        <div className="header-wraper">
            <div className="main-info">
                <h1>AYUSH JAIN</h1>
                <Typed
                    className="typed-text"
                    strings={["Web Development","Data Science","Full Stack Development"]}
                    typeSpeed={40}
                    backSpeed={60}
                    loop
                    />
                <a href={pdf} className="btn-main-offer">View  Resume</a>
            </div>
        </div>
        </div>
    )
}

export default Header


