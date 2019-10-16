import React, {Component} from 'react';
import Styles from './styles.js';
import moment from 'moment';

import Week from './week.jsx';

class Calendar extends Component {
  constructor(props){
    super(props);

    this.state = {
      date: moment(),
      weeks: []
    }

    this.getDate = this.getDate.bind(this);
    this.renderWeeks = this.renderWeeks.bind(this);
  }

  componentDidMount(){
    this.renderWeeks();
  }

  getDate() {
      console.log(moment().month(3).daysInMonth());
  }

  renderWeeks() {
    let month = [];
    let startOfMonthDay = moment().startOf('month').format('d');
    let daysInMonth = moment().daysInMonth();

    //create first array with appropriate amount of empty strings
    let week = [];

    for(let i=0; i<startOfMonthDay; i++){
      week.push('');
    }

    for(let i=1; i<8-startOfMonthDay; i++){
      week.push(i.toString());
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
      weeks: month
    })
  }

  render(){
    let weeksArray = ['sun', 'mon', 'tue', 'wed', 'thurs', 'fri', 'sat'];

    return (
      <div style={Styles.main}>
        <p style={Styles.monthText}>{moment().format('MMMM')}</p>
        <table>
          <tbody>
            <tr>
              {weeksArray.map((day, i) => <td key={i} style={Styles.calendarText}>{day}</td>)}
            </tr>
            {/* add weeks */}
            {this.state.weeks.map((week, i) => <Week key={i} dates={week}/>)}
          </tbody>
        </table>
      </div>
    )
  }
}

export default Calendar;