import React from 'react';

const DateTimeDisplay = ({ value, type }) => {

  return (
    <div className='countdown_block'>
      <p className='text-5xl'>{value}</p>
      <span className='text-md'>{type}</span>
    </div>
  );
};

export default DateTimeDisplay;