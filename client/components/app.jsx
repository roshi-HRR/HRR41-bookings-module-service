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
      cost: 0
    }
  }

  async componentDidMount() {
    let house = await axios.get('/api/houses');

    //just randomizing the house atm
    let random = Math.floor(Math.random() * 100);

    this.setState({
      cost: house.data[random].initialPrice
    })
  }

  render() {
    return (
      <div style={styles.appStyle}>
        <Cost initial={this.state.cost} />
        <Line />
        <Dates />
        <Guests />
        <ReserveButton />
      </div>
    )
  }
}

export default App;