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
      <div className="d-flex justify-content-center">
      <div className="d-flex flex-row"> 
        <NumberSquare className="p-2" number={1} onClick={(i) => this.handleClick(1)} />
        <NumberSquare className="p-2" number={2} onClick={(i) => this.handleClick(2)} />
        <NumberSquare className="p-2" number={3} onClick={(i) => this.handleClick(3)} />
        <NumberSquare className="p-2" number={3} onClick={(i) => this.handleClick2()} />
      </div>
      </div>
    );
  }
}

export default App;
