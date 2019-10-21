import React, {Component} from 'react';
import Styles from './styles.js';
import Line from './line.jsx';

class Info extends Component {
  constructor(props){
    super(props);

    this.datesBetween = this.datesBetween.bind(this);
  }

  datesBetween() {
    let checkInArray = this.props.checkIn.split('-');
    let checkOutArray = this.props.checkOut.split('-');

    let date1 = new Date(checkInArray[2], checkInArray[0]-1, checkInArray[1]);
    let date2 = new Date(checkOutArray[2], checkOutArray[0]-1, checkOutArray[1]);

    let difference = date2.getTime() - date1.getTime();

    let days = difference / (1000*3600*24);

    return days;
  }

  render(){
    return (
      <div style={Styles.position}>
        <div style={Styles.row}>
          <p style={Styles.fontStyleSmall}>${this.props.initial} X {this.datesBetween()} Nights</p>
          <p style={Styles.fontStyleSmall}>${this.props.initial * this.datesBetween()}</p>
        </div>
        <div style={Styles.row}>
          <p style={Styles.fontStyleSmall}>Cleaning Fee</p>
          <p style={Styles.fontStyleSmall}>${this.props.cleaning}</p>
        </div>
        <div style={Styles.row}>
          <p style={Styles.fontStyleSmall}>Service Fee</p>
          <p style={Styles.fontStyleSmall}>${this.props.service}</p>
        </div>
        <div style={Styles.row}>
          <p style={Styles.fontStyleSmall}>Occupancy Taxes and Fees</p>
          <p style={Styles.fontStyleSmall}>${this.props.taxes}</p>
        </div>
        <div style={Styles.row}>
          <p style={Styles.fontStyleSmall}>Total</p>
          <p style={Styles.fontStyleSmall}>${this.props.initial * this.datesBetween() + this.props.service + this.props.cleaning + this.props.taxes}</p>
        </div>
      </div>
    )
  }
}

export default Info;