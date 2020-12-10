import React, { Component } from 'react'
import Pet from './components/Pet'

class Task3 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pets: [
        {
          key: 1,
          isDog: true,
          image: 'https://cdn.pixabay.com/photo/2016/12/13/05/15/puppy-1903313__340.jpg'
        },
        {
          key: 2,
          isDog: false,
          image: 'https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/reference_guide/cats_and_excessive_meowing_ref_guide/1800x1200_cats_and_excessive_meowing_ref_guide.jpg'
        },
        {
          key: 3,
          isDog: true,
          image: 'https://image.cnbcfm.com/api/v1/image/105992231-1561667465295gettyimages-521697453.jpeg?v=1561667497&w=678&h=381'
        },
        {
          key: 4,
          isDog: false,
          image: 'https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fdam%2Fimageserve%2F1136638860%2F960x0.jpg%3Ffit%3Dscale'
        },
      ],
      petsProps: []
    };
  }

  toggleAllPets = () => {
    this.setState({petsProps: this.state.pets})
  }

  toggleDogs = () => {
    this.setState({ petsProps: this.state.pets.filter(pet => pet.isDog)})
  }

  toggleCats = () => {
    this.setState({ petsProps: this.state.pets.filter(pet => !pet.isDog)})
  }

  render() {
    return (
      <div className="container">
        <h1>Task 3-4</h1>
        <h2 className="text-center">Welcome to the world of pets</h2>
        <div className="my-3 text-center">
          <button className="btn btn-outline-dark mr-2" onClick={this.toggleDogs.bind(this)}>Only Dogs</button>
          <button className="btn btn-outline-dark mr-2" onClick={this.toggleCats.bind(this)}>Only Cats</button>
          <button className="btn btn-outline-dark mr-2" onClick={this.toggleAllPets.bind(this)}>All Pets</button>
        </div>
        <Pet pets={this.state.petsProps}/>
      </div>
    )
  }
}

export default Task3
