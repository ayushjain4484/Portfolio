import React from "react"
import ProfilePicture from "../images/profile.jpg"
import { FiMail } from 'react-icons/fi'
import { GoLocation } from 'react-icons/go'
import { FaPhone } from 'react-icons/fa'

import { SiGithub } from 'react-icons/si'
import { SiLinkedin } from 'react-icons/si'
import { SiXing } from 'react-icons/si'


const Contact = () => {
    return (
        <div className="jumbotron contact" id="Contact">
            <center><h2>Get in touch.</h2></center>
            <br></br>
            <div className="container">
                
                   
                <form action="https://formspree.io/f/mjvleapr" method="POST">
                    <div className="row">
                            <div class="form-group ">
                                <label for="Name">Name</label >
                                <input name="name" type="text" class="form-control" id="Name" required/>
                            </div>
                    </div>
                    <div className="row">
                            <div class="form-group ">
                                <label for="email">Email</label>
                                <input name="email" type="email" class="form-control" id="email" required/>
                            </div>
                    </div>
                    <div className="row">
                            <div class="form-group ">
                                <label for="phone">Contact no.</label>
                                <input name="phone" type="number" class="form-control" id="phone" />
                            </div>
                    </div>
                    <div className="row">   
                            <div class="form-group ">
                                <label for="subject">Subject</label>
                                <input name="subject" type="text" class="form-control" id="subject"/>
                            </div>
                    </div>
                    <div className="row">
                            <div class="form-group  text-area">
                                <label for="message">Message</label>
                                <textarea name="message" row="5" class="form-control" id="message"/>
                            </div>
                    </div>
                    <div className="row">
                            <button type="submit" class="btn btn-dark btn-sm submit-button">Submit</button>
                    </div>
                        
                </form>
                    

            </div>
        </div>
    )
}

export default Contact

