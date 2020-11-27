import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }

  onChangeType = ({target: {value}}) => {
    this.setState({
      filters: {
        ...this.state.filters,
        type: value
      }
    }, () => console.log(this.state))
  }

  fetchPets = () => {
    const query = this.state.filters.type === 'all' ? ('') : (`?type=${this.state.filters.type}`)
    fetch(`/api/pets${query}`)
    .then(response => response.json())
    .then(data => {
      this.setState({
        pets: data
      })
    })
  }

  adoptPet = (id) => {
    const petIndexInArray = this.state.pets.findIndex(pet => pet.id === id)
    let newPetsArray = [...this.state.pets]
    newPetsArray[petIndexInArray] = {...newPetsArray[petIndexInArray], isAdopted: true}
    this.setState({
      pets: newPetsArray
    })
  }

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType={this.onChangeType} onFindPetsClick={this.fetchPets}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.adoptPet}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
