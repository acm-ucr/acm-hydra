import React from 'react';
import './WhatWeDo.css'

const WhatWeDo = () => {
    return (
        <div className="about-whatwedo-wrapper">
            <div className="about-whatwedo-container">

                <div className="about-whatwedo-header">

                    <h6>What We Do</h6>
                    <p>Every quarter, we focus on improving specific aspects of our members.</p>
                </div>

                <div className="about-whatwedo-row">
                    <h6>Workshops</h6>
                    <p>Web/App Development</p>
                    <p>Intro to Front-End/Back-End</p>
                    <p>LeetCode 101</p>
                </div>
                
                <div className="about-whatwedo-row">
                    <h6>Professional Development</h6>
                    <p>Build all-star LinkedIns</p>
                    <p>Develop Professional Resumes</p>
                    <p>Apply to Jobs/Internships</p>
                </div>
            </div>
        </div>

    );
}

export default WhatWeDo;
