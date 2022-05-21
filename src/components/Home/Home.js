import * as React from "react";
import { FaDiscord, FaInstagram, FaSlack, FaMedium, FaYoutube} from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { BsArrowRightSquare, BsArrowLeftSquare } from "react-icons/bs";
import { Container, Row, Col } from "react-bootstrap";

import "./Home.css";

const workshops = [
    {
        title: "All about JavaScript",
        lead: "Divyank",
        description: "I love javascript so much. I would love to help others realize how astounding of a language it is",
        date: "2020-01-01",
        time: "12:00",
        location: "ACM Room",
    },
    {
        title: "Why Rust > All",
        lead: "Adil",
        description: "????",
        date: "2020-01-01",
        time: "12:00",
        location: "ACM Room",
    }
];


// markup
const Home = () => {
    let [workshopInd, setWorkshopInd] = React.useState(0);
    let workshop = workshops[workshopInd];

    const switchWorkshop = (direction) => {
        if (direction === "left") {
            if (workshopInd > 0)
                setWorkshopInd(workshopInd - 1);
        } else if (direction === "right") {
            if (workshopInd < workshops.length - 1)
                setWorkshopInd(workshopInd + 1);
        }
    };

    return (
        <main>
            <title>ACM@UCR</title>
            <div className="container">
                <img src="blocks.svg" width={900}></img>
                {/* <Container style={{ margin: "2em" }}>
                    <Row>
                        <Col>
                        Welcome
                        </Col>
                    </Row>
                </Container> */}
                <Container style={{ margin: "2em" }}>
                    <Row className="row">
                        <Col lg={4} sm={12}>
                            <h1 className="heading">Learn</h1>

                            <h2>{workshop.title}</h2>
                            <p>{workshop.lead}</p>
                            <p>{workshop.description}</p>
                            <p>{workshop.location} {workshop.date} {workshop.time}</p>

                            <div style={{ display: "flex", gap: 5 }}>
                                <BsArrowLeftSquare onClick={() => switchWorkshop("left")} size={30}/>
                                <BsArrowRightSquare onClick={() => switchWorkshop("right")} size={30}/>
                            </div>
                        </Col>

                        <Col lg={4} sm={12}>
                            <h1 className="heading">Inspire</h1>
                            <p>
                                The Association for Computing Machinery at the University of California,
                                Irvine is a non-profit organization that is dedicated to the advancement of
                                computing and the development of computing-related technologies.
                            </p>
                            <p>
                                <a href="https://www.acm.org/">ACM@UCR</a> is a non-profit organization that is
                                dedicated to the advancement of computing and the development of computing-related
                                technologies.
                            </p>
                        </Col>

                        <Col lg={4} sm={12}>
                            <h1 className="heading">Connect</h1>
                            <div className="icons">
                                <FaDiscord/>
                                <FaInstagram/>
                                <FaSlack/>
                                <FaMedium/>
                                <SiGmail/>
                                <FaYoutube/>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </main>
    );
};

export default Home;
