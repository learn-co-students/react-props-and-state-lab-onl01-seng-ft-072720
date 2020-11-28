import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {

  render() { 
    return this.props.pets.forEach((pet) => {
    return( <div className="ui cards"> <Pet petObj = {pet} onAdoptPet = {this.props.onAdoptPet} /> </div> )
  })
  }
}
export default PetBrowser
