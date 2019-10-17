import React, {Component} from 'react';
import Styles from './styles.js';
import moment from 'moment';

import Week from './week.jsx';

class Calendar extends Component {
  constructor(props){
    super(props);

    this.state = {
      date: moment(),
      weeks: [],
      month: '',
      year: moment().month(moment().month()).format('YYYY'),
      incrementMonth: 0
    }

    this.dateRight = this.dateRight.bind(this);
    this.dateLeft = this.dateLeft.bind(this);
    this.renderWeeks = this.renderWeeks.bind(this);
  }

  componentDidMount(){
    this.renderWeeks(moment().month());
  }

  async dateRight(){
    await this.setState({
      incrementMonth: this.state.incrementMonth + 1
    })

    await this.setState({
      year: moment().month(moment().month() + this.state.incrementMonth).format('YYYY')
    })

    this.renderWeeks(moment().month() + this.state.incrementMonth);
  }

  async dateLeft(){
    await this.setState({
      incrementMonth: this.state.incrementMonth - 1
    })

    await this.setState({
      year: moment().month(moment().month() + this.state.incrementMonth).format('YYYY')
    })

    this.renderWeeks(moment().month() + this.state.incrementMonth);
  }

  renderWeeks(curMonth) {
    let month = [];
    let startOfMonthDay = moment().month(curMonth).startOf('month').format('d');
    let daysInMonth = moment().month(curMonth).daysInMonth();

    //create first array with appropriate amount of empty strings
    let week = [];

    for(let i=0; i<startOfMonthDay; i++){
      week.push('');
    }

    for(let i=1; i<=7-startOfMonthDay; i++){
      week.push(i);
    }

    month.push(week);

    let count = 0;
    week = [];

    for(let i=8-startOfMonthDay; i<=daysInMonth; i++){
      count++;

      week.push(i);

      if(count === 7){
        month.push(week);
        week = [];
        count = 0;
      }
    }

    month.push(week);

    //push remaining weeks into month array
    this.setState({
      weeks: month,
      month: moment().month(curMonth).format('MMMM'),
    })
  }

  render(){
    let weeksArray = ['sun', 'mon', 'tue', 'wed', 'thurs', 'fri', 'sat'];

    return (
      <div style={Styles.main}>
        <p style={Styles.monthText}>{this.state.month}</p>
        <p style={Styles.yearText}>{this.state.year}</p>
        <table>
          <tbody>
            <tr>
              {weeksArray.map((day, i) => <td key={i} style={Styles.calendarText}>{day}</td>)}
            </tr>
            {this.state.weeks.map((week, i) => <Week key={i} dates={week}/>)}
          </tbody>
        </table>
        <button onClick={this.dateLeft}>previous</button>
        <button onClick={this.dateRight}>next</button>
      </div>
    )
  }
}

export default Calendar;