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

  onFindPetsClick = (e) => {
    const petMarker = this.state.filters.type //! e.target.what?
    petMarker==='all' ? fetch('/api/pets') : fetch(`/api/pets?type=` + petMarker)
    .then(resp => resp.json())
    .then(data => this.setState( {pets: data}))      
  }

  onChangeType = (e) => {
    e.persist()
    this.setState(() =>{
      return({
      ...this.state,
      filters: {
        type: e.target.value
        }
      })
    })
  }

  onAdoptPet = (e) => {

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
              <Filters onChangeType={this.onChangeType} onFindPetsClick={this.onFindPetsClick} />
            </div>
            <div className="twelve wide column">
              <PetBrowser onAdoptPet={this.onAdoptPet} pets={this.state.pets} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
