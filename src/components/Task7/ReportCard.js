import React, { Component } from 'react'

export default class ReportCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      score: 0
    };
  }

  increaseScoreHandler = () => {
    (this.state.score === 10) ?
      this.setState({score: 0}) : this.setState({score: this.state.score + 1})
  }

  render() {
    const score = this.state.score;

    return (
      <div className="container">
        <h3>{score}</h3>
        <button
          className="btn btn-outline-dark"
          onClick={this.increaseScoreHandler.bind(this)}
        >
          Increase
        </button>
        <p className="mt-2">
          {
            (score >= 1 && score <= 4) ? 'Your result is poor' :
            (score >= 5 && score <= 7) ? 'Your result is average' :
            (score >= 8 && score <= 10) ? 'Your result is excellent' : ''
          }
        </p>
      </div>
    )
  }
}