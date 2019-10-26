import React from 'react';
import './css/app.css';

const Cost = ({ initial }) => (
  <div className="flex-container">
    <span className="font-style-large">
$
      {initial}
      <span className="font-style-small"> per night</span>
    </span>
  </div>
);

export default Cost;
