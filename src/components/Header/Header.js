import React from 'react';
import { Container, Row, Col, Form, Button, Navbar } from 'react-bootstrap';

const Header = ({
  onChangeSearch,
  submitSearch,
}) => {

  return (
    <Container className="bg-dark header" fluid>
      <Form
        className="text-center"
        onSubmit={submitSearch}
      >
        <Row>
          <Col xl={2}>
            <Navbar.Brand href="#home" className="text-light">Movie Catalog</Navbar.Brand>
          </Col>
          <Col xl={7}>
            <Form.Control
              id="form"
              type="text"
              onChange={onChangeSearch}
              placeholder="Text message"
              className="send-form"
            />
          </Col>
          <Col
            xl={1}
          >
            <Button
              variant="outline-light"
              type="submit"
              className="button"
            >
              Search
              </Button>
          </Col>
        </Row>
      </Form>
    </Container>
  );
}

export default Header;