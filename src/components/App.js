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

  onChangeType = (e) => {
    this.setState({
      ...this.filters,
      filters: {
        type: e.target.value
      }
    })
  }

  fetchPets = () => {
    const filter = this.state.filters.type
    let uri = '/api/pets'

    if (filter !== "all") {
      uri += `?type=${filter}`
    } 

    fetch(uri)
      .then(resp => resp.json())
      .then((petArray) => {
        this.setState({
          pets: petArray
        })
    })
  }

  onAdoptPet = (petId) => {
    const pets = this.state.pets.map(pet => {
      return pet.id === petId ? {...pet, isAdopted: true} : pet;
    })
    this.setState({
      pets: pets
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
              <Filters
                onChangeType={this.onChangeType}
                onFindPetsClick={this.fetchPets}
              />
            </div>
            <div className="twelve wide column">
              <PetBrowser
                pets={this.state.pets}
                onAdoptPet={this.onAdoptPet}              
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
