import React from 'react';

class ClickityClick extends React.Component {
  constructor() {
    super();

    // Define the initial state:
    this.state = {
      toggled: false
    };
  }

  handleClick = () => {
    this.setState(previousState => {
        return {toggled: !previousState.toggled}
    },() =>  console.log(this.state.toggled))
  };

  render() {
    return (
      <div>
        <p>{this.state.toggled ? 'ON' : 'OFF'}</p>
        <button onClick={this.handleClick}>Click me!</button>
      </div>
    );
  }
}

export default ClickityClick;


