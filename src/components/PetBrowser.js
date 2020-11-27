import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  render() {
    return <div className="ui cards">
      <ul>
        {this.props.pets.map( (pet, index) => {
            return (
              <li key={index}><Pet pet={pet} onAdoptPet={this.props.onAdoptPet} /></li>
            )
          })
        }
      </ul>
    </div>
  }
}

export default PetBrowser