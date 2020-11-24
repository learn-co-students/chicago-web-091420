import React, { Fragment } from 'react'

const Sushi = (props) => {
  const {name, isEaten, img_url, id, price, handleEaten } = props;


  return (
    <div className="sushi">
      <div className="plate" 
           onClick={() => handleEaten(id, price)}>
        { 
          isEaten ?
            null
          :
            <img src={img_url} width="100%" />
        }
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  )
}

export default Sushi
