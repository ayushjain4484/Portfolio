import React from "react"
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaBriefcase } from 'react-icons/fa';
import { FaGraduationCap } from "react-icons/fa";
import { SiTata } from 'react-icons/si'


const Experience = () => {
    return (
<div className="timeline" id="Experience">
<div className="experience-heading text-center">
    <h2>Experience & Education</h2>
</div>
<VerticalTimeline>

  <VerticalTimelineElement
      className="vertical-timeline-element--work"
      date="Apr, 2022 - Present"
      iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
      contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
      icon={<FaBriefcase/>}>
    <h3 className="vertical-timeline-element-title">FullStack Developer</h3>
    <h4 className="vertical-timeline-element-subtitle"> Rethink Innovations, Germany</h4>
    <h4 className="vertical-timeline-element-subtitle"> Pro:Tec Sports</h4>
    <p>Developing Full Stack Web App using AngularJS and Java.</p>
    <p>Implementing a continuous integration and continuous deployment (CI/CD)</p>
    <p>Web Deployment and Deployment in AWS Cloud.</p>
    <p>Configuring load balancer and Autoscaling groups in AWS.</p>
    <p>Test Driven Development.</p>
    <p>API Development.</p>
    <p><strong>AngularJS, AWS, HTML, CSS, JavaScript, TypeScript, Java, SQL, Git, JIRA</strong></p>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="Apr, 2022 - Present"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    icon={<FaBriefcase/>}>
    <h3 className="vertical-timeline-element-title">FullStack Developer</h3>
    <h4 className="vertical-timeline-element-subtitle"> Rethink Innovations, Germany</h4>
    <h4 className="vertical-timeline-element-subtitle"> Radien</h4>
    <p>Cloud Native Application development.</p>
    <p>Working on Serverless architecture (AWS)</p>
    <p>Developing Lamba Functions.</p>
    <p>Frontend development using ReactJS.</p>
    <p>Developing Lamba Functions.</p>
    <p>Docker Container deployment on AWS Faregate.</p>
    <p>Worked with Java Microservices decoupled using AWS SQS and AWS SNS</p>
    <p><strong>ReactJS, AWS, HTML, CSS, JavaScript, TypeScript, Java, SQL, Git, Docker, JIRA</strong></p>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="Apr, 2021 - Present"
    iconStyle={{ background: 'rgb(180, 0, 1)', color: '#fff' }}
    /*contentStyle={{ background: '#ffe6e6', color: '#000' }}*/
    contentArrowStyle={{ borderRight: '7px solid  rgb(180, 0, 1)' }}
    icon={<FaGraduationCap/>}>
    <h3 className="vertical-timeline-element-title">Masters</h3>
    <h4 className="vertical-timeline-element-subtitle">Msc. Web And DataScience</h4>
    <h5>Universität Koblenz · Landau, Koblenz, Germany </h5>
    <p><strong>DataScience:</strong>  Network Theory and Dynamic Systems, Engineering Web and Data-intensive Systems Winter, Introduction to Web Science</p>
    <p><strong>WebScience:</strong>  Big Data, Machine Learning and Data Mining, Introduction to Data Science</p>
    
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="June, 2020 - Mar, 2021"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    icon={<FaBriefcase/>}>
    <h3 className="vertical-timeline-element-title">DevOps Engineer</h3>
    <h4 className="vertical-timeline-element-subtitle"><SiTata color="blue"/> Tata Consultancy Services, Pune, India</h4>
    <p>Design, develop and maintain Chat bot interface for Traders and Product controllers using Python, ReactJS, HTML/CSS</p>
    <p>DevOps development Approach with Agile development methodology.</p>
    <p>Implementing CI/CD pipelines, we could automate the building, testing, and deployment of code changes, resulting in faster and more frequent releases with reduced human error.</p>
    <p>Infrastructure as Code to dynamically scaling servers to match the demand and Infrastructure automation.</p>
    <p><strong>Python, Django, ReactJS, SQL, Git, JIRA, Docker, Chatterbot, Visual Studio Code, Git</strong></p>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="June, 2019 - June, 2020"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    icon={<FaBriefcase/>}>
    <h3 className="vertical-timeline-element-title">System Engineer</h3>
    <h4 className="vertical-timeline-element-subtitle"><SiTata color="blue"/> Tata Consultancy Services, Pune, India</h4>
    <p>Analysis of frequently occurring issue and proposing automated workaround.</p>
    <p>Analyzed and Developed Automated Trade replaying system to resolve breaks between Front and back offices.</p>
    <p>Developed Automated Book Configuration system which included reading email notification and perform relative operations on Books.</p>
    <p>Automated Quarterly maintenance activities.</p>
    <p>Automated Application health checkup.</p>
    <p><strong>Python, Linux, SQL, Servicenow Rest Apis, Git, Jira</strong></p>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="June, 2018 - June, 2019"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    icon={<FaBriefcase/>}>
    <h3 className="vertical-timeline-element-title">Assistant Systems Engineer</h3>
    <h4 className="vertical-timeline-element-subtitle"><SiTata color="blue"/> Tata Consultancy Services, Pune, India</h4>
    <p>Worked closely with the Client manager to automate Incident management.</p>
    <p>Automated Stuck queue processing based on multiple Scenarios.</p>
    <p>Production Deployments and QMW activities.</p>
    <p>ServiceNow API Automation.</p>
    <p><strong>Python, Linux, SQL, Servicenow Rest Apis, Git, Jira</strong></p>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="June, 2014 - June, 2018"
    iconStyle={{ background: 'rgb(180, 0, 1)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(180, 0, 1)' }}
    icon={<FaGraduationCap/>}>
    <h3 className="vertical-timeline-element-title">Bachelor Of Engineering</h3>
    <h4 className="vertical-timeline-element-subtitle">Computer Science</h4>
    <p>Gyanganga Institute Of Technology And Sciences, Jabalpur, India </p>
  </VerticalTimelineElement>

</VerticalTimeline>
</div>
    )
}

export default Experience


{/*<VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="2011 - present"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    
  >
    <h3 className="vertical-timeline-element-title">Creative Director</h3>
    <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
    <p>
      Creative Direction, User Experience, Visual Design, Project Management, Team Leading
    </p>
  </VerticalTimelineElement>
*/}

