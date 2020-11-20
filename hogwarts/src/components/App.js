import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import hogs from "../porkers_data";
import HogContainer from './HogContainer'
import Filter from './Filter'

class App extends Component {
  constructor(){
    super()

    const updatedHogs = hogs.map(h => {
      return {
        ...h,
        hidden: false
      }
    })


    this.state = {
      hogs: updatedHogs,
      showGreased: false,
      sortBy: ''
    }
  }


  // understand this for the assessment:
  // componentDidMount(){
    // fetch('http://localhost:3000')
    // .then(resp => resp.json())
    // .then(hogs => {
      // const updatedHogs = hogs.map(h => {
        // return {
          // ...h,
          // hidden: false
        // }
      // })

      // this.setState({
        // hogs: updatedHogs
      // })
    // })
  // }




  toggleGreased = () => {
    this.setState(prevState => { 
      return {
        showGreased: !prevState.showGreased 
      }
    })
  }

  handleSort = (e) => {
    this.setState({
      sortBy: e.target.value
    })
  }

  hideHog = (name) => {
    const updatedHogs = this.state.hogs.map(hogObj => {
      if (hogObj.name === name) {
        return {
          ...hogObj,
          hidden: true
        }
      } else {
        return hogObj
      }
    })


    this.setState({
      hogs: updatedHogs
    })

  }

  findHogs = () => {
    let updatedHogs = [...this.state.hogs].filter(hogObj => !hogObj.hidden)

    if (this.state.showGreased) {
      updatedHogs = this.state.hogs.filter(hogObj => hogObj.greased)
    }


    if (this.state.sortBy === 'weight'){
      updatedHogs.sort(function (hogA, hogB) {
        return hogA.weight - hogB.weight;
      });
    } else if (this.state.sortBy === 'name') {
      updatedHogs.sort(function(hogA, hogB) {
        var nameA = hogA.name.toUpperCase();
        var nameB = hogB.name.toUpperCase(); 
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        // names must be equal
        return 0;
      })

    }


    return updatedHogs
  }


  render() {
    const hogsToShow = this.findHogs()

    return (
      <div className="App">
        <Nav />
        <Filter toggleGreased={this.toggleGreased} handleSort={this.handleSort} />
        <HogContainer hogs={hogsToShow} hideHog={this.hideHog} />
      </div>
    );
  }
}

export default App;
