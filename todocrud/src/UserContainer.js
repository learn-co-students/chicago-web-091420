

import React from 'react'
import UserCard from './UserCard'
import { Card } from 'semantic-ui-react'


const UserContainer = (props) => {
  const renderUsers = () => {
    return props.users.map(userObj => {
      return <UserCard {...userObj} key={userObj.id} handleEdit={props.handleEdit} handleDelete={props.handleDelete} />
    })
  }

  return (
    <Card.Group itemsPerRow={4}>
      {
        renderUsers()
      }
    </Card.Group>
  )
  
}



export default UserContainer













// class UserContainer extends React.Component {
  // renderUsers = () => {
    // return this.props.users.map(userObj => {
      // return <p>{userObj.name}</p>
    // })
  // }

  // render(){
    // return (
      // <div>
      // {this.renderUsers()}
      // </div>
    // )
  // }
// }
