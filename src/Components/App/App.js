import React from 'react';
import './App.css';

import Temp from '../Tempinput/tempinput';

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <h1><i class="fas fa-cloud-sun-rain"></i>
        Temperature Converter
        <i class="fas fa-thermometer-half"></i></h1>
        <Temp />
      </div>
    )
  }
}
export default App;
