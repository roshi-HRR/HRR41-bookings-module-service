import React, {Component} from 'react';
import styles from './styles.js';

class Dates extends Component {
  constructor(props){
    super(props);
  }

  //can use spread operator to use more than one style

  render(){
    return (
      <div>
        <span style={{...styles.fontStyleSmall, ...styles.position}}>Dates</span>
        <div style={styles.selectBox}>
            <p style={styles.selectBoxText}>Check-in</p>
            <span style={styles.arrow}>→</span>
        </div>
      </div>
    )
  }
}

export default Dates;