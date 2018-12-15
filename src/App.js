import React, { Component } from 'react';
import './App.css';
import NumberSquare from './NumberSquare';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      expression: ''
    }
  }
  expression = '';
  handleClick(i){
    const expr = this.state.expression + i;
    this.setState({
      expression: expr
    })
  }
  handleClick2(){
    console.log('expression: ' + this.state.expression);
  }
  render() {
    return (
      <div className="container">
      <div className="text-center"> 
        <div className="screen">ABC</div>
        <NumberSquare number={1} onClick={(i) => this.handleClick(1)} />
        <NumberSquare number={2} onClick={(i) => this.handleClick(2)} />
        <NumberSquare number={3} onClick={(i) => this.handleClick(3)} />
        <NumberSquare number={3} onClick={(i) => this.handleClick2()} />
      </div>
      </div>
    );
  }
}

export default App;
