import React from "react"
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaBriefcase } from 'react-icons/fa';
import { FaBook } from 'react-icons/fa'
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
    <p>Develop and maintain Web based application using AngularJS.</p>
    <p>FullStack Development</p>
    <p>Worked closely with the Producto owners to discuss various ideas/solutions, issues, and timelines.</p>
    <p><strong>AngularJS, typescript, Java, AWS, IntelliJ, Git, JIRA</strong></p>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="Apr, 2021 - Present"
    iconStyle={{ background: 'rgb(180, 0, 1)', color: '#fff' }}
    /*contentStyle={{ background: '#ffe6e6', color: '#000' }}*/
    contentArrowStyle={{ borderRight: '7px solid  rgb(180, 0, 1)' }}
    icon={<FaBook/>}>
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
    <h3 className="vertical-timeline-element-title">System Engineer</h3>
    <h4 className="vertical-timeline-element-subtitle"><SiTata color="blue"/> Tata Consultancy Services, Pune, India</h4>
    <p>Design, develop and maintain Chat bot interface for Traders and Product controllers.</p>
    <p>FullStack Development</p>
    <p>Close Analysis of repeated user issues.</p>
    <p>Worked closely with the Client Managers to discuss various ideas/solutions, issues, and timelines.</p>
    <p><strong>Python, Django, React.js, Chatterbot, Visual Studio Code, Tortoise Version Control, Odessey Repository</strong></p>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="June, 2019 - June, 2020"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    icon={<FaBriefcase/>}>
    <h3 className="vertical-timeline-element-title">Assistant System Engineer</h3>
    <h4 className="vertical-timeline-element-subtitle"><SiTata color="blue"/> Tata Consultancy Services, Pune, India</h4>
    <p>Analysis of frequently occurring issue and proposing automated workaround.</p>
    <p>Analyzed and Developed Automated Trade replaying system to resolve breaks between Front and back offices.</p>
    <p>Developed Automated Book Configuration system which included reading email notification and perform relative operations on Books.</p>
    <p><strong>Python, SQL, Servicenow Rest Apis, WinSCP, Putt, Tortoise Version Control, Odessey Repository</strong></p>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="June, 2018 - June, 2019"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    icon={<FaBriefcase/>}>
    <h3 className="vertical-timeline-element-title">Assistant Systems Engineer Trainee</h3>
    <h4 className="vertical-timeline-element-subtitle"><SiTata color="blue"/> Tata Consultancy Services, Pune, India</h4>
    <p>Worked closely with the Client manager to automate Incident management.</p>
    <p>Automated Stuck queue processing based on multiple Scenarios.</p>
    <p><strong>Python, SQL, Servicenow Rest Apis, WinSCP, Putt, Tortoise Version Control, Odessey Repository</strong></p>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="June, 2014 - June, 2018"
    iconStyle={{ background: 'rgb(180, 0, 1)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(180, 0, 1)' }}
    icon={<FaBook/>}>
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

