import React from 'react';
import axios from 'axios';
import styles from './styles.js';
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
      unavailableDates: []
    }

    this.getDate = this.getDate.bind(this);
    this.canCheckOut = this.canCheckOut.bind(this);
  }

  async componentDidMount() {
    let house = await axios.get('/api/houses');

    //just randomizing the house at the moment
    let random = Math.floor(Math.random() * 100);

    this.setState({
      cost: house.data[random].initialPrice,
      unavailableDates: house.data[random].unavailable_dates
    });
  }

  canCheckOut(checkIn, checkOut){
    let checkInArray = checkIn.split('-');
    let monthCheckIn = checkInArray[0];
    let dayCheckIn = checkInArray[1];
    let yearCheckIn = checkInArray[2];

    let checkOutArray = checkOut.split('-');
    let monthCheckOut = checkOutArray[0];
    let dayCheckOut = checkOutArray[1];
    let yearCheckOut = checkOutArray[2];

    let checkInDate = new Date(yearCheckIn, monthCheckIn-1, dayCheckIn);
    let checkOutDate = new Date(yearCheckOut, monthCheckOut-1, dayCheckOut);

    if(checkOutDate > checkInDate){
      return true;
    }
    else{
      return false;
    }
  }

  async getDate(day, month, year, calType){
    let fixedMonth = 0;
    let amountYears = Math.floor(month/12);

    if(month > 12){
      fixedMonth = month-(amountYears * 12);
    }
    else{
      fixedMonth = month;
    }

    if(calType === 'check-in'){
      await this.setState({
        checkIn: fixedMonth + '-' + day + '-' + year
      })
    }
    else if(calType === 'check-out' && this.canCheckOut(this.state.checkIn, fixedMonth + '-' + day + '-' + year)){
      await this.setState({
        checkOut: fixedMonth + '-' + day + '-' + year
      })
    }

    console.log("check-in ", this.state.checkIn, "check-out", this.state.checkOut);
  }

  render() {
    return (
      <div style={styles.appStyle}>
        <Cost initial={this.state.cost} />
        <Line />
        <Dates unavailableDates={this.state.unavailableDates} checkIn={this.state.checkIn} checkOut={this.state.checkOut} getDate={this.getDate}/>
        <Guests />
        <Line/>
        <ReserveButton />
      </div>
    )
  }
}

export default App;