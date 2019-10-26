import React, { Component } from 'react';
import './css/app.css';
import Line from './line.jsx';

class Info extends Component {
  constructor(props) {
    super(props);

    this.datesBetween = this.datesBetween.bind(this);
  }

  datesBetween() {
    const { checkIn, checkOut } = this.props;
    const checkInArray = checkIn.split('-');
    const checkOutArray = checkOut.split('-');

    const date1 = new Date(checkInArray[2], checkInArray[0] - 1, checkInArray[1]);
    const date2 = new Date(checkOutArray[2], checkOutArray[0] - 1, checkOutArray[1]);

    const difference = date2.getTime() - date1.getTime();

    const days = difference / (1000 * 3600 * 24);

    return Math.floor(days);
  }

  render() {
    const {
      initial, service, cleaning, taxes,
    } = this.props;
    return (
      <div className="position">
        <div className="row-text">
          <p className="font-style-small">
$
            {initial}
            {' '}
X
            {' '}
            {this.datesBetween()}
            {' '}
Nights
          </p>
          <p className="font-style-small">
$
            {initial * this.datesBetween()}
          </p>
        </div>
        <div className="row-text">
          <p className="font-style-small">Cleaning Fee</p>
          <p className="font-style-small">
$
            {cleaning}
          </p>
        </div>
        <div className="row-text">
          <p className="font-style-small">Service Fee</p>
          <p className="font-style-small">
$
            {service}
          </p>
        </div>
        <div className="row-text">
          <p className="font-style-small">Occupancy Taxes and Fees</p>
          <p className="font-style-small">
$
            {taxes}
          </p>
        </div>
        <div className="row-text">
          <p className="font-style-small">Total</p>
          <p className="font-style-small">
$
            {initial * this.datesBetween() + service + cleaning + taxes}
          </p>
        </div>
      </div>
    );
  }
}

export default Info;
