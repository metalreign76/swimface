import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import './AdminWrapper.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import InfoPanel from './InfoPanel';
import axios from 'axios';
require('axios-debug-log');

class AdminWrapper extends Component {

  constructor(props) {
    super(props);
    this.state = { liveInfo: "" };

    this.handle_UpdateMembers = this.handle_UpdateMembers.bind(this);
  }

  handle_UpdateMembers() {
    this.setState({liveInfo: "Fetching all members!\n"})
    axios.get('http://localhost:3001/users')
    .then(response => {
      this.setState({liveInfo: response.data.members.length + " members retrieved\n" 
        + this.state.liveInfo})
    })
    .catch(error => {
      this.setState({liveInfo: error + "\n" + this.state.liveInfo})
    })
  }

  render() {
    return (
      <div className="adminWrapper">
        <Container>
          <Row>
            <Col>
              <Button variant="primary" onClick={this.handle_UpdateMembers}>Update Members</Button>
            </Col>
            <Col className="admin_infoPanel">
              <InfoPanel info={this.state.liveInfo}></InfoPanel>
            </Col>
          </Row>
        </Container>

      </div>
    );
  }
}

export default AdminWrapper;
