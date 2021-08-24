import React from "react"
import Typed from "react-typed"
import video from "../header.mp4"

const Header = () => {
    return (
        <div>
            <video autoPlay muted loop id="myVideo"><source src={video} type="video/mp4"/></video>
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
                <a href="#" className="btn-main-offer">Contact Me</a>
            </div>
        </div>
        </div>
    )
}

export default Header
