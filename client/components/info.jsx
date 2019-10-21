import React, {Component} from 'react';

class Info extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div>
        <p>$131 X 5.6 Nights</p>
        <p>Cleaning Fee</p>
        <p>Service Fee</p>
        <p>Occupancy Taxes and Fees</p>
        <p>Total</p>
      </div>
    )
  }
}

export default Info;