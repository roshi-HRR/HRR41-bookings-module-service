import React, { Component } from 'react';
import '../css/guests.css';

class Dropdown extends Component {
  constructor(props) {
    super(props);

    this.state = {
      adults: 1,
      children: 0,
      infants: 0,
    };
  }

  render() {
    return (
      <div className="main-drop-down column-wrapper">
        <div className="row-wrapper">
          <p className="guest-text">Adults</p>
          <div onClick={this.props.decreaseAdults} className="circle" style={{left:'25px'}}><span className="number">-</span></div>
          <p className="guest-text">{this.props.adults}</p>
          <div onClick={this.props.increaseAdults} className="circle" style={{right: '15px'}}><span className="number">+</span></div>
        </div>
        <div className="row-wrapper">
          <p className="guest-text">Children</p>
          <div onClick={this.props.decreaseChildren} className="circle" style={{left:'18px'}}><span className="number">-</span></div>
          <p className="guest-text">{this.props.children}</p>
          <div onClick={this.props.increaseChildren} className="circle" style={{right: '15px'}}><span className="number">+</span></div>
        </div>
        <div className="row-wrapper">
          <p className="guest-text">Infants</p>
          <div onClick={this.props.decreaseInfants} className="circle" style={{left:'25px'}}><span className="number">-</span></div>
          <p className="guest-text">{this.props.infants}</p>
          <div onClick={this.props.increaseInfants} className="circle" style={{right: '15px'}}><span className="number">+</span></div>
        </div>
      </div>
    );
  }
}

export default Dropdown;
