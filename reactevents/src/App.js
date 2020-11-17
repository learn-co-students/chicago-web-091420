

import React, { Component } from 'react'
import TodoContainer from './TodoContainer'
import logo from './logo.svg';
import './App.css';


const todoArr = [
  {id: 1, task: 'clean room', completed: false },
  {id: 2, task: 'do dishes', completed: false },
  {id: 3, task: 'make bed', completed: true  }
]



class App extends Component {
  constructor(){
    super()
    this.state = {
      todos: todoArr
    }
  }

  handleArchive = () => {
    this.setState({
      todos: []
    })
  }

  removeTodo = (clickedId) => {
    const filteredTodos = this.state.todos.filter(todoObj => todoObj.id !== clickedId)

    this.setState({
      todos: filteredTodos
    })
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <button onClick={this.handleArchive} >Archive All Todos</button>
          <TodoContainer todos={this.state.todos} removeTodo={this.removeTodo} />
        </header>
      </div>
    )
  }
}

export default App;
















// valid JSX:
// 1) Other children Components
// 2) Traditional HTML Nodes 
// 3) JS Expressions






// this.setState does the following: 
// 1. update the value of the state
// 2. triggers the render method again




// Clear all todos psuedocode:
// 1. add ac lick listener to the button
// 2. create callback method and tie to clicklistener
// 3.    call setState
//       update the todos key to an empty arr


// remove a single todo
// - create the button in the individual card
// - bind that button to a callback that lives in the component where the state
// - define the callback and pass down as props until it reaches the component
//   where the event fires (i.e the btn)
// - in order to remove a single todo, we need the id. So pass that up (and wrap in a larger anon funct)
// - in the callback, filter out the object with the matching id
// - update the state to the new filtered arr


