import React from 'react';
import './WhatWeDo.css'
import './Tile.js'
import Tile from './Tile.js';
import Resume from './aboutImages/resume.jpeg'
import Workshop from './aboutImages/Workshop.jpeg'
import LinkedIn from './aboutImages/LinkedIn.jpeg'
import Pathways from './aboutImages/Pathways.png'
import {Row, Col} from 'react-bootstrap'

const data = [
    ["Accessible Workshops", Workshop, "description"],
    ["Professional Resumes", Resume, "description"],
    ["All-Star LinkedIns", LinkedIn, "description"],
    ["Technical Pathways", Pathways, "description"]
]


const WhatWeDo = () => {
    return (
        <div className="about-whatwedo-wrapper">

            <h6 className="about-whatwedo-header">What We Do?</h6>


            <Row className="about-whatwedo-tiles">
                {
                data.map(tile => (
                    <Col xl={6}>
                        <Tile header = {tile[0]} image = {tile[1]} description = {tile[2]}
                        />
                    </Col>
                ))
            }
            </Row>
        </div>

    );
}

export default WhatWeDo;
