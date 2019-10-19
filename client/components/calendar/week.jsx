import React, { Component } from 'react';
import Styles from './styles.js';
import moment from 'moment';

class Week extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <tr>
        {this.props.dates.map((date, i) => moment().date() > date && this.props.incrementMonth === 0 ?
          <td key={i} style={Styles.calendarTextGrey} >{date}</td> :
          moment().date() < date && this.props.incrementMonth === 0 ?
            <td onClick={() => {this.props.getDate(date, moment().month()+1+this.props.incrementMonth,  moment().month(moment().month() + this.props.incrementMonth).format('YYYY'), this.props.calType)}} key={i} style={Styles.calendarText} >{date}</td> :
            this.props.incrementMonth < 0 ?
              <td key={i} style={Styles.calendarTextGrey} >{date}</td> :
              <td onClick={() => {this.props.getDate(date, moment().month()+1 + this.props.incrementMonth, moment().month(moment().month() + this.props.incrementMonth).format('YYYY'), this.props.calType)}} key={i} style={Styles.calendarText} >{date}</td>)}
      </tr>
    )
  }
}

export default Week;