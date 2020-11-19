


import React from 'react'
import './Form.css'
import { v4 } from 'uuid';

class Form  extends React.Component {

  constructor(){
    super()
    this.state = {
      task: ''
    }
  }

  handleChange = (e) => {
    this.setState({
      task: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()

    const newTodo = {
      id: v4(),
      task: this.state.task,
      completed: false
    }

    this.props.addTodo(newTodo)

    this.setState({
      task: ''
    })
  }

  render(){
    return (
    <form onSubmit={this.handleSubmit}>
      <input type='text' onChange={this.handleChange} value={this.state.task} />
      <input type='submit'  value='add todo' />
    </form>
    )
  }
}

export default Form;
