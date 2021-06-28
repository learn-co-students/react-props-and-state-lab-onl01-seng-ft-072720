import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {

  // findPet = (petId) => (this.state.pets.find((p) => p.id === petId))

  // createCard = ()


  render() {
    return (
    <div className="ui cards">
      {this.props.pets.map(p => {
        return <Pet 
          pet={p}
          onAdoptPet = {this.props.onAdoptPet}
        />
      })}
      </div>
    )
  }
}

export default PetBrowser
