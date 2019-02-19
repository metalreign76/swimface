import React, { Component } from 'react';
import { Route, withRouter } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AdminWrapper from './AdminWrapper';
import RegistrationWrapper from './RegistrationWrapper';
require('dotenv').config()

class App extends Component {
  constructor(props) {
    super(props);
    this.loadRegistration = this.loadRegistration.bind(this);
    this.loadAdmin = this.loadAdmin.bind(this);
  }

  loadRegistration() {
    this.props.history.push('/registration')
  }

  loadAdmin() {
    this.props.history.push('/')
  }

  render() {
    return (
      <div className="App">
        <Container>
          <Row>
            <Col>
              <div className="lasc_banner">
                Limavady Amateur Swimming Club
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <Nav variant="tabs" defaultActiveKey="admin">
                <Nav.Item>
                  <Nav.Link eventKey="admin" onSelect={this.loadAdmin}>Admin</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="registration" onSelect={this.loadRegistration}>Registration</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
          </Row>
          <Row>
            <Col>
              <Route exact path='/' component={AdminWrapper} />
              <Route exact path='/registration' component={RegistrationWrapper} />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default withRouter(App);
