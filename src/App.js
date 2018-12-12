import React, { Component } from 'react';
import './App.css';
import NumberSquare from './NumberSquare';

class App extends Component {
  handleClick(i){
    console.log("this is button value: " + i);
  }
  render() {
    return (
      <div>
        <NumberSquare number={1} onClick={(i) => this.handleClick(1)} />
        <NumberSquare number={2} onClick={(i) => this.handleClick(2)} />
        <NumberSquare number={3} onClick={(i) => this.handleClick(3)} />
      </div>
    );
  }
}

export default App;
