import React, {Component} from 'react';
import Styles from './styles.js';

class Week extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
          <tr>
            {this.props.dates.map((date, i) => <td key={i}>{date}</td>)}
          </tr>
    )
  }
}

export default Week;