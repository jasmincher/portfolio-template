import React from 'react';
import '../css/Resume.css';
import Header from '../components/Header';


function Resume(){
    return (
        <div className="resume-container">
           
           <Header heading="My Resume" subheading="Contact me if anything stands out"/>
           <iframe src="" className="resume-pdf"></iframe>
           
        </div>
    )
}

export default Resume;




