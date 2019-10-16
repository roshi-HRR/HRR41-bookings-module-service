import React, {Component} from 'react';
import Styles from './styles.js';

class Week extends Component {
  constructor(props){
    super(props);
  }

  render(){
    let weeksArray = ['sun', 'mon', 'tue', 'wed', 'thurs', 'fri', 'sat'];

    return (
      <table>
        <tbody>
          <tr>
            {this.props.dates.length > 0 && this.props.dates.length <= 7 ?
            this.props.dates.map(date => <td>{date}</td>) :
            weeksArray.map((day, i) => <td style={Styles.calendarText} key={i}>{day}</td>)}
          </tr>
        </tbody>
      </table>
    )
  }
}

export default Week;