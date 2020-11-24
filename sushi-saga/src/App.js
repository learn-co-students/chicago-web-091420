import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

const API = "http://localhost:3000/sushis"

class App extends Component {
  constructor(){
    super()
    this.state = {
      sushis: [],
      startIndex: 0,
      budget: 50
    }
  }

  componentDidMount(){
    fetch(API)
    .then(resp => resp.json())
    .then(sushisArr => {
      const updatedSushis = sushisArr.map(sushiObj => {
        return {
          ...sushiObj,
          isEaten: false
        }
      })


      this.setState({
        sushis: updatedSushis.slice(0,10),
      })
    })
  }

  handleEaten = (id, price) => {
    if (price > this.state.budget){ 
      alert('you cannot afford this sushi')
      return }

    const updatedSushis = this.state.sushis.map(s => {
      if (s.id === id) {
        return { ...s, isEaten: true }
      } else {
        return s
      }
    })

    this.setState(prevState => {
      return {
        sushis: updatedSushis,
        budget: prevState.budget - price
      }
    })


  }
  // const updatedSushis = this.state.sushis.map(s => (s.id === id) ? { ...s, isEaten: true } : s)
 
  // const updatedIndex = (this.state.startIndex + 4) > this.state.sushis.length ? 0 : (this.state.startIndex + 4)
  handleMore = () => {
    const updatedIndex = (this.state.startIndex + 4)
 
    if (updatedIndex > this.state.sushis.length) {
      this.setState({
        startIndex: 0
      })
    } else {
      this.setState({
        startIndex: updatedIndex
      })
    }
  }

  // this.setState(prevState => {
    // return {
      // startIndex: prevState.startIndex + 4
    // }
  // })


  render() {
    const { startIndex } = this.state;

    const slicedSushis = this.state.sushis.slice(startIndex, startIndex + 4)
    const eatenSushis = this.state.sushis.filter(s => s.isEaten)

    return (
      <div className="app">
        <SushiContainer handleEaten={this.handleEaten} sushis={slicedSushis} handleMore={this.handleMore} />
        <Table budget={this.state.budget} eatenSushis={eatenSushis} />
      </div>
    );
  }
}

export default App;
