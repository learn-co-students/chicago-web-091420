import React, { Component } from 'react'

class StockTicker extends Component {
  constructor(){
    super()
    const stockValue = Math.floor(Math.random() * 100)


    this.state = {
      stockValue:  stockValue,
      color: 'green',
    }
  }

  componentDidMount(){

    this.intervalId = setInterval(() => {
      const stockValue = Math.floor(Math.random() * 100)

      this.setState({
        stockValue: stockValue
      })

    }, 1000)
  }


  componentDidUpdate(prevProps, prevState){

    if (this.state.stockValue > prevState.stockValue && this.state.color !== 'green') {
        this.setState({
          color: 'green'
        })
    } else if (this.state.stockValue < prevState.stockValue && this.state.color !== 'red') {
      this.setState({
        color: 'red'
      })
    }  
    // else if (this.state.stockValue === prevState.stockValue && this.state.color !== prevState.color && !this.state.){
      // this.setState({
        // color: 'gray'
      // })
    // }

  }

  componentWillUnmount(){
    clearInterval(this.intervalId)
  }

  render() {

    return (
      <div className="app-children">
        <div id="ticker">
          <h2>Flatiron</h2>
          <div style={{ color: this.state.color}}>
            {this.state.stockValue}
          </div>
        </div>
      </div>
    )
  }
}

export default StockTicker

