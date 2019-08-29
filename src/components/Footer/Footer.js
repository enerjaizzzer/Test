import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <Container className="fixed-bottom bg-dark" fluid>
      <Row>
        <Col>
          <h4 className="text-light">by enerjaizzzer </h4>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
