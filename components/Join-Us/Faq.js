import React from "react";
import Accordion from "react-bootstrap/Accordion";
import { Container } from "react-bootstrap";
import "./Faq.css";

const Faq = () => {
    return (
        <div className="joinus-faq-container">
            <div className="joinus-faq-wrapper">
                <p className="joinus-faq-header">Frequently Asked Questions</p>

                <Container
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: "column",
                    }}
                >
                    <Accordion>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>
                                <p className="joinus-faq-question">
                                    How can I join ACM?
                                </p>
                            </Accordion.Header>
                            <Accordion.Body className="joinus-faq-answer">
                                <p>Great Question!You Don&apos;t!</p>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>
                                <p className="joinus-faq-question">
                                    How can I join ACM?
                                </p>
                            </Accordion.Header>
                            <Accordion.Body className="joinus-faq-answer">
                                <p>Great Question!You Don&apos;t!</p>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </Container>
            </div>
        </div>
    );
};

export default Faq;
