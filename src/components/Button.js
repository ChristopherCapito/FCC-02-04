import React from 'react'
import PropTypes from "prop-types"


const Button = props => {
  let classList = `calculatorButton bg-transparent py-2 px-4 ${props.additionalClass}`
  return (
  <button 
  id={props.id}
  className={classList}
  onClick={props.clickHandler}
  >{props.text}</button>
  )
}

Button.propTypes = {
  clickHandler:PropTypes.func.isRequired
}

export default Button
