import React from 'react';
import './css/app.css';

const Cost = (props) => {
  return (
    <div className="flex-container">
      <span className="font-style-large">${props.initial}<span className="font-style-small"> per night</span></span>
    </div>
  )
}

export default Cost;