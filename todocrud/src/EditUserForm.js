
import React from 'react'
import './App.css'
import { Form, Button } from 'semantic-ui-react'

class EditUserForm extends React.Component {
  constructor(props){
    super(props)
    // const [ firstName, lastName ] = props.userToEdit.name.split(' ')

    this.state = {
      firstName: props.userToEdit.name.split(' ')[0],
      lastName: props.userToEdit.name.split(' ')[1],
      email: props.userToEdit.email,
      phone: props.userToEdit.phone,
    }
  }

  handleChange = (e) => {
    const key = e.target.name

    this.setState({
      [key]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const updatedUser = {
      name: `${this.state.firstName} ${this.state.lastName}`,
      email: this.state.email,
      phone: this.state.phone
    }

    const reqObj = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body:  JSON.stringify(updatedUser)
    }

    fetch(`http://localhost:3000/users/${this.props.userToEdit.id}`, reqObj)
    .then(resp => resp.json())
    .then(user => {
      this.props.patchUser(user)
    })

    // fetch req to update the backend
    // update the front end  by calling  a callback
  }

 render(){
   const { firstName, lastName, email, phone } = this.state

   return (
    <Form className={'new-user-form'} inverted onSubmit={this.handleSubmit}>
     <h4>Edit</h4>
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

export default EditUserForm;
