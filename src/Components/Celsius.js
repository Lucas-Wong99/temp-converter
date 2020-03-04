import React from 'react';
import './button.css';

const Celsius = (props) => {
  return (
        <button className="fahrenheittocelsius"
                type="submit"
                onClick={props.toCelsius}>
                Convert Fahrenheit to Celsius!</button>
  )
}

export default Celsius;
