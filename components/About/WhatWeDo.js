import React from "react";
import styles from "./WhatWeDo.module.css";
import "./Tile.js";
// import Tile from "./Tile.js";
import Slide from "./Slide.js";
// import { Row, Col } from "react-bootstrap";

// const data = [
//     ["Accessible Workshops", "description"],
//     ["Professional Resumes", "description"],
//     ["All-Star LinkedIns", "description"],
//     ["Technical Pathways", "description"],
// ];

const slides = [
    "resume.jpeg",
    "workshop.jpeg",
    "linkedin.jpeg",
    "pathways.png",
    "resume.jpeg",
    "workshop.jpeg",
    "linkedin.jpeg",
    "pathways.png",
    "resume.jpeg",
    "workshop.jpeg",
    "linkedin.jpeg",
    "pathways.png",
];

const WhatWeDo = props => {
    return (
        <div className={styles.aboutWhatwedoWrapper}>
            <h6 className={styles.aboutWhatwedoHeader}>What We Do?</h6>

            {/* <Row className={styles.aboutWhatwedoTiles}>
                {data.map((tile, index) => (
                    <Col key={index} xl={6}>
                        <Tile
                            header={tile[0]}
                            description={tile[2]}
                        />
                    </Col>
                ))}
            </Row> */}

            <div className={styles.slider}>
                <div className={styles.slideTrack}>
                    {slides.map((slide, index) => (
                        <Slide key={index} image={slide} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default WhatWeDo;
