import React, { Component } from 'react';
import './css/app.css';

class ReserveButton extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="button-unpushed">
        <p className="button-text">Reserve</p>
      </div>
    )
  }
}

export default ReserveButton;