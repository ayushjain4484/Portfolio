import React from "react"
import Typed from "react-typed"

const Header = () => {
    return (
        <div className="header-wraper">
            <div className="main-info">
                <h1>web development and make sense of the data</h1>
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
    )
}

export default Header
