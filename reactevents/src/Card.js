
import React from 'react'
import './Card.css'

class Card extends React.Component {

  handleClick = () => {
    const { id } = this.props.todo
    
    this.props.removeTodo(id)
  }


  render(){
    const { id, task, completed } = this.props.todo

    return (
      <div>
        <h4 className={ completed ? 'completed' : null }>
          {task}
          <button onClick={ this.handleClick } >delete me</button>
        </h4>
      </div>
     )
   }
}

export default Card


//using anon funct:
//
// <button onClick={ () => this.props.removeTodo(id) } >delete me</button>
