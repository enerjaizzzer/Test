import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Main = ({ data, value }) => {
  const totalResults = data.totalResults;
  const stringResults = `You serched for: ${value}, ${totalResults} results found`;

  return (
    <Container>
      <Row>
        <Col>
          <h3>{stringResults}</h3>
        </Col>
      </Row>
    </Container>
  );
}

export default Main;
