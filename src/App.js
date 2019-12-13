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
      value:"clear"
    },
    {
      id: 'plusminus',
      additionalClass: '',
      text: '+/-',
      key: '2',
      value:"negate"
    },
    {
      id: 'percent',
      additionalClass: '',
      text: '%',
      key: '3',
      value:"%"
    },
    {
      id: 'divide',
      additionalClass: 'border-btn-right',
      text: '/',
      key: '4'
    },
    {
      id: 'seven',
      additionalClass: '',
      text: '7',
      key: '5'
    },
    {
      id: 'eight',
      additionalClass: '',
      text: '8',
      key: '6'
    },
    {
      id: 'nine',
      additionalClass: '',
      text: '9',
      key: '7'
    },
    {
      id: 'multiply',
      additionalClass: 'border-btn-right',
      text: 'X',
      key: '8'
    },
    {
      id: 'four',
      additionalClass: '',
      text: '4',
      key: '9'
    },
    {
      id: 'five',
      additionalClass: '',
      text: '5',
      key: '10'
    },
    {
      id: 'six',
      additionalClass: '',
      text: '6',
      key: '11'
    },
    {
      id: 'subtract',
      additionalClass: 'border-btn-right',
      text: '-',
      key: '12'
    },
    {
      id: 'one',
      additionalClass: '',
      text: '1',
      key: '13'
    },
    {
      id: 'two',
      additionalClass: '',
      text: '2',
      key: '14'
    },
    {
      id: 'three',
      additionalClass: '',
      text: '3',
      key: '15'
    },
    {
      id: 'add',
      additionalClass: 'border-btn-right',
      text: '+',
      key: '16'
    },
    {
      id: 'zero',
      additionalClass: 'zeroButton border-btn-bottom',
      text: '0',
      key: '17'
    },
    {
      id: 'decimal',
      additionalClass: 'border-btn-bottom',
      text: '.',
      key: '18'
    },
    {
      id: 'equals',
      additionalClass: 'border-btn-bottom border-btn-right',
      text: '=',
      key: '19'
    }
  ];

  const [displayFormulaText, setDisplayFormulaText] = useState('');
  const [displayResultText, setDisplayResultText] = useState('0');
  const [didCalc, setDidCalc] = useState(false);

  const handleClick = event => {
    if (didCalc === true) {
      setDidCalc(false);
      setDisplayFormulaText(displayResultText);
      calculate(event.target.id);
    } else {
      calculate(event.target.id);
    }
    console.log(didCalc);
  };

  // Abstract button into groups : functional (clear,equals,negate), numbers (0-9 and decimal), operators (+-/*%)

  // const handleClick = event => {

  //   if(id === "clear"){
  //     setDisplayFormulaText("")
  //     setDisplayResultText("")
  //   } else if(id === "equals")
  //     calculate()
  //     else {
  //       setDisplayFormulaText(displayFormulaText.concat(val))
  //       setDisplayResultText(val)
  //     }
  // }

  const calculate = id => {
    let lastChar = displayFormulaText[displayFormulaText.length - 1];

    switch (true) {
      case id === 'one':
        setDisplayFormulaText(displayFormulaText.concat('1'));
        setDisplayResultText('1');
        break;
      case id === 'two':
        setDisplayFormulaText(displayFormulaText.concat('2'));
        setDisplayResultText('2');
        break;
      case id === 'three':
        setDisplayFormulaText(displayFormulaText.concat('3'));
        setDisplayResultText('3');
        break;
      case id === 'four':
        setDisplayFormulaText(displayFormulaText.concat('4'));
        setDisplayResultText('4');
        break;
      case id === 'five':
        setDisplayFormulaText(displayFormulaText.concat('5'));
        setDisplayResultText('5');
        break;
      case id === 'six':
        setDisplayFormulaText(displayFormulaText.concat('6'));
        setDisplayResultText('6');
        break;
      case id === 'seven':
        setDisplayFormulaText(displayFormulaText.concat('7'));
        setDisplayResultText('7');
        break;
      case id === 'eight':
        setDisplayFormulaText(displayFormulaText.concat('8'));
        setDisplayResultText('8');
        break;
      case id === 'nine':
        setDisplayFormulaText(displayFormulaText.concat('9'));
        setDisplayResultText('9');
        break;
      case id === 'zero':
        setDisplayFormulaText(displayFormulaText.concat('0'));
        setDisplayResultText('0');
        break;
      case id === 'decimal':
        if (lastChar !== '.') {
          setDisplayFormulaText(displayFormulaText.concat('.'));
          setDisplayResultText('.');
        }
        break;
      case id === 'add':
        displayFormulaText !== '' &&
          lastChar !== '+' &&
          setDisplayFormulaText(displayFormulaText.concat('+'));
        setDisplayResultText('+');
        break;
      case id === 'subtract':
        if (lastChar !== '-') {
          setDisplayFormulaText(displayFormulaText.concat('-'));
          setDisplayResultText('-');
        }
        break;
      case id === 'multiply':
        displayFormulaText !== '' &&
          lastChar !== '*' &&
          setDisplayFormulaText(displayFormulaText.concat('*'));
        setDisplayResultText('*');
        break;
      case id === 'divide':
        displayFormulaText !== '' &&
          lastChar !== '/' &&
          setDisplayFormulaText(displayFormulaText.concat('/'));
        setDisplayResultText('/');
        break;
      case id === 'equals':
        console.log(displayFormulaText.split(/[/*\-+]/));
        let result = eval(displayFormulaText).toString();
        setDisplayResultText(result);
        setDisplayFormulaText(displayFormulaText.concat(`=${result}`));
        setDidCalc(true);
        break;
      case id === 'clear':
        setDisplayResultText('0');
        setDisplayFormulaText('');
        break;
      default:
        console.log(typeof id);
        break;
    }
  };

  const buttonComponents = buttons.map(e => {
    return (
      <Button
        clickHandler={handleClick}
        key={e.key}
        id={e.id}
        text={e.text}
        additionalClass={e.additionalClass}
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
