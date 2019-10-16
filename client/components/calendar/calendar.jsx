import React, {Component} from 'react';
import Styles from './styles.js';
import moment from 'moment';

import Week from './week.jsx';

class Calendar extends Component {
  constructor(props){
    super(props);

    this.state = {
      date: moment()
    }

    this.getDate = this.getDate.bind(this);
  }

  getDate() {
      console.log(moment().month(3).daysInMonth());
  }

  render(){
    return (
      <div style={Styles.main}>
        <Week dates={[]}/>
      </div>
    )
  }
}

export default Calendar;