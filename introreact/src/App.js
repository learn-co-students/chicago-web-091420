


import logo from './logo.svg';
import React from 'react'
import './App.css';
import ImageContainer from './ImageContainer'



// A React Component Class:
//  - needs to have a render method
//  - the render needs to return valid JSX:
//  - Valid JSX:
//    1) Traditional HTML Nodes
//    2) JS expressions (using curly braces)
//    3) Other Components

class App extends React.Component {
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <h4>hello world!</h4>
          <ImageContainer />
        </header>
      </div>
    )
  }
}

export default App;
