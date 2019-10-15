import React from 'react';

import styles from './styles.js';
import Cost from './cost.jsx';
import Line from './line.jsx';
import Dates from './dates.jsx';
import Guests from './guests.jsx';
import ReserveButton from './reserve.jsx';

class App extends React.Component {
  constructor(props){
    super(props);
  }

  getCost(hotelId){

  }

  render(){
    return (
      <div style = {styles.appStyle}>
        <Cost/>
        <Line/>
        <Dates/>
        <Guests/>
        <ReserveButton/>
      </div>
    )
  }
}

export default App;