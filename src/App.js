import React, { Component } from 'react';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AdminWrapper from './AdminWrapper';
require('dotenv').config()

class App extends Component {
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
              <Nav variant="tabs" defaultActiveKey="/">
                <Nav.Item>
                  <Nav.Link href="/">Admin</Nav.Link>
                </Nav.Item>
                {/* <Nav.Item>
                  <Nav.Link eventKey="link-1">Option 2</Nav.Link>
                </Nav.Item> */}
              </Nav>
            </Col>
          </Row>
          <Row>
            <Col>
              <AdminWrapper/>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
