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
    }, () => console.log(this.state.filters))
  }

  fetchPets = () => {
    const filter = this.state.filters.type

    if (filter === "all") {
      fetch('/api/pets')
      .then(resp => resp.json())
      .then((e) => {
        // debugger
      })
    } else {
      fetch(`/api/pets?type=${filter}`)
      .then(resp => resp.json())
      .then((e) => {
        // debugger
      })
    }
    
    // debugger;
    console.log(this.state.filters.type)
    console.log("you made it!")
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
              <PetBrowser />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
