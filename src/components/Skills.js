import React from "react"
import ProfilePicture from "../images/profile.jpg"
import { FaPython } from 'react-icons/fa'
import { FaReact } from 'react-icons/fa'
import { FaHtml5 } from 'react-icons/fa'
import { FaCss3Alt } from 'react-icons/fa'
import { DiDjango } from 'react-icons/di'
import { DiSpark } from 'react-icons/di'
import { SiRaspberrypi } from 'react-icons/si'
import { SiLinux } from 'react-icons/si'
import { SiR } from 'react-icons/si'
import { SiRedhat } from 'react-icons/si'
import { SiGit } from 'react-icons/si'
import { SiGithub } from 'react-icons/si'
import { SiOracle } from 'react-icons/si'
import { SiMongodb } from 'react-icons/si'
import { SiPostgresql } from 'react-icons/si'
import { SiGraphql } from 'react-icons/si'
import { SiWindows } from 'react-icons/si' 
import Typed from "react-typed"
import background from "../images/terminal.png"


const Skills = () => {
    return (
        <div className="jumbotron skills" id="Skills">
            <center><h2>Skills</h2></center>
            <div className="container">
                <div className="row">
                    <div class="col-sm-6 terminal" style={{ backgroundImage: `url(${background})`,backgroundSize:"contain",backgroundRepeat:"no-repeat", borderRadius: 5 }} id="terminal">
                        <br/>
                        <Typed style={{fontSize : 14, color : "black", fontFamily: "Cascadia Code,Consolas,Courier New,monospace"}}
                            className="typed-text"
                            strings={["Programming: <br>Python <br>R <br>Javascript <br>HTML <br>CSS",
                            "Data Science: <br>Apache Spark <br>Python pandas",
                            "Frameworks: <br>Django <br>Flask <br> React",
                            "Database: <br>SQL: <br>Oracle <br>Mysql <br>PostgreSQL <br>NOSQL: <br>MongoDB <br>neo4j <br>CouchDB",]}
                            typeSpeed={50}
                            backSpeed={60}
                            loop
                        />
 
                    </div>
                    <div class="col-sm-6 skill-section">
                        <div>
                            <FaPython className="skill-image"/>
                            <FaReact className="skill-image"/>
                            <FaHtml5 className="skill-image"/>
                            <FaCss3Alt className="skill-image"/>
                            <DiDjango className="skill-image"/>
                            
                            <DiSpark className="skill-image"/>
                            <SiR className="skill-image"/>
                            
                            <SiLinux className="skill-image"/>
                            <SiWindows className="skill-image"/> 
                            <SiRedhat className="skill-image"/>
                            <SiRaspberrypi className="skill-image"/>
                            
                            <SiGit className="skill-image"/>
                            <SiGithub className="skill-image"/>
                            <SiOracle className="skill-image"/>
                            <SiMongodb className="skill-image"/>
                            <SiPostgresql className="skill-image"/>
                            <SiGraphql className="skill-image"/>                            
                            {/*
                                <img className="skill-image rounded" src={css3} alt="ProfilePicture" />
                                <img className="skill-image rounded" src={django} alt="ProfilePicture" />
                                <img className="skill-image rounded" src={html5} alt="ProfilePicture" />
                                <img className="skill-image rounded" src={python} alt="ProfilePicture" />
                                <img className="skill-image rounded" src={react} alt="ProfilePicture" />
                            */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills

