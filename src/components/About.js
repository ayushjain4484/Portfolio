import React from "react"
import ProfilePicture from "../profile.jpg"
const About = () => {
    return (
        <div className="jumbotron about">
            <center><h2>About Me</h2></center>
            <div className="container">
                <div className="row">
                    <div class="col-sm-6">
                        <h3>Column 1</h3>
                        <p>Lorem ipsum dolor..</p>
                        <p>Design, develop and maintain Chat bot interface for Traders and Product controllers.</p>
                        <p>FullStack Development</p>
                        <p>Close Analysis of repeated user issues.</p>
                        <p>Worked closely with the Client Managers to discuss various ideas/solutions, issues, and timelines.</p>
                        <p><strong>Python, Django, React.js, Chatterbot, Visual Studio Code, Tortoise Version Control, Odessey Repository</strong></p>
                    </div>
                    <div class="col-sm-6">
                        <img className="rounded mx-auto d-block img-thumbnail" src={ProfilePicture} alt="ProfilePicture" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About

