import React from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import { HiOutlineMail } from "react-icons/hi"

export const Upcoming = () => {
  return (
    <div>
      <h1>Upcoming Events</h1>
      <Container>
        <Row>
          <Col sm={6}>
            <Card style={{ width: '15rem' }}>
              <Card.Body>
                <Card.Title>Event Name</Card.Title>
                <Card.Text>
                  <p>
                      Place:
                      <br />
                      Time:

                  </p>
                </Card.Text>
                {/* <Button variant="primary">Add to your Google Calendar</Button> */}
                <a className='footer-link' href="https://google.com" target="_blank" rel="noreferrer">
                    <HiOutlineMail />
                </a>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
