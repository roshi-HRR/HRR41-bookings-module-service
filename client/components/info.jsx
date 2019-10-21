import React, {Component} from 'react';
import './css/app.css';
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

    return Math.floor(days);
  }

  render(){
    return (
      <div className="position">
        <div className="row">
          <p className="font-style-small">${this.props.initial} X {this.datesBetween()} Nights</p>
          <p className="font-style-small">${this.props.initial * this.datesBetween()}</p>
        </div>
        <div className="row">
          <p className="font-style-small">Cleaning Fee</p>
          <p className="font-style-small">${this.props.cleaning}</p>
        </div>
        <div className="row">
          <p className="font-style-small">Service Fee</p>
          <p className="font-style-small">${this.props.service}</p>
        </div>
        <div className="row">
          <p className="font-style-small">Occupancy Taxes and Fees</p>
          <p className="font-style-small">${this.props.taxes}</p>
        </div>
        <div className="row">
          <p className="font-style-small">Total</p>
          <p className="font-style-small">${this.props.initial * this.datesBetween() + this.props.service + this.props.cleaning + this.props.taxes}</p>
        </div>
      </div>
    )
  }
}

export default Info;