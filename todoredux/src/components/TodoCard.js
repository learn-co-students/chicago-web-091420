

import React from 'react'
import { connect } from 'react-redux'
import { deleteTodo, updateTodo } from '../actions/index'



class TodoCard extends React.Component {

  handleDelete = () => {
    fetch(`http://localhost:3000/todos/${this.props.id}`, {method: 'DELETE'})
    .then(resp => resp.json())
    .then(data => {
      this.props.deleteTodo(this.props.id)
    })
  }

  handleComplete = () => {
    const reqObj = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body:  JSON.stringify({
        completed: true
      })
    }

    fetch(`http://localhost:3000/todos/${this.props.id}`, reqObj)
    .then(resp => resp.json())
    .then(updatedTodo => {
      this.props.updateTodo(updatedTodo)
    })

  }

  render(){
    const cardStyle = { border: '1px solid white',  padding: '2%', width: '400px', height: '150px'}
    const headerStyle = this.props.completed ? { color: 'red'} : {color: 'white'}

    return (
      <div style={cardStyle}>
      <h4 style={headerStyle} >{this.props.task}</h4>
      <button onClick={this.handleDelete}>delete</button>
      <button onClick={this.handleComplete}>mark as complete</button>
      </div>
    )
  }
}

const mapDispatchToProps = {
  deleteTodo: deleteTodo,
  updateTodo: updateTodo
}

export default connect(null, mapDispatchToProps)(TodoCard)
