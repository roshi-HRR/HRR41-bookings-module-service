import React, {Component} from 'react';
import Styles from './styles.js';

class Info extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div style={Styles.position}>
        <p style={Styles.fontStyleSmall}>$131 X 5.6 Nights</p>
        <p style={Styles.fontStyleSmall}>Cleaning Fee {this.props.cleaning}</p>
        <p style={Styles.fontStyleSmall}>Service Fee {this.props.service}</p>
        <p style={Styles.fontStyleSmall}>Occupancy Taxes and Fees {this.props.taxes}</p>
        <p style={Styles.fontStyleSmall}>Total</p>
      </div>
    )
  }
}

export default Info;