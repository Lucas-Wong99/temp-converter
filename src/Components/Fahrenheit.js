import React from 'react';
import './button.css';

const Fahrenheit = (props) => {
  return (
        <button className="celsiustofahrenheit"
                type="submit"
                onClick={props.toFahrenheit}>
                Convert Celsius to Fahrenheit!</button>
  )
}

export default Fahrenheit;
