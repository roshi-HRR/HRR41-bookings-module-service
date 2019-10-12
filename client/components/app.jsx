import React from 'react';
import styles from './styles.js';
import Cost from './cost.jsx';
import Line from './line.jsx';
import Dates from './dates.jsx';

class App extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div style = {styles.appStyle}>
        <Cost/>
        <Line/>
        <Dates/>
      </div>
    )
  }
}

export default App;