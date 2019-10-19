import React, { Component } from 'react';
import Styles from './styles.js';
import moment from 'moment';

class Week extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    let getDateBlack = (i, date) => {
      return  <td onClick={() => {this.props.getDate(date, moment().month()+1+this.props.incrementMonth,  moment().month(moment().month() + this.props.incrementMonth).format('YYYY'), this.props.calType)}} key={i} style={Styles.calendarText} >{date}</td>
    }

    let getDateGrey = (i, date) => {
      return <td key={i} style={Styles.calendarTextGrey} >{date}</td>;
    }

    return (
      <tr>
        {this.props.dates.map((date, i) => moment().date() > date && this.props.incrementMonth === 0 ?
         getDateGrey(i, date) :
          moment().date() < date && this.props.incrementMonth === 0 ?
           getDateBlack(i, date) :
            this.props.incrementMonth < 0 ?
              getDateGrey(i, date) :
              getDateBlack(i, date))}
      </tr>
    )
  }
}

export default Week;