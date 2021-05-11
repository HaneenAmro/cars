import { carData } from './carData';
import React from 'react'; 
import './App.css';

class App extends React.Component  {

  constructor(props) {
    super(props);
    this.state = {
      carData : carData,
    }
  }

  render() {
  return (
    <div className="App">
      {this.state.carData.map((item) => (
        <div>{item.make}</div>
      ))}
    </div>
  );
  }
}

export default App;
