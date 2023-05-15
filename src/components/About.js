import React from "react"
import ProfilePicture from "../images/profile_picture.jpg"
import {FaGraduationCap} from "react-icons/fa";

const About = () => {
    return (
        <div className="jumbotron about" id="About">
            <center><h2>About Me</h2></center>
            <div className="container">
                <div className="row">
                    <div class="col-sm-9">
                        <h3>Ayush Jain,</h3>
                        <br/>
                        <p class="justify-content-center center align-content-center">
                            Throughout my 4-year career in IT, working at Tata Consultancy Services (India) and Rethink Innovation (Germany), I have played an essential role in developing, improving, and operating a wide range of applications and services across different industries. This includes working with AWS Cloud services, implementing full-stack solutions, and employing DevOps practices to enable efficient and reliable software delivery. Additionally, I have been actively involved in establishing CI/CD pipelines to automate the build, test, and deployment processes, ensuring faster and more frequent releases of high-quality software. </p>
                        <p><FaGraduationCap/> Masters in Web and data science from Universität Koblenz, Germany</p>
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

