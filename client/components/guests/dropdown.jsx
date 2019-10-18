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
          <div style={Styles.circle}>+</div>
          <p style={Styles.guestText}>{this.state.adults}</p>
          <div style={Styles.circle}>-</div>
        </div>
        <div style={Styles.rowWrapper}>
          <p style={Styles.guestText}>Children</p>
          <div style={Styles.circle}>+</div>
          <p style={Styles.guestText}>{this.state.children}</p>
          <div style={Styles.circle}>-</div>
        </div>
        <div style={Styles.rowWrapper}>
          <p style={Styles.guestText}>Infants</p>
          <div style={Styles.circle}>+</div>
          <p style={Styles.guestText}>{this.state.infants}</p>
          <div style={Styles.circle}>-</div>
        </div>
      </div>
    )
  }
}

export default Dropdown;