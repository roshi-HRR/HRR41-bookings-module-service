import React, { Component } from 'react';
import styles from './styles.js';

class ReserveButton extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={styles.buttonUnpushed}>
        <p style={styles.buttonText}>Reserve</p>
      </div>
    )
  }
}

export default ReserveButton;