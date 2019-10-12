import React from 'react';
import styles from './styles.js';

const Cost = (props) => {
  return (
    <div style={styles.flexContainer}>
      <span style={styles.costStyleLarge}>$130<span style={styles.costStyleSmall}> per night</span></span>
     <hr></hr>
    </div>
  )
}

export default Cost;