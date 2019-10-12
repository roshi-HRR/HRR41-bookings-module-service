import React from 'react';
import styles from './styles.js';

const Cost = (props) => {
  return (
    <div style={styles.flexContainer}>
      <span style={styles.fontStyleLarge}>$130<span style={styles.fontStyleSmall}> per night</span></span>
    </div>
  )
}

export default Cost;