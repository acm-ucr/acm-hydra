import React, { useState } from 'react'
import Accordion from 'react-bootstrap/Accordion'
import "./Faq.css"

const Faq = () => {

  return (

    <div>
      <center>
        <Accordion>
          <Accordion.Item eventKey="0">
          <Accordion.Header>Question 1</Accordion.Header>
          <Accordion.Body>
              ??????/
          </Accordion.Body> 
        </Accordion.Item>
        <Accordion.Item eventKey="1">
            <Accordion.Header>boo</Accordion.Header>
            <Accordion.Body>
              AHHHH
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </center>
    </div>

  )
}

export default Faq