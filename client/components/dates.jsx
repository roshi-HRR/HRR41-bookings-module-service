import React, { Component } from 'react';
import './css/app.css';
import Calendar from './calendar/calendar.jsx';

class Dates extends Component {
  constructor(props) {
    super(props);

    this.state = {
      toggledFirst: false,
      toggledSecond: false,
    };

    this.toggleFirstCalendar = this.toggleFirstCalendar.bind(this);
    this.toggleSecondCalendar = this.toggleSecondCalendar.bind(this);
  }

  // can use spread operator to use more than one style

  toggleFirstCalendar() {
    const { toggledSecond, toggledFirst } = this.state;
    if (toggledSecond === true) {
      this.setState({
        toggledSecond: false,
      });
    }
    this.setState({
      toggledFirst: !toggledFirst,
    });
  }

  toggleSecondCalendar() {
    const { toggledSecond, toggledFirst } = this.state;
    if (toggledFirst === true) {
      this.setState({
        toggledFirst: false,
      });
    }
    this.setState({
      toggledSecond: !toggledSecond,
    });
  }

  render() {
    const { toggledFirst, toggledSecond } = this.state;
    const {
      checkIn, checkOut, unavailableDates, getDate,
    } = this.props;
    return (
      <div>
        <div className="position">
          <span className="font-style-small">Dates</span>
        </div>
        <div className="select-box">
          <div className={toggledFirst ? 'date-selected' : ''}>
            <p onClick={this.toggleFirstCalendar} className="select-box-text">{checkIn === '' ? 'Check-in' : checkIn}</p>
          </div>
          <span className="arrow">→</span>
          <div className={toggledSecond ? 'date-selected' : ''}>
            <p onClick={this.toggleSecondCalendar} className="select-box-text">{checkOut === '' ? 'Checkout' : checkOut}</p>
          </div>
        </div>
        <div style={{ position: 'absolute', left: '27px' }}>
          {toggledFirst ? <Calendar unavailableDates={unavailableDates} checkIn={checkIn} checkOut={checkOut} calType="check-in" getDate={getDate} /> : ''}
        </div>
        <div style={{ position: 'absolute', left: '27px' }}>
          {toggledSecond ? <Calendar unavailableDates={unavailableDates} checkIn={checkIn} checkOut={checkOut} calType="check-out" getDate={getDate} /> : ''}
        </div>
      </div>
    );
  }
}

export default Dates;
