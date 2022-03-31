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
                        <p>Full-stack web developer and Data scientist having three years of professional experience with TCS (Tata Consultancy Services). </p>
                        <p>I am currently studying MSc. Web and data science in Universität Koblenz · Landau. </p>
                        <p><strong>Python, Django, React.js, Apache Spark.</strong></p>
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

