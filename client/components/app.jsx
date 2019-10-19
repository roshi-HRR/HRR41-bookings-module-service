import React from 'react';
import axios from 'axios';
import styles from './styles.js';
import Cost from './cost.jsx';
import Line from './line.jsx';
import Dates from './dates.jsx';
import Guests from './guests.jsx';
import ReserveButton from './reserve.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cost: 0,
      checkIn: '',
      checkOut: ''
    }

    this.getDate = this.getDate.bind(this);
  }

  async componentDidMount() {
    let house = await axios.get('/api/houses');

    //just randomizing the house atm
    let random = Math.floor(Math.random() * 100);

    this.setState({
      cost: house.data[random].initialPrice
    })
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
    else if(calType === 'check-out'){
      await this.setState({
        checkOut: fixedMonth + '-' + day + '-' + year
      })
    }

    console.log(this.state.checkIn);
  }

  render() {
    return (
      <div style={styles.appStyle}>
        <Cost initial={this.state.cost} />
        <Line />
        <Dates getDate={this.getDate}/>
        <Guests />
        <ReserveButton />
      </div>
    )
  }
}

export default App;