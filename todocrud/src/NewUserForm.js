
import React from 'react'
import './App.css'
import { Form, Button } from 'semantic-ui-react'

class NewUserForm extends React.Component {
  state = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
  }

  handleChange = (e) => {
    const key = e.target.name

    this.setState({
      [key]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const newUser = {
      name: `${this.state.firstName} ${this.state.lastName}`,
      email: this.state.email,
      phone: this.state.phone
    }


    const reqObj = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body:  JSON.stringify(newUser)
    }


    fetch('http://localhost:3000/users', reqObj)
    .then(resp => resp.json())
    .then(user => {
      this.setState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
      })

      this.props.addUser(user)
    })
    
    // update the BE
    //   send a post req
    // update the FE
    //   invoke a callback funct from app.js which will update the state of users arr
  }

 render(){
   const { firstName, lastName, email, phone } = this.state

   return (
    <Form className={'new-user-form'} inverted onSubmit={this.handleSubmit}>
    <Form.Group widths='equal'>
      <Form.Input
        fluid
        name='firstName'
        onChange={this.handleChange}
        value={firstName}
        id='form-subcomponent-shorthand-input-first-name'
        label='First name'
        placeholder='First name'
      />
      <Form.Input
        fluid
        name='lastName'
        value={lastName}
        onChange={this.handleChange}
        id='form-subcomponent-shorthand-input-last-name'
        label='Last name'
        placeholder='Last name'
      />
    </Form.Group>
    <Form.Group widths='equal'>
      <Form.Input
        fluid
        name='email'
        onChange={this.handleChange}
        value={email}
        id='form-subcomponent-shorthand-input-first-name'
        label='email'
        placeholder='email'
      />
      <Form.Input
        fluid
        name='phone'
        onChange={this.handleChange}
        value={phone}
        id='form-subcomponent-shorthand-input-last-name'
        label='phone'
        placeholder='phone'
      />
    </Form.Group>
    <Button type='submit'>Submit</Button>
  </Form>
   )
 }
}

export default NewUserForm
