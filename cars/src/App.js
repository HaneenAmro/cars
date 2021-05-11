import { carData } from './carData';
import React from 'react'; 
import './App.css';
import CarList from './carList.js';

let data =[];
carData.forEach((elemnt) => {
  let obj={}  
  for (let key in elemnt) {
    if (typeof elemnt[key] !== "object"  ) {
      obj[key] = elemnt[key].toString().toUpperCase();   
  } else {
      for (let x in elemnt[key]) {
        obj[x] = elemnt[key][x].toString().toUpperCase();   
    } 
  }
}
    data.push(obj);
});



class App extends React.Component  {

  constructor(props) {
    super(props);
    this.state = {
      carData : data,
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
