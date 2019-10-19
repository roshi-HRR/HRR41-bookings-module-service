import React, { Component } from 'react';
import Styles from './styles.js';
import moment from 'moment';

class Week extends Component {
  constructor(props) {
    super(props);

    this.isBetween = this.isBetween.bind(this);
  }

  isBetween(date){
    let checkInArray = this.props.checkIn.split('-');
    let checkOutArray = this.props.checkOut.split('-');
    let dateArray = date.split('-');


    let monthCheckIn = checkInArray[0];
    let dayCheckIn = checkInArray[1];
    let yearCheckIn = checkInArray[2];

    let monthCheckOut = checkOutArray[0];
    let dayCheckOut = checkOutArray[1];
    let yearCheckOut = checkOutArray[2];

    let monthDate = dateArray[0];
    let dayDate = dateArray[1];
    let yearDate = dateArray[2];

    //A date is in-between two dates if it is >= the check-in date and <= the check-out date
    //the count variable increments when one of these conditions is met, if the count variable reaches 2 then the date is in-between
    //e.gg this.isBetween(10-24-2019) this.state.checkIn = 10-15-2019 this.state.checkOut = 10-30-2019

    let count = 0;

    if(yearCheckIn <= yearDate){
      if(monthCheckIn <= monthDate){
        if(dayCheckIn <= dayDate){
          count++;
        }
      }
    }

    if(yearCheckOut >= yearDate){
      if(monthCheckOut >= monthDate){
        if(dayCheckOut >= dayDate){
          count++
        }
      }
    }

    if(count === 2){
      return true;
    }
    else{
      return false;
    }
  }

  render() {
    let renderDate = (date, i) => {
      if(moment().date() > date && this.props.incrementMonth === 0){
        return <td key={i} style={Styles.calendarTextGrey} >{date}</td>;
      }
      else if(this.isBetween(moment().month()+1+this.props.incrementMonth + '-' + date + '-' + moment().month(moment().month() + this.props.incrementMonth).format('YYYY'))){
        return <td key={i} style={Styles.calendarTextRed} >{date}</td>;
      }
      else if(moment().date() < date && this.props.incrementMonth === 0){
        return  <td onClick={() => {this.props.getDate(date, moment().month()+1+this.props.incrementMonth,  moment().month(moment().month() + this.props.incrementMonth).format('YYYY'), this.props.calType)}} key={i} style={Styles.calendarText} >{date}</td>;
      }
      else if(this.props.incrementMonth < 0){
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