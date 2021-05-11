import { carData } from './carData';
import React from 'react'; 
import './App.css';
import CarList from './carList.js';

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
      <div>
        <label> Search </label>
        <input type="text" ></input>
      </div>
      <CarList carData={this.state.carData}/>
    </div>
  );
  }
}

export default App;
