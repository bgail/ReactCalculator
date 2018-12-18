import React, { Component } from 'react';
import './App.css';
import NumberSquare from './NumberSquare';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expression: ''
    }
  }
  expression = '';
  handleClick(i) {
    const expr = this.state.expression + i;
    this.setState({
      expression: expr
    })
  }
  handleClick2() {
    console.log('expression: ' + this.state.expression);
  }
  render() {
    return (
      <div className="container App">
        <div className="text-center">
          <div className="screen">
            <div className="">{this.state.expression}</div>
          </div>
          <div className="row">
            <NumberSquare number={1} onClick={(i) => this.handleClick(1)} styles='num-btn-square bg-dark-gray' />
            <NumberSquare number={2} onClick={(i) => this.handleClick(2)} styles='num-btn-square bg-dark-gray' />
            <NumberSquare number={3} onClick={(i) => this.handleClick(3)} styles='num-btn-square bg-dark-gray' />
            <NumberSquare number={3} onClick={(i) => this.handleClick2()} styles='num-btn-square bg-dark-gray' />
          </div>
          <div className="row">
            <NumberSquare number={1} onClick={(i) => this.handleClick(1)} styles='num-btn-square bg-dark-gray' />
            <NumberSquare number={2} onClick={(i) => this.handleClick(2)} styles='num-btn-square bg-dark-gray' />
            <NumberSquare number={3} onClick={(i) => this.handleClick(3)} styles='num-btn-square bg-dark-gray' />
            <NumberSquare number={3} onClick={(i) => this.handleClick2()} styles='num-btn-square bg-dark-gray' />
          </div>
          <div className="row">
            <NumberSquare number={1} onClick={(i) => this.handleClick(1)} styles='num-btn-square bg-dark-gray' />
            <NumberSquare number={2} onClick={(i) => this.handleClick(2)} styles='num-btn-square bg-dark-gray' />
            <NumberSquare number={3} onClick={(i) => this.handleClick(3)} styles='num-btn-square bg-dark-gray' />
            <NumberSquare number={3} onClick={(i) => this.handleClick2()} styles='num-btn-square bg-dark-gray' />
          </div>
          
        </div>
      </div>
    );
  }
}

export default App;
