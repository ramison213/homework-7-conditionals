import React from 'react';

export default (props) => (
  <div>
    <span className={props.todo.status}>
      {props.todo.text}
    </span>
  </div>
)