import React from 'react';
import axios from 'axios';
import './css/app.css';
import Cost from './cost.jsx';
import Line from './line.jsx';
import Dates from './dates.jsx';
import Guests from './guests.jsx';
import ReserveButton from './reserve.jsx';
import Info from './info.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cost: 0,
      checkIn: '',
      checkOut: '',
      unavailableDates: [],
      cleaning: null,
      service: null,
      taxes: null,
      total: null,
    };

    this.getDate = this.getDate.bind(this);
    this.canCheckOutOrIn = this.canCheckOutOrIn.bind(this);
    this.setTotal = this.setTotal.bind(this);
  }

  async componentDidMount() {
    const house = await axios.get('/api/houses');

    // just randomizing the house at the moment
    const random = Math.floor(Math.random() * 100);

    this.setState({
      cost: house.data[random].initialPrice,
      unavailableDates: house.data[random].unavailable_dates,
      cleaning: house.data[random].cleaning,
      service: house.data[random].service,
      taxes: house.data[random].taxes,
    });
  }

  async getDate(day, month, year, calType) {
    let fixedMonth = 0;
    const amountYears = Math.floor(month / 12);

    if (month > 12) {
      fixedMonth = month - (amountYears * 12);
    } else {
      fixedMonth = month;
    }

    if (calType === 'check-in' && this.state.checkOut === '') {
      await this.setState({
        checkIn: `${fixedMonth}-${day}-${year}`,
      });
    } else if (calType === 'check-in' && this.state.checkOut !== '' && this.canCheckOutOrIn(`${fixedMonth}-${day}-${year}`, this.state.checkOut)) {
      await this.setState({
        checkIn: `${fixedMonth}-${day}-${year}`,
      });
    } else if (calType === 'check-out' && this.canCheckOutOrIn(this.state.checkIn, `${fixedMonth}-${day}-${year}`)) {
      await this.setState({
        checkOut: `${fixedMonth}-${day}-${year}`,
      });
    }

    console.log('check-in ', this.state.checkIn, 'check-out', this.state.checkOut);
  }

  setTotal(number) {
    this.setState({
      total: number,
    });
  }


  canCheckOutOrIn(checkIn, checkOut) {
    const checkInArray = checkIn.split('-');
    const monthCheckIn = checkInArray[0];
    const dayCheckIn = checkInArray[1];
    const yearCheckIn = checkInArray[2];

    const checkOutArray = checkOut.split('-');
    const monthCheckOut = checkOutArray[0];
    const dayCheckOut = checkOutArray[1];
    const yearCheckOut = checkOutArray[2];

    const checkInDate = new Date(yearCheckIn, monthCheckIn - 1, dayCheckIn);
    const checkOutDate = new Date(yearCheckOut, monthCheckOut - 1, dayCheckOut);

    if (checkOutDate > checkInDate) {
      return true;
    }

    return false;
  }

  render() {
    const {
      cost, total, unavailableDates, checkIn, checkOut, cleaning, service, taxes,
    } = this.state;
    return (
      <div className="app-style">
        <Cost initial={cost} />
        <Line />
        <Dates
          unavailableDates={unavailableDates}
          checkIn={checkIn}
          checkOut={checkOut}
          getDate={this.getDate}
        />
        <Guests />
        <Line />
        {checkIn !== '' && checkOut !== '' ? <Info total={total} setTotal={this.setTotal} initial={cost} checkIn={checkIn} checkOut={checkOut} cleaning={cleaning} service={service} taxes={taxes} /> : ''}
        <ReserveButton />
      </div>
    );
  }
}

export default App;
