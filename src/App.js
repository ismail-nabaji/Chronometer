import React, { Component } from 'react';
import './App.css';


class Chronometre extends Component {
  constructor(){
    super();
    this.state = {
      totalSeconds :0,
      status: 'unstarted',
      tick: null,
    };
  }

  incrementSeconds = () => {this.setState({totalSeconds: this.state.totalSeconds + 1,});}

  startChrono = () => {
    console.log('start');
    this.setState({
      status: 'started',
      tick : setInterval(() => {this.incrementSeconds()}, 1000),
    });
  
    console.log(this.state);
  }

  stopChrono = () => {
    this.setState({
      status: 'stopped',
      tick: clearInterval(this.state.tick),
    });
    console.log('stop');
    console.log(this.state);
  }

  resetChrono = () => {
    this.setState({
      totalSeconds: 0,
      status: 'unstarted',
    });
    console.log('reset');
    console.log(this.state);
  }
  


  render(){
    return(
      <div className="Chronometre">
        <h1>Chronometre</h1>
        <div className="Chronometre-display">
          <span>{this.state.totalSeconds}</span>
        </div>
        <div className="Chronometre-controls">
          <button onClick={this.startChrono}>Start</button>
          <button onClick={this.stopChrono}>Stop</button>
          <button onClick={this.resetChrono}>Reset</button>
        </div>
      </div>
    )
  }
}

export default Chronometre;
