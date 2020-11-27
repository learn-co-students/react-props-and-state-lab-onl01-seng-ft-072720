import React from 'react'

class Pet extends React.Component {

  render() {
    const genderSymbol = this.props.pet.gender === 'male' ? ('♂') : ('♀')
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {/*'♀' OR '♂' */}
            {`${this.props.pet.name} ${genderSymbol}`} 
          </a>
          <div className="meta">
            <span className="date">{this.props.pet.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.pet.age}</p>
            <p>Weight: {this.props.pet.weight}</p>
          </div>
        </div>
        <div className="extra content">
          { this.props.pet.isAdopted == true ? 
          (<button className="ui disabled button">Already adopted</button>) : 
          (<button onClick={ () => this.props.onAdoptPet(this.props.pet.id)} className="ui primary button" id={this.props.pet.id}>Adopt pet</button>)
          }
        </div>
        <br></br>
        <br></br>
      </div>
    )
  }
}

export default Pet
