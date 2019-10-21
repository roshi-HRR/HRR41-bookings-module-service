import React, { Component } from 'react';
import styles from './styles.js';
import Calendar from './calendar/calendar.jsx';

class Dates extends Component {
  constructor(props) {
    super(props);

    this.state = {
      toggledFirst: false,
      toggledSecond: false
    }

    this.toggleFirstCalendar = this.toggleFirstCalendar.bind(this);
    this.toggleSecondCalendar = this.toggleSecondCalendar.bind(this);
  }

  //can use spread operator to use more than one style

  toggleFirstCalendar() {
    if(this.state.toggledSecond === true){
      this.setState({
        toggledSecond: false
      })
    }
    this.setState({
      toggledFirst: !this.state.toggledFirst
    })
  }

  toggleSecondCalendar() {
    if(this.state.toggledFirst === true){
      this.setState({
        toggledFirst: false
      })
    }
    this.setState({
      toggledSecond: !this.state.toggledSecond
    })
  }

  render() {
    return (
      <div>
        <div style={styles.position}>
          <span style={styles.fontStyleSmall}>Dates</span>
        </div>
        <div style={styles.selectBox}>
          <p onClick={this.toggleFirstCalendar} style={styles.selectBoxText}>Check-in</p>
          <span style={styles.arrow}>→</span>
          <p onClick={this.toggleSecondCalendar} style={styles.selectBoxText}>Check-out</p>
        </div>
          <div style={{position: 'absolute', left: '27px'}}>
            {this.state.toggledFirst ? <Calendar checkIn={this.props.checkIn} checkOut={this.props.checkOut} calType={'check-in'} getDate={this.props.getDate} /> : ''}
          </div>
          <div style={{position: 'absolute', left: '123px'}}>
          {this.state.toggledSecond ? <Calendar checkIn={this.props.checkIn} checkOut={this.props.checkOut} calType={'check-out'} getDate={this.props.getDate} /> : ''}
          </div>
      </div>
    )
  }
}

export default Dates;