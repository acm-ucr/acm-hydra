import React from 'react';
import './WhatWeDo.css'
import { Row, Col } from "react-bootstrap"

const WhatWeDo = () => {
    return (
        <div className="about-whatwedo-wrapper">
            <div className="about-whatwedo-container">

                <div className="about-whatwedo-header">

                    <h6>What We Do</h6>
                    <p>
                        Every quarter, we focus on improving specific aspects of our member.
                    </p>
                </div>

                <div className="about-whatwedo-grid">
                    <Row className="about-whatwedo-row">
                        <Col lg={4} sm={12} className="about-whatwedo-single-col">
                            <h6>Workshops</h6>
                            <p>Web/App Development</p>
                            <p>Intro to Front-End/Back-End</p>
                            <p>LeetCode 101</p>
                        </Col>
                        <Col lg={4} sm={12} className="about-whatwedo-single-col">
                            <h6>Professional Development</h6>
                            <p>Build all-star LinkedIns</p>
                            <p>Develop Professional Resumes</p>
                            <p>Apply to Jobs/Internships</p>
                        </Col>
                        <Col lg={4} sm={12} className="about-whatwedo-single-col">
                            <h6>And More...</h6>
                            <p>Offline Editing</p>
                            <p>Source Control</p>
                            <p>Utipzing API's</p>
                        </Col>
                    </Row>
                </div>
            </div>
        </div>

    );
}

export default WhatWeDo;
