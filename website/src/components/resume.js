import React from 'react';
import './resume.css';



class Resume extends React.Component {
  render() {
    return (
        <div>
            <br/>
            <p className="resume">Quick learning, self-starter seeking first time employment in the tech industry.
            Below is my resume showcasing programs and skills I utilized in hospitality.
            </p>
            <br/>
        <iframe id="docIFrame"
    src="https://docs.google.com/document/d/e/2PACX-1vTfMmrO8m_s9ni51arWRidgTCeLGYfLCG1CWSPWyYX2IKxBbop8nkccyGeiQAmZvMK98F2mHIiw8pkX/pub?embedded=true">
        </iframe>
        <p className="resume">
            <a href="https://docs.google.com/document/d/1UZ2IMxzmmRji-FAV5HEnE2mvVClRSEA2vGKFg8IErT8/export?format=pdf">Download as PDF</a>
        </p>    
    </div>
    );
}
}

export default Resume;