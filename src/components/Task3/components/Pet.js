import React, { Component } from 'react';
import Cat from './Cat';
import Dog from './Dog';

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pets: []
    }
  }

  static getDerivedStateFromProps(nextProps) {
    return { pets: nextProps.pets}
  }

  componentDidMount() {
    this.setState({
      pets: this.props.pets
    })
  }

  render() {
    return (
      <div>
        {
          this.state.pets.map((pet, i) => (
            pet.isDog ?
            <Dog key={i} image={pet.image} />
            :
            <Cat key={i} image={pet.image} />
          ))
        }
      </div>
    )
  }
}

export default Form
