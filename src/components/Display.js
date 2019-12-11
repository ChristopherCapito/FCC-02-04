import React from 'react';

const Display = props => {
  return (
    <div>
      <div className='display pt-8 text-white text-right'>
        <p className='formula mx-4'>{props.displayFormulaText}</p>
        <p id="display" className='result font-bold mx-3 text-5xl'>{props.displayResultText}</p>
      </div>
    </div>
  );
};

export default Display;