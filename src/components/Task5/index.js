import React, { Component } from 'react';
import Todo from './Todo';

class Task5 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {
          key: 1,
          status: 'start',
          text: 'Learn english'
        },
        {
          key: 2,
          status: 'done',
          text: 'Watch a new movie'
        },
        {
          key: 3,
          status: 'inProgress',
          text: 'Make a post on Instagram'
        },
        {
          key: 4,
          status: 'done',
          text: 'Learn React'
        },
        {
          key: 5,
          status: 'inProgress',
          text: 'Do home task'
        },
        {
          key: 6,
          status: 'start',
          text: 'Go shopping'
        },
      ]
    };
  }


  render() {
    return (
      <div className="container">
        <h1>Task 5</h1>
        <h2>Todo</h2>
        {
          this.state.todos.map((todo, i) => <Todo key={i} todo={todo} />)
        }
      </div>
    )
  }
}

export default Task5
