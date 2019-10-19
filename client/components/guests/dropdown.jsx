import React, {Component} from 'react';
import Styles from './styles.js';

class Dropdown extends Component {
  constructor(props){
    super(props);

    this.state = {
      adults: 1,
      children: 0,
      infants: 0
    }

    this.increaseAdults = this.increaseAdults.bind(this);
    this.decreaseAdults = this.decreaseAdults.bind(this);
    this.increaseChildren = this.increaseChildren.bind(this);
    this.decreaseChildren = this.decreaseChildren.bind(this);
    this.increaseInfants = this.increaseInfants.bind(this);
    this.decreaseInfants = this.decreaseInfants.bind(this);
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
  render() {
    return (
      <div style = {{...Styles.mainDropDown, ...Styles.columnWrapper}}>
        <div style={Styles.rowWrapper}>
          <p style={Styles.guestText}>Adults</p>
          <div onClick={this.increaseAdults} style={Styles.circle}>+</div>
          <p style={Styles.guestText}>{this.state.adults}</p>
          <div onClick={this.decreaseAdults} style={Styles.circle}>-</div>
        </div>
        <div style={Styles.rowWrapper}>
          <p style={Styles.guestText}>Children</p>
          <div onClick={this.increaseChildren} style={Styles.circle}>+</div>
          <p style={Styles.guestText}>{this.state.children}</p>
          <div onClick={this.decreaseChildren} style={Styles.circle}>-</div>
        </div>
        <div style={Styles.rowWrapper}>
          <p style={Styles.guestText}>Infants</p>
          <div onClick={this.increaseInfants} style={Styles.circle}>+</div>
          <p style={Styles.guestText}>{this.state.infants}</p>
          <div onClick={this.decreaseInfants} style={Styles.circle}>-</div>
        </div>
      </div>
    )
  }
}

export default Dropdown;