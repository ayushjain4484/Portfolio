import React from "react"
import Typed from "react-typed"
import bg_image from "../images/header.jpeg"
import pdf from "../lebenslauf_2.pdf"


const Header = () => {
    return (
        <div id="Header">
            <div className="header-wraper">
                <img src={bg_image} className="header-wraper"/>
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


