import React from 'react';
import './tempinput.css';

import Fahrenheit from '../Fahrenheit';
import Celsius from '../Celsius';
import Reset from '../Reset/reset';

class Temp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      temp: '',
      type: ''
    }

    this.toCelsius = this.toCelsius.bind(this);
    this.toFahrenheit = this.toFahrenheit.bind(this);
    this.handleTempChange = this.handleTempChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.reset = this.reset.bind(this);
  }


  toCelsius(){
      const celconvertFactor = 0.55555556
      this.setState({
        temp: Math.round((this.state.temp - 32 ) * celconvertFactor),
        type: 'Celsius'
      })
  }

  toFahrenheit() {
      const fahconvertFactor = 1.8
      this.setState({
        temp: Math.round(this.state.temp * fahconvertFactor + 32),
        type: 'Fahrenheit'
      })
  }

  reset(){
    this.setState({
      temp: '',
      type: ''
    })
  }

  handleTempChange(event) {
    this.setState({
      temp: event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render(){
    return (
    <div className="tempinput">
      <h2><u>{this.state.temp}</u>&deg;{this.state.type}</h2>
      <div className="flexbox">
        <form className="UI-form" onSubmit={this.handleSubmit}>
          <input type="number"
                 placeholder="What's the temp&deg;?"
                 onChange={this.handleTempChange}/>
          <Reset reset={this.reset}/>
        </form>
        <div className="buttons">
          <Celsius toCelsius={this.toCelsius}/>
          <Fahrenheit toFahrenheit={this.toFahrenheit}/>
        </div>
      </div>
    </div>
  )
  }
}

export default Temp;
