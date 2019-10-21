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
  }

  render() {
    return (
      <div style = {{...Styles.mainDropDown, ...Styles.columnWrapper}}>
        <div style={Styles.rowWrapper}>
          <p style={Styles.guestText}>Adults</p>
          <div onClick={this.props.decreaseAdults} style={Styles.circle}>-</div>
          <p style={Styles.guestText}>{this.props.adults}</p>
          <div onClick={this.props.increaseAdults} style={Styles.circle}>+</div>
        </div>
        <div style={Styles.rowWrapper}>
          <p style={Styles.guestText}>Children</p>
          <div onClick={this.props.decreaseChildren} style={Styles.circle}>-</div>
          <p style={Styles.guestText}>{this.props.children}</p>
          <div onClick={this.props.increaseChildren} style={Styles.circle}>+</div>
        </div>
        <div style={Styles.rowWrapper}>
          <p style={Styles.guestText}>Infants</p>
          <div onClick={this.props.decreaseInfants} style={Styles.circle}>-</div>
          <p style={Styles.guestText}>{this.props.infants}</p>
          <div onClick={this.props.increaseInfants} style={Styles.circle}>+</div>
        </div>
      </div>
    )
  }
}

export default Dropdown;