import React, {Component} from 'react';
import Styles from './styles.js';
import moment from 'moment';

class Week extends Component {
  constructor(props){
    super(props);

  }

  render(){
    return (
          <tr>
            {this.props.dates.map((date, i) =>  moment().date() > date ? <td style={Styles.calendarTextGrey} >{date}</td> :
            <td style={Styles.calendarText} >{date}</td>)}
          </tr>
    )
  }
}

export default Week;