import React, { Component } from 'react'

class Task2 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isExpanded: false
    };
  }

  onToggleButtonClick() {
    this.setState(({ isExpanded: !this.state.isExpanded }));
  }

  render() {
    return (
      <div className="container">
        <h1>Task 2</h1>

        <div>
          <button onClick={this.onToggleButtonClick.bind(this)} className="burger-button"></button>
          {this.state.isExpanded ? this.renderDrawer() : null}
        </div>
      </div>
    )
  }

  renderDrawer() {
    return (
      <nav>
        <ul>
          <li><a href="#">Some link</a></li>
          <li><a href="#">Another link</a></li>
          <li><a href="#">Just one more link</a></li>
        </ul>
      </nav>
    );
  }
}

export default Task2
