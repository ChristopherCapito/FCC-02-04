import React from 'react';
import Display from './Display';

const Calculator = props => {
  return (
    <div className='container'>
      <div className='calculator w-full sm:w-auto md:w-auto lg:w-auto xl:w-auto'>
        <div className='head text-white'>
          <Display 
          displayFormulaText={props.displayFormulaText}
          displayResultText={props.displayResultText} />
        </div>
        <div className='buttonGrid text-white'>{props.buttonComponents}</div>
      </div>
    </div>
  );
};

export default Calculator;
