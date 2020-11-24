
import logo from './logo.svg';
import React from 'react'
import './App.css';
import UserContainer from './UserContainer'
import NewUserForm from './NewUserForm'
import EditUserForm from './EditUserForm'

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      users: [],
      userToEdit: undefined
    }
  }

  componentDidMount(){
    fetch('http://localhost:3000/users')
    .then(resp => resp.json())
    .then(users => {
      this.setState({
        users: users
      })
    })
  }

  addUser = (newUser) => {
    this.setState(prevState => {
      return {
        users: [...prevState.users, newUser]
      }
    })
  }

  handleDelete = (id) => {
    this.setState(prevState => {
      return {
        users: prevState.users.filter(u => u.id !== id)
      }
    })
  }

  patchUser = (editedUser) => {
    const updatedUsers = this.state.users.map(userObj => {
      if(userObj.id === editedUser.id) {
        return editedUser
      } else {
        return userObj
      }
    })

    this.setState({
      users: updatedUsers,
      userToEdit: undefined
    })


  }

  handleEdit = (user) => {
    this.setState({
      userToEdit: user
    })

  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
        { 
          this.state.userToEdit ? 
          <EditUserForm userToEdit={this.state.userToEdit} patchUser={this.patchUser} />
          :
          <NewUserForm addUser={this.addUser} />
        }
        <UserContainer 
          users={this.state.users} 
          handleEdit={this.handleEdit}
          handleDelete={this.handleDelete} />
        </header>
      </div>
    );
  }
}

export default App;



