import React, {Component} from 'react';
import styles from './styles.js';

class Guests extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div>
        <div style={styles.position}>
          <span style={styles.fontStyleSmall}>Guests</span>
          </div>
          <div style={styles.selectBoxGuest}>
            <p style={styles.selectBoxText}>1 Guest</p>
            <p style={styles.selectBoxText}>˅</p>
        </div>
      </div>
    )
  }
}

export default Guests;