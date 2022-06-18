import React, { useState } from 'react'
import Accordion from 'react-bootstrap/Accordion'
import { Row, Col, Container } from "react-bootstrap"
import "./Faq.css"

const Faq = () => {

  return (

    <div>
      <div className="faq-header">
        <h1>FAQ</h1>
      </div>
      <Container style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: "column" }}>
          <Accordion>
            <Accordion.Item eventKey="0">
            <Accordion.Header>Question 1</Accordion.Header>
            <Accordion.Body>
                ??????
            </Accordion.Body> 
          </Accordion.Item>
          <Accordion.Item eventKey="1">
              <Accordion.Header>boo</Accordion.Header>
              <Accordion.Body>
                AHHHH
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Container>
    </div>

  )
}

export default Faq