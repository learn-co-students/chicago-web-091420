
import React from 'react'

class Filter extends React.Component {

 render(){
   return (
   <div className='filter'>
      <label>
        Show Greased:
        <input
          name="isGoing"
          type="checkbox"
          onChange={this.props.toggleGreased}
         />
      </label>
      <label>
        Sort By:
       <select onChange={this.props.handleSort}>
         <option value='' ></option>
         <option value='weight' >weight</option>
         <option value='name' >name</option>
       </select>
      </label>

   </div>
   )
 }
}

export default Filter
