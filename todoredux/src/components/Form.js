

import React from 'react'
import { addTodo } from '../actions/index'
import { connect } from 'react-redux'

class Form extends React.Component {
  state = {
    task: ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()

    const reqObj = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body:  JSON.stringify({
        ...this.state,
        completed: false
      })
    }


    fetch('http://localhost:3000/todos', reqObj)
    .then(resp => resp.json())
    .then(newTodo => {
      this.props.addTodo(newTodo)


      this.setState({
        task: ''
      })
    })
  }

 render(){
   const formStyle = { border: '4px solid black', padding: '5%', width: '400px'}

   return (
   <div style={formStyle}>
     <form onSubmit={this.handleSubmit}>
       <input type='text' name='task' onChange={this.handleChange} value={this.state.task} />

       <input type='submit' />
     </form>
   </div>
   )
 }
}

export default connect(null, { addTodo })(Form)


