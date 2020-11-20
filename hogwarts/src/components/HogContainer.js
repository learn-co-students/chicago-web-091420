import React from 'react'
import HogTile from './HogTile'

class HogContainer extends React.Component {
 render(){
   return (
   <div className='ui grid container'>
     {
       this.props.hogs.map(hogObj => {
         return <HogTile {...hogObj} key={hogObj.name} hideHog={this.props.hideHog} />
       })
     }
   </div>
   )
 }
}

export default HogContainer
