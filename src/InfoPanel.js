import React, { Component } from 'react';
import './InfoPanel.css';

class InfoPanel extends Component {
  render() {
    return (
      <div className="infoPanel">
        <pre>{this.props.info.toString()}</pre>
      </div>
    );
  }
}

export default InfoPanel;
