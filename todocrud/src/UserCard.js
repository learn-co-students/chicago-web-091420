

import React from 'react'
import { Card, Button } from 'semantic-ui-react'

class UserCard extends React.Component {

  handleDeleteUser = () => {
    const { id } = this.props
    fetch(`http://localhost:3000/users/${id}`, { method: 'DELETE' })
    .then(resp => resp.json())
    .then(data => {
      this.props.handleDelete(id)
    })
  }


 render(){
   const { id, phone, name, email } = this.props
   return (
     <Card>
       <Card.Content>
        <Card.Header>{ name }</Card.Header>
        <Card.Meta>{ email }</Card.Meta>
        <Card.Description>
         { phone }
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
          <Button basic color='green' onClick={() => this.props.handleEdit({id, phone, name, email})}>
            Edit
          </Button>
          <Button basic color='red' onClick={this.handleDeleteUser}>
            Delete
          </Button>
        </div>
      </Card.Content>
    </Card>
   )
 }
}

export default UserCard
