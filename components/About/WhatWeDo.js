import React from "react";
import "./WhatWeDo.css";
import "./Tile.js";
import Tile from "./Tile.js";
import Slide from "./Slide.js";
import Resume from "./aboutImages/resume.jpeg";
import Workshop from "./aboutImages/Workshop.jpeg";
import LinkedIn from "./aboutImages/LinkedIn.jpeg";
import Pathways from "./aboutImages/Pathways.png";
import { Row, Col } from "react-bootstrap";

const data = [
    ["Accessible Workshops", Workshop, "description"],
    ["Professional Resumes", Resume, "description"],
    ["All-Star LinkedIns", LinkedIn, "description"],
    ["Technical Pathways", Pathways, "description"],
];

const slides = [
    [Workshop],
    [Resume],
    [LinkedIn],
    [Pathways],
    [Workshop],
    [Resume],
    [LinkedIn],
    [Pathways],
    [Workshop],
    [Resume],
    [LinkedIn],
    [Pathways],
];

const WhatWeDo = (props) => {
    return (
        <div className="about-whatwedo-wrapper">
            <h6 className="about-whatwedo-header">What We Do?</h6>

            <Row className="about-whatwedo-tiles">
                {data.map((tile, index) => (
                    <Col key={index} xl={6}>
                        <Tile
                            header={tile[0]}
                            image={tile[1]}
                            description={tile[2]}
                        />
                    </Col>
                ))}
            </Row>

            <div className="slider">
                <div className="slide-track">
                    {slides.map((slide, index) => (
                        <Slide key={index} image={slide[0]} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default WhatWeDo;