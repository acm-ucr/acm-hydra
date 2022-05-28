import React,{useState} from 'react';
import './WhatWeDo.css'
import './Tile.js'
import Tile from './Tile.js';
import Resume from './aboutImages/resume.jpeg'
import Workshop from './aboutImages/Workshop.jpeg'
import LinkedIn from './aboutImages/LinkedIn.jpeg'
import Pathways from './aboutImages/Pathways.png'
import {Row, Col} from 'react-bootstrap'
import Slider from "react-slick"
import { FaArrowRight, FaArrowLeft } from "react-icons/fa"


const data = [
    ["Accessible Workshops", Workshop, "description"],
    ["Professional Resumes", Resume, "description"],
    ["All-Star LinkedIns", LinkedIn, "description"],
    ["Technical Pathways", Pathways, "description"]
]


const images = [Workshop, Resume, LinkedIn, Workshop, Resume, LinkedIn]


const WhatWeDo = () => {

    const NextArrow = ({onClick}) => {
        return(
            <div className = "arrow next" onClick={onClick}>
                <FaArrowRight />
            </div>
        );
    };

    const PrevArrow = ({onClick}) => {
        return(
            <div className = "arrow prev" onClick={onClick}>
                <FaArrowLeft />
            </div>
        );
    };

    const [imageIndex, setImageIndex] = useState(0)

    const settings = {
        infinite: true,
        lazyLoad: true,
        speed: 300,
        slidesToShow: 3,
        centerMode: true,
        centerPadding: 0,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />, 
        beforeChange: (current, next) => setImageIndex(next)
    }
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


            <h1 className="about-whatwedo-header">Slideshow</h1>



            <div className="about-slider">
                <Slider {...settings}>
                    {
                        images.map((img, idx) => (
                            <div className={idx === imageIndex ? "slideactiveSlide" : "slide"}>
                                <img src={img} alt={img} />
                            </div>
                        ))
                    }
                </Slider>
            </div>  
        </div>
    );
}

export default WhatWeDo;
