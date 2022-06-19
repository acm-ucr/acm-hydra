import React from "react";
import {
  FaDiscord,
  FaInstagram,
  FaSlack,
  FaMedium,
  FaYoutube,
} from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { Row, Col, Container } from "react-bootstrap";
import "./Link.css";

const Links = () => {
  const Links = [
    {
      link: "https://docs.google.com/forms/d/e/1FAIpQLSfImoSRQ7d5lQASl5OPxxEK_2iiZT0UKxVsMsn3BMVCkqC-WQ/viewform",
      image: <FaDiscord className="icon" />,
    },
    {
      link: "https://www.instagram.com/acm_ucr/",
      image: <FaInstagram className="icon" />,
    },
    {
      link: "https://csatucr.slack.com/join/shared_invite/zt-pcaakxnq-pT7js04C52GpGHRoggHNIw#/shared-invite/email",
      image: <FaSlack className="icon" />,
    },
    {
      link: "https://medium.com/acm-at-ucr",
      image: <FaMedium className="icon" />,
    },
    {
      link: "mailto:contact@acmucr.org",
      image: <SiGmail className="icon" />,
    },
    {
      link: "https://www.youtube.com/channel/UCSLoGcSzNfpHIzdT6QzsmnQ",
      image: <FaYoutube className="icon" />,
    },
  ];

  return (
    <Container
      fluid
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Row lg={12} md={6} style={{ width: "100%" }}>
        {Links.map((links) => (
          <Col
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <a
              href={links.link}
              target="_blank"
              rel="noopener noreferrer"
              className="Home-Link-icon"
            >
              {links.image}
            </a>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Links;
