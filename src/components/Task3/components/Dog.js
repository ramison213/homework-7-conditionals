import React from 'react';

const style = {
  width: '100%',
  border: '2px solid grey'
}

export default (props) => (
  <img style={style} src={props.image} />
)
