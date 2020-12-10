import React, { Component } from 'react';
import Card from './Card';

class Task6 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: true
    };
  }

  render() {
    return (
      <div className="container">
        <h1>Task 6</h1>
        <Card display={this.state.display} />
      </div>
    );
  }
}

export default Task6
