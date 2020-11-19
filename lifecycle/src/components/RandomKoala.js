import React, { Component } from 'react'


import KoalaCard from './KoalaCard'



class RandomKoala extends Component {
  constructor(){
    super()
    console.log('Constructor', 'RandomKoala');
  }


  componentDidMount(){
    console.log('ComponentDidMount', 'RandomKoala');
  }


  renderKoalas = () => {
    return this.props.koalas.map(koalaObj => {
      return <img src={koalaObj.image_url} />
    })
  }


  render () {
    console.log('Render', 'RandomKoala');

    return (
      <div className="app-children">
       {
         this.renderKoalas()
       }
      </div>
    )
  }
}

export default RandomKoala
