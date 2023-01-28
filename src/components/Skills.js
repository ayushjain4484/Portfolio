import React from "react"
import ProfilePicture from "../images/profile.jpg"
import { FaPython } from 'react-icons/fa'
import { FaReact } from 'react-icons/fa'
import { FaAngular} from 'react-icons/fa'
import { FaHtml5 } from 'react-icons/fa'
import { FaAws } from 'react-icons/fa'
import { FaJs } from 'react-icons/fa'
import { FaJava } from 'react-icons/fa'
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
                        <Typed  style={{ color : "black", fontFamily: "Cascadia Code,Consolas,Courier New,monospace"}}
                            className="terminal-typed"
                            strings={["Programming: <br>Python <br>Java <br>Typescript <br>R <br>Javascript <br>HTML/CSS",
                            "Data Science: <br>Apache Spark <br>Python pandas",
                            "Frameworks: <br>Django <br>Flask <br> ReactJS <br> AngularJS",
                            "Database: <br>SQL: <br>Oracle, Mysql, PostgreSQL <br>NOSQL: <br>MongoDB, neo4j, CouchDB",]}
                            typeSpeed={50}
                            backSpeed={60}
                            loop
                        />
 
                    </div>
                    <div class="col-sm-6 skill-section">
                        <div>
                            <FaReact className="skill-image"/>
                            <FaAngular className="skill-image"/>
                            <FaHtml5 className="skill-image"/>
                            <FaCss3Alt className="skill-image"/>
                            <DiDjango className="skill-image"/>
                            <FaAws className="skill-image"/>
                            <FaJs className="skill-image"/>

                            <FaPython className="skill-image"/>
                            <FaJava className="skill-image"/>

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

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills

