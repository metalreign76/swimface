import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './RegistrationWrapper.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class RegistrationWrapper extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="registrationWrapper">
        <Container>
          <Row>
            <Col>
              Registration
            </Col>
          </Row>
        </Container>

      </div>
    );
  }
}

export default RegistrationWrapper;
