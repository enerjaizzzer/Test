import React, { Component } from 'react';
import {
  Button,
  Modal,
  Form,
} from 'react-bootstrap';

class LoginModal extends Component {
  constructor(props) {
    super(props)

    this.onChangeLogin = props.onChangeLogin;
    this.submitLogin = props.submitLogin;
  }

  render() {
    return (
      <Modal
        {...this.props}
        size="xs"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Form
          className="text-center modal-form bg-dark text-light"
          onSubmit={this.submitLogin}
        >
          <Form.Group>
            <Form.Label className="title-form">Send your Nickname</Form.Label>
            <Form.Control
              id="formName"
              type="text"
              onChange={this.onChangeLogin}
              placeholder="NickName"
            />
          </Form.Group>
          <Button
            variant="outline-light"
            type="submit"
            className="button"
          >
            LogIn
          </Button>
        </Form>
      </Modal>
    );
  }
}

export default LoginModal;
