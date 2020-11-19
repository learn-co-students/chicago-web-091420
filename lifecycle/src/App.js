

import React, { Component } from 'react';
import WidgetSelector from './components/WidgetSelector'
import StockTicker from './components/StockTicker'
import DigitalClock from './components/DigitalClock'
import RandomKoala from './components/RandomKoala'

class App extends Component {
  constructor(){
    super()
    this.state = {
      showClock: false
    }
  }

  toggleWidget = () => {
    this.setState(prevState => {
      return {
        showClock: !prevState.showClock
      }
    })
  }



  render() {
    return ( 
      <div id='app'>
      <WidgetSelector toggleWidget={this.toggleWidget} />
      { 
        this.state.showClock ?
        <DigitalClock />
        :
        <StockTicker />
      }
      </div>

    )
  }
}

export default App;






















