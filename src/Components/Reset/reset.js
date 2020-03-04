import React from 'react';
import './reset.css';

const Reset = (props) => {
  return (
    <button className="reset" onClick={props.reset}>
      Reset!
    </button>
  )
}

export default Reset;
