import React, { useState } from 'react';
import './App.css';
import Button from './components/Button';
import Calculator from './components/Calculator';

function App() {
  const buttons = [
    {
      id: 'clear',
      additionalClass: '',
      text: 'AC',
      key: '1',
      isFunction: true,
      isOperator: false
    },
    {
      id: 'negate',
      additionalClass: '',
      text: '+/-',
      key: '2',
      isFunction: true,
      isOperator: false
    },
    {
      id: 'percent',
      additionalClass: '',
      text: '%',
      key: '3',
      isFunction: true,
      isOperator: false
    },
    {
      id: 'divide',
      additionalClass: 'border-btn-right',
      text: '/',
      key: '4',
      isFunction: false,
      isOperator: true
    },
    {
      id: 'seven',
      additionalClass: '',
      text: '7',
      key: '5',
      inputValue: '7',
      isFunction: false,
      isOperator: false
    },
    {
      id: 'eight',
      additionalClass: '',
      text: '8',
      key: '6',
      inputValue: '8',
      isFunction: false,
      isOperator: false
    },
    {
      id: 'nine',
      additionalClass: '',
      text: '9',
      key: '7',
      inputValue: '9',
      isFunction: false,
      isOperator: false
    },
    {
      id: 'multiply',
      additionalClass: 'border-btn-right',
      text: '*',
      key: '8',
      isFunction: false,
      isOperator: true
    },
    {
      id: 'four',
      additionalClass: '',
      text: '4',
      key: '9',
      inputValue: '4',
      isFunction: false,
      isOperator: false
    },
    {
      id: 'five',
      additionalClass: '',
      text: '5',
      key: '10',
      inputValue: '5',
      isFunction: false,
      isOperator: false
    },
    {
      id: 'six',
      additionalClass: '',
      text: '6',
      key: '11',
      inputValue: '6',
      isFunction: false,
      isOperator: false
    },
    {
      id: 'subtract',
      additionalClass: 'border-btn-right',
      text: '-',
      key: '12',
      isFunction: false,
      isOperator: true
    },
    {
      id: 'one',
      additionalClass: '',
      text: '1',
      key: '13',
      inputValue: '1',
      isFunction: false,
      isOperator: false
    },
    {
      id: 'two',
      additionalClass: '',
      text: '2',
      key: '14',
      inputValue: '2',
      isFunction: false,
      isOperator: false
    },
    {
      id: 'three',
      additionalClass: '',
      text: '3',
      key: '15',
      inputValue: '3',
      isFunction: false,
      isOperator: false
    },
    {
      id: 'add',
      additionalClass: 'border-btn-right',
      text: '+',
      key: '16',
      isFunction: false,
      isOperator: true
    },
    {
      id: 'zero',
      additionalClass: 'zeroButton border-btn-bottom',
      text: '0',
      key: '17',
      inputValue: '0',
      isFunction: false,
      isOperator: false
    },
    {
      id: 'decimal',
      additionalClass: 'border-btn-bottom',
      text: '.',
      key: '18',
      inputValue: '.',
      isFunction: false,
      isOperator: false
    },
    {
      id: 'equals',
      additionalClass: 'border-btn-bottom border-btn-right',
      text: '=',
      key: '19',
      isFunction: true,
      isOperator: false
    }
  ];

  const [displayFormulaText, setDisplayFormulaText] = useState('');
  const [displayResultText, setDisplayResultText] = useState('0');
  const [formula, setFormula] = useState([]);

  const handleClick = event => {
    let obj = parseEvent(event);
    let prev = displayFormulaText[displayFormulaText.length - 1];
    switch (true) {
      case obj.text === 'AC':
        clear();
        break;
      case obj.text === '=':
        calculate();
        break;
      case obj.text === '+/-':
        break;
      case obj.text === '%':
        break;
      default:
        //Did we enter a dot?
        if (obj.text === '.') {
          if (prev === '.') {
            break;
          }
        } else if (obj.isoperator) {
          if (prev) {
            if (prev.match(/[///*+.]/)) {
              //If the last one was an operator, replace it with the current key
              setDisplayFormulaText(
                displayFormulaText
                  .substring(0, displayFormulaText.length - 1)
                  .concat(obj.text)
              );
              break;
            }
          }
        }
        setDisplayFormulaText(displayFormulaText.concat(obj.text));
        setDisplayResultText(obj.text);
    }
  };

  const clear = () => {
    setDisplayFormulaText('');
    setDisplayResultText('');
  };

  const calculate = () => {};

  //Parses shit
  const parseEvent = event => {
    /**Event dataset is a DOMStringmap object containing only strings.
     * We need to have it present as an object, but with the values parsed
     * as proper datatypes. This means numbers for the numbers, and boolean
     * for isFunction and isOperator
     */

    return Object.fromEntries(
      Object.entries(event.target.dataset).map(([key, value]) => {
        let arr = [];
        if (parseInt(value)) {
          arr.push(key, parseInt(value));
        } else {
          if (value === 'true') arr.push(key, true);
          else if (value === 'false') arr.push(key, false);
          else arr.push(key, value);
        }
        return arr;
      })
    );
  };

  // Abstract button into groups : functional (clear,equals,negate), numbers (0-9 and decimal), operators (+-/*%)
  const buttonComponents = buttons.map(e => {
    return (
      <Button
        clickHandler={handleClick}
        key={e.key}
        id={e.id}
        text={e.text}
        additionalClass={e.additionalClass}
        inputValue={e.inputValue}
        isFunction={e.isFunction}
        isOperator={e.isOperator}
      />
    );
  });

  return (
    <div className='App'>
      <Calculator
        buttonComponents={buttonComponents}
        displayFormulaText={displayFormulaText}
        displayResultText={displayResultText}
      />
    </div>
  );
}
export default App;
