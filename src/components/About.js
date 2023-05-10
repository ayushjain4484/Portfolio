import React from "react"
import ProfilePicture from "../images/profile_picture.jpg"
const About = () => {
    return (
        <div className="jumbotron about" id="About">
            <center><h2>About Me</h2></center>
            <div className="container">
                <div className="row">
                    <div class="col-sm-9">
                        <h3>Ayush Jain,</h3>
                        <br/>
                        <p>Full-stack web developer with 4 years of professional experience with TCS (Tata Consultancy Services) and Rethink Innovations.</p>
                        <p>Masters in Web and data science from Universität Koblenz, Germany</p>
                        <p><strong>AngularJS, React.JS, Python, AWS Cloud developement.</strong></p>
                    </div>
                    <div class="col-sm-3">
                        <img className="rounded mx-auto d-block img-thumbnail" src={ProfilePicture} alt="ProfilePicture" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About

