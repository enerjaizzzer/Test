import React from 'react';
import { Container, Row, Col, Form, Button, Navbar } from 'react-bootstrap';

import LoginModal from '../LoginModal/LoginModal';

const Header = ({
  onChangeSearch,
  submitSearch,
  onChangeLogin,
  submitLogin,
  login,
  nickName
}) => {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <Container className="bg-dark header" fluid>
      <Form
        className="text-center"
        onSubmit={submitSearch}
      >
        <Row>
          <Col xs={2}>
            <Navbar.Brand href="#home" className="text-light">Movie Catalog</Navbar.Brand>
          </Col>
          <Col
            xl={7}
            md={6}
            xs={5}
          >
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
            md={2}
            xs={3}
          >
            <Button
              variant="outline-light"
              type="submit"
              className="button"
            >
              Search
              </Button>
          </Col>
          {(!login) && (
            <Col xs={2} className="header-buttons">
              <Button className="button" variant="outline-light" onClick={() => setModalShow(true)}>
                LogIn
              </Button>
              <LoginModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                onChangeLogin={onChangeLogin}
                submitLogin={submitLogin}
              />
            </Col>
          )}
          {(login) && (
            <Col xs={2}>
              <h3>{nickName}</h3>
            </Col>
          )}
        </Row>
      </Form>
    </Container>
  );
}

export default Header;
