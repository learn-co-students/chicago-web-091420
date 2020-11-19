import React, { Component } from 'react'



class DigitalClock extends Component {
  constructor(){
    super()
    const time = this.findTime()
    this.state = { 
      time: time
    }
  }

  componentDidMount(){
    this.intervalId = setInterval(() => {
      const time = this.findTime()
      this.setState({ time })

    }, 1000)
  }

  componentWillUnmount(){
    clearInterval(this.intervalId)
    // this is the method where you'll clean up after your component.

  }

  findTime = () => {
    const date = new Date()
    return `${date.getHours()}: ${date.getMinutes()}: ${date.getSeconds()}`
  }



  render () {
    return (
      <div className="app-children">
        <h2 id="digital">
          {this.state.time}
        </h2>
      </div>
    )
  }
}

export default DigitalClock










