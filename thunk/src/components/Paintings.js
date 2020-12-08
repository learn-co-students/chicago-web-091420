


import React from 'react'
import { Switch, Route } from 'react-router-dom'
import PaintingList from './PaintingList';
import PaintingsNew from './PaintingsNew';

class Paintings extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      paintings: []
    }; 
  }
  componentDidMount(){
    fetch('http://localhost:3000/paintings')
    .then(resp => resp.json())
    .then(data => {
      this.setState({
        paintings: data
      })
    })
  }

 render(){
   return (
   <Switch>
     <Route component={PaintingsNew} path='/paintings/new' />
     <Route render={() => {
       return <PaintingList paintings={this.state.paintings} />
     }} path='/paintings' />
   </Switch>
   )
 }
}

export default Paintings
