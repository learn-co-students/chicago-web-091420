
import React  from 'react'

class HogTile extends React.Component {
  constructor(){
    super()
    this.state = {
      showDetails: false
    }
  }
  
  renderImage = () => {
    const imageName = this.props.name.split(' ').join('_').toLowerCase()
    let pigImage = require(`../hog-imgs/${imageName}.jpg`) 

    return <img src={pigImage} width={'250px'} height={'250px'} alt='pig image'/>
  }


  renderDetails = () => {
    const { weight, age, specialty, 'highest medal achieved':medal } = this.props
    return (
      <div>
        <p>weight: {weight}</p>
        <p>specialty: {specialty}</p>
        <p>medal: {medal}</p>
      </div>
    )
  }

  handleToggle = () => {
    this.setState(prevState  => {
      return {
        showDetails: !prevState.showDetails
      }
    })
  }

  render(){
    const { name } = this.props

    return (
      <div className='ui seven wide column pigTile'>
          <h4>{name}</h4>
          <div>
            {this.renderImage()}
          </div>
          <button onClick={this.handleToggle}>Toggle Details</button>
          <button onClick={() => this.props.hideHog(name)}>Hide This Hog</button>
          { this.state.showDetails ? this.renderDetails() : null }
      </div>
    )
  }
}

export default HogTile








