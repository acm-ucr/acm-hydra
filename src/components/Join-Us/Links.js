import React from 'react'
import "./Links.css"
import {Row, Col, Container} from "react-bootstrap"
import Link from './Link'

const Links = () => {

  const links = [
    ["https://cyber.cs.ucr.edu/", "Cyber @ UCR"],
    ["https://winc.cs.ucr.edu/", "WINC"],
    ["https://gamespawn.github.io/", "Gamespawn"],
    ["https://ieee.ucr.edu/", "IEEE"],
    ["https://ucrsolarcar.com/", "Solar Car"],
    ["https://ucrswe.org/", "SWE"],
  ]

  return (
    <div>
      {/* <div className="joinus-links-header" >
        <p>Join ACM@UCR</p>
      </div>
      <div className="joinus-links-image">
         <img src="https://i.imgur.com/1aKMX30.png" width="15%" height="15%" alt="ACM @ UCR Logo"></img> 
      </div> */}
      <br /><br />
      <div className="joinus-links-orgs">
        <p>Affiliated Organizations</p>
        <Container fluid style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Row style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              {links.map(link => (
                  <Col style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                      <Link link={link[0]} name={link[1]}  />
                      <a>className="joinus-links-cs-orgs"</a>
                  </Col>
              )
              )}
          </Row>
        </Container>
        
        {/* lg={3} md={4} sm={6} xs={12} */}

        {/* <Row>
          <Col>
          <a className="joinus-links-cs-orgs" href="https://cyber.cs.ucr.edu/" target="_parent">Cyber @ UCR</a>
          </Col>
          <Col>
          <a className="joinus-links-cs-orgs" href="https://winc.cs.ucr.edu/" target="_parent">WINC</a>
          </Col>
          <Col>
          <a className="joinus-links-cs-orgs" href="https://gamespawn.github.io/" target="_parent">Gamespawn</a>
          </Col>
          <Col>
          <a className="joinus-links-cs-orgs" href="https://ieee.ucr.edu/" target="_parent">IEEE</a>
          </Col>
          <Col>
          <a className="joinus-links-cs-orgs" href="https://ucrsolarcar.com/" target="_parent">Solar Car</a>
          </Col>
          <Col>
          <a className="joinus-links-cs-orgs" href="https://ucrswe.org/" target="_parent">SWE</a>
          </Col>

          </Row> */}
          
      </div>
    </div>

  )
}

export default Links