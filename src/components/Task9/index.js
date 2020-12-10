import React, { Component } from 'react';

class Task9 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [
        {
          key: 1,
          name: 'Joe',
          isAdmin: true
        },
        {
          key: 2,
          name: 'Kolia',
          isAdmin: false
        },
        {
          key: 3,
          name: 'Vlad',
          isAdmin: true
        },
        {
          key: 4,
          name: 'Sergey',
          isAdmin: true
        },
        {
          key: 5,
          name: 'Kolawole',
          isAdmin: false
        },
        {
          key: 6,
          name: 'Bill Gates',
          isAdmin: false
        }
      ]
    }
  }

  render() {
    return (
      <div className="container">
        <h1>Task 9</h1>
        <h2>User list</h2>
        {
          this.state.users.map((user, i) => <p>{user.name} {user.isAdmin ? '👑' : null}</p>)
        }
      </div>
    )
  }
}

export default Task9