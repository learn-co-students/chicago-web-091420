


import React from 'react'

class ImageCard  extends React.Component {
 render(){
   console.log(this.props, '------');
   return (
   <div>
      <img src={this.props.url} width={'250px'} height={'250px'}/>
   </div>
   )
 }
}

export default ImageCard
