import React, { Component } from 'react';
import './css/app.css';
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
        <div className="position">
          <span className="font-style-small">Dates</span>
        </div>
        <div className="select-box">
          <div className={this.state.toggledFirst ? "date-selected" : ''}>
            <p onClick={this.toggleFirstCalendar} className="select-box-text">{this.props.checkIn === '' ? 'Check-in' : this.props.checkIn}</p>
          </div>
          <span className="arrow">→</span>
          <div className={this.state.toggledSecond ? 'date-selected': ''}>
            <p onClick={this.toggleSecondCalendar} className="select-box-text">{this.props.checkOut === '' ? 'Checkout' : this.props.checkOut}</p>
          </div>
        </div>
          <div style={{position: 'absolute', left: '27px'}}>
            {this.state.toggledFirst ? <Calendar unavailableDates={this.props.unavailableDates} checkIn={this.props.checkIn} checkOut={this.props.checkOut} calType={'check-in'} getDate={this.props.getDate} /> : ''}
          </div>
          <div style={{position: 'absolute', left: '27px'}}>
          {this.state.toggledSecond ? <Calendar unavailableDates={this.props.unavailableDates} checkIn={this.props.checkIn} checkOut={this.props.checkOut} calType={'check-out'} getDate={this.props.getDate} /> : ''}
          </div>
      </div>
    )
  }
}

export default Dates;