import React from 'react';
import ReactDOM from 'react-dom';

class Toggle extends React.Component {
    constructor(props) {
      super(props);
      this.state = {isToggleOn: true};
  
      // This binding is necessary to make `this` work in the callback
      this.handleClick = this.handleClick.bind(this);
    }
  
    handleClick(id, e) {
      console.log(id)
      this.setState(prevState => ({
        isToggleOn: !prevState.isToggleOn
      }));
    }
  
    render() {
      return [
        <button onClick={(e) => this.handleClick("You clicked button 1", e)}>
          {this.state.isToggleOn ? 'ON' : 'OFF'}
        </button>,
        <button onClick={(e) => this.handleClick("you clicked button 2", e)}>
          {this.state.isToggleOn ? 'ON' : 'OFF'}
        </button>
      ];
    }
}

export default Toggle;
  