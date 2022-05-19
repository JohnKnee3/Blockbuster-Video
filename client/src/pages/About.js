import React from "react";
import { Row, Col } from "react-bootstrap";
const About = () => {
  return (
    <div className="container">
      <Row>
        <h2>WE ARE BACK!!!!!!</h2>
        <Col lg={6} md={12}>
          <img
            className="about-image"
            alt="Blockbuster Logo"
            src={`/logo512.png`}
          />
        </Col>
        <Col lg={6} md={12}>
          <p>
            I know you missed us and are even like man where have you been? Well
            let us tell you...
          </p>
        </Col>
      </Row>
      <Row>
        <Col lg={6} md={12}>
          <p>When we went under we got really sad.</p>
        </Col>
        <Col lg={6} md={12}>
          <img
            className="about-image"
            alt="sad no money"
            src={`/images/sad.jpeg`}
          />
        </Col>
      </Row>
      <Row>
        <Col lg={6} md={12}>
          <img
            className="about-image"
            alt="person meditating"
            src={`/images/soul-searching.jpeg`}
          />
        </Col>
        <Col lg={6} md={12}>
          <p>We did some soul searching.</p>
        </Col>
      </Row>
      <Row>
        <Col lg={6} md={12}>
          <p>We read a book.</p>
        </Col>
        <Col lg={6} md={12}>
          <img
            className="about-image"
            alt="woman reading a book"
            src={`/images/reading-book.jpeg`}
          />
        </Col>
      </Row>
    </div>
  );
};

export default About;
