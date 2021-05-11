import { carData } from './carData';
import React from 'react'; 
import './App.css';
import CarList from './carList.js';

class App extends React.Component  {

  constructor(props) {
    super(props);
    this.state = {
      carData : carData,
      value: ""
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      value: event.target.value
    })
  }

  render() {
  return (
    <div className="App">
      <div>
        <label> Search </label>
        <input type="text" value={this.state.value} onChange={this.handleChange} ></input>
      </div>
      <CarList carData={this.state.carData} value={this.state.value}/>
    </div>
  );
  }
}

export default App;
