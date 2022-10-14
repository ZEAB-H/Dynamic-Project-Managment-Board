import './Lane.css';
import React from 'react';
function Lane({ title }) {
  return (
    <div className='Lane-wrapper'>
      <h2>{title}</h2>
    </div>
  );
}

export default Lane;
