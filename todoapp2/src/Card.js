
import React from 'react'
import './Card.css'

class Card extends React.Component {

  handleDelete = () => {
    const { id } = this.props.todo
    
    this.props.removeTodo(id)
  }

  handleMarkComplete = () => {
    const { id } = this.props.todo

    this.props.completeTodo(id)
  }


  render(){
    const { id, task, completed } = this.props.todo

    return (
      <div>
        <h4 className={ completed ? 'completed' : null }>
          { task }
          <button onClick={ this.handleDelete } >X</button>
          <button onClick={ this.handleMarkComplete } >Mark As Complete</button>
        </h4>
      </div>
     )
   }
}

export default Card
