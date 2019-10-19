import React, { Component } from 'react';
import Styles from './styles.js';
import moment from 'moment';

class Week extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    let renderDate = (date, i) => {
      if(moment().date() > date && this.props.incrementMonth === 0){
        return <td key={i} style={Styles.calendarTextGrey} >{date}</td>;
      }
      else if(moment().date() < date && this.props.incrementMonth === 0){
        return  <td onClick={() => {this.props.getDate(date, moment().month()+1+this.props.incrementMonth,  moment().month(moment().month() + this.props.incrementMonth).format('YYYY'), this.props.calType)}} key={i} style={Styles.calendarText} >{date}</td>;
      }
      else if( this.props.incrementMonth < 0){
        return <td key={i} style={Styles.calendarTextGrey} >{date}</td>;
      }
      else{
        return  <td onClick={() => {this.props.getDate(date, moment().month()+1+this.props.incrementMonth,  moment().month(moment().month() + this.props.incrementMonth).format('YYYY'), this.props.calType)}} key={i} style={Styles.calendarText} >{date}</td>;
      }
    }

    let isDate = (day, month, year) => {

    }

    return (
      <tr>
        {this.props.dates.map((date, i) => renderDate(date, i))}
      </tr>
    )
  }
}

export default Week;