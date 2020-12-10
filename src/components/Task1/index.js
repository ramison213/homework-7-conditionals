import React, { Component } from 'react'

class Task1 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: true
    };
  }

  toggleBtnHandler = () => {
    this.setState({
      isLoggedIn: !this.state.isLoggedIn
    })
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    return (
      <div className="container">
        <h1>Task 1</h1>
        <p className="description">
          1. Recreate exactly what you see in the gif.
        </p>
        <div className="text-center">
          <h1 className="main-title">Topic:Lifecycle Methods - Mostly Used Methods Demo</h1>

          <div>
            <p>{isLoggedIn ? 'You are not logged in' : 'You are logged in'}</p>
            <button
              className="btn btn-outline-dark"
              type="button"
              onClick={this.toggleBtnHandler.bind(this)}
            >
              <span className="mr-2">{isLoggedIn ? 'Login' : 'Logout'}</span>
              <i className={isLoggedIn ? 'mdi mdi-lock-open-variant-outline' : 'mdi mdi-lock-outline'}></i>
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Task1
