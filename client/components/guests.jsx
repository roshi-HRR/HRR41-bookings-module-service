import React, { Component } from 'react';
import styles from './styles.js';
import DropDown from './guests/dropdown.jsx';

class Guests extends Component {
  constructor(props) {
    super(props);

    this.state = {
      toggled: false,
      adults: 1,
      children: 0,
      infants: 0
    }

    this.showDropDown = this.showDropDown.bind(this);
    this.increaseAdults = this.increaseAdults.bind(this);
    this.decreaseAdults = this.decreaseAdults.bind(this);
    this.increaseChildren = this.increaseChildren.bind(this);
    this.decreaseChildren = this.decreaseChildren.bind(this);
    this.increaseInfants = this.increaseInfants.bind(this);
    this.decreaseInfants = this.decreaseInfants.bind(this);
    this.getTotal = this.getTotal.bind(this);
  }

  showDropDown() {
    this.setState({
      toggled: !this.state.toggled
    })
  }

  increaseAdults() {
    this.setState({
      adults: this.state.adults+1
    })
  }

  decreaseAdults() {
    if(this.state.adults > 1){
      this.setState({
        adults: this.state.adults-1
      })
    }
  }

  increaseChildren() {
    this.setState({
      children: this.state.children+1
    })
  }

  decreaseChildren() {
    if(this.state.children > 0){
      this.setState({
        children: this.state.children-1
      })
    }
  }

  increaseInfants() {
    this.setState({
      infants: this.state.infants+1
    })
  }

  decreaseInfants(){
    if(this.state.infants > 0){
      this.setState({
        infants: this.state.infants-1
      })
    }
  }

  getTotal() {
    return this.state.adults + this.state.children + this.state.infants;
  }

  render() {
    return (
      <div>
        <div style={styles.position}>
          <span style={styles.fontStyleSmall}>Guests</span>
        </div>
        <div onClick={this.showDropDown} style={styles.selectBoxGuest}>
          <p style={styles.selectBoxText}>{this.getTotal()} {this.getTotal() > 1 ? 'guests' : 'guest'}</p>
          <p style={styles.selectBoxText}>˅</p>
        </div>
      {this.state.toggled ? <DropDown
        increaseAdults={this.increaseAdults}
        decreaseAdults={this.decreaseAdults}
        increaseChildren={this.increaseChildren}
        decreaseChildren={this.decreaseChildren}
        increaseInfants={this.increaseInfants}
        decreaseInfants={this.decreaseInfants}
        adults={this.state.adults}
        children={this.state.children}
        infants={this.state.infants} /> : ''}
      </div>
    )
  }
}

export default Guests;