import React, { Component } from 'react';
import Error from './components/Error';
import Info from './components/Info';
import Warning from './components/Warning';

class Task10 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      notifications: [
        {
          key: 1,
          text: 'Welcome user101',
          notificationType: 'info'
        },
        {
          key: 2,
          text: 'You have been banned',
          notificationType: 'error'
        },
        {
          key: 3,
          text: 'New friend request',
          notificationType: 'info'
        },
        {
          key: 4,
          text: 'You are about to exceed your usage limit',
          notificationType: 'warning'
        },
        {
          key: 5,
          text: 'Free trial will soon expire',
          notificationType: 'warning'
        },
        {
          key: 6,
          text: 'Token expired',
          notificationType: 'error'
        }
      ]
    }
  }

  defineComponent = (text, state, index) => {
    switch (state) {
      case 'info':
        return <Info text={text} key={index} />;
      case 'warning':
        return <Warning text={text} key={index} />;
      case 'error':
        return <Error text={text} key={index} />;
      default:
        return null;
    }
  }

  render() {
    return (
      <div className="container">
        <h1>Task 10</h1>
        <h2>User List</h2>
        {
          this.state.notifications.map((msg, i) =>
            this.defineComponent(msg.text, msg.notificationType, i))
        }
      </div>
    )
  }
}

export default Task10