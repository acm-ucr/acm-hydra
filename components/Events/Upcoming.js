import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { HiCalendar } from "react-icons/hi";
import "./Upcoming.css";

export const Upcoming = () => {
    return (
        <div className="events-upcomingevents-wrapper">
            <label>
                <h4 className="text-center">Upcoming Events</h4>
                <Container>
                    <Row>
                        <Col sm={6}>
                            <Card style={{ width: "15rem" }}>
                                <Card.Body>
                                    <Card.Title>Event Name</Card.Title>
                                    <Card.Text>
                                        <p>
                                            Date:
                                            <br />
                                            Time:
                                            <br />
                                            Location:
                                        </p>
                                    </Card.Text>
                                    {/* <Button variant="primary">Add to your Google Calendar</Button> */}
                                    <a
                                        className="footer-link"
                                        href="https://google.com"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <HiCalendar />
                                    </a>
                                </Card.Body>
                            </Card>
                            <Card style={{ width: "15rem" }}>
                                <Card.Body>
                                    <Card.Title>Event Name</Card.Title>
                                    <Card.Text>
                                        <p>
                                            Date:
                                            <br />
                                            Time:
                                            <br />
                                            Location:
                                        </p>
                                    </Card.Text>
                                    {/* <Button variant="primary">Add to your Google Calendar</Button> */}
                                    <a
                                        className="footer-link"
                                        href="https://google.com"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <HiCalendar />
                                    </a>
                                </Card.Body>
                            </Card>
                            <Card style={{ width: "15rem" }}>
                                <Card.Body>
                                    <Card.Title>Event Name</Card.Title>
                                    <Card.Text>
                                        <p>
                                            Date:
                                            <br />
                                            Time:
                                            <br />
                                            Location:
                                        </p>
                                    </Card.Text>
                                    {/* <Button variant="primary">Add to your Google Calendar</Button> */}
                                    <a
                                        className="footer-link"
                                        href="https://google.com"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <HiCalendar />
                                    </a>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </label>
        </div>
    );
};
