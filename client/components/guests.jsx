import React, { Component } from 'react';
import styles from './styles.js';
import DropDown from './guests/dropdown.jsx';

class Guests extends Component {
  constructor(props) {
    super(props);

    this.state = {
      toggled: false
    }

    this.showDropDown = this.showDropDown.bind(this);
  }

  showDropDown() {
    this.setState({
      toggled: !this.state.toggled
    })
  }

  render() {
    return (
      <div>
        <div style={styles.position}>
          <span style={styles.fontStyleSmall}>Guests</span>
        </div>
        <div style={styles.selectBoxGuest}>
          <p style={styles.selectBoxText}>1 Guest</p>
          <p onClick = {this.showDropDown} style={styles.selectBoxText}>˅</p>
        </div>
      {this.state.toggled ? <DropDown/> : ''}
      </div>
    )
  }
}

export default Guests;