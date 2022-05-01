import React from 'react';
import './WhatWeDo.css'
import {Row, Col} from "react-bootstrap"

const WhatWeDo = () => {
    return (
        <div className="about-WhatWeDo">
            <div>
                <div className="about-WhatWeDo-header">

                    <h1>What We Do</h1>
                    <h6>
                        Every quarter, we focus on improving specific aspects of our member.
                    </h6>
                </div>

                <div className="about-WhatWeDo-grid">
                    <Row>

                        <Col lg = {4} sm={12} className="about-WhatWeDo-single-col">
                            <h2>Workshops</h2>
                            <ul >
                                <li>Web/App Development</li>
                                <li>Intro to Front-End/Back-End</li>
                                <li>LeetCode 101</li>
                            </ul>
                        </Col>

                        <Col lg = {4} sm={12} className="about-WhatWeDo-single-col">
                            <h2>Professional Development</h2>
                            <ul>
                                <li>Build all-star LinkedIns</li>
                                <li>Develop Professional Resumes</li>
                                <li>Apply to Jobs/Internships</li>
                            </ul>
                        </Col>

                        <Col  lg = {4} sm={12} className="about-WhatWeDo-single-col">
                            <h2>And More...</h2>
                            <ul>
                                <li>Offline Editing</li>
                                <li>Source Control</li>
                                <li>Utilizing API's</li>
                            </ul>
                        </Col>
                </Row>
                </div>
            </div>
        </div>
        
    );
}

export default WhatWeDo;
