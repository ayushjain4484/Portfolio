import React from "react"
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import WorkIcon from "../work.jpg";

const Experience = () => {
    return (
<div className="timeline">
<div className="experience-heading">
    <center><h2>Work Experience</h2></center>
</div>
<VerticalTimeline>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="June, 2020 - Mar, 2021"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    >
    <h3 className="vertical-timeline-element-title">System Engineer</h3>
    <h4 className="vertical-timeline-element-subtitle">Tata Consultancy Services, Pune, India</h4>
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
    
    >
    <h3 className="vertical-timeline-element-title">Assistant System Engineer</h3>
    <h4 className="vertical-timeline-element-subtitle">Tata Consultancy Services, Pune, India</h4>
    <p>Analysis of frequently occurring issue and proposing automated workaround.</p>
    <p>Analyzed and Developed Automated Trade replaying system to resolve breaks between Front and back offices.</p>
    <p>Developed Automated Book Configuration system which included reading email notification and perform relative operations on Books.</p>
    <p><strong>Python, SQL, Servicenow Rest Apis, WinSCP, Putt, Tortoise Version Control, Odessey Repository</strong></p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="June, 2018 - June, 2019"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    >
    <h3 className="vertical-timeline-element-title">Assistant Systems Engineer Trainee</h3>
    <h4 className="vertical-timeline-element-subtitle">Tata Consultancy Services, Pune, India</h4>
    <p>Worked closely with the Client manager to automate Incident management.</p>
    <p>Automated Stuck queue processing based on multiple Scenarios.</p>
    <p><strong>Python, SQL, Servicenow Rest Apis, WinSCP, Putt, Tortoise Version Control, Odessey Repository</strong></p>
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

