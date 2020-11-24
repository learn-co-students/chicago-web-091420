
import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

// Class vs Functional:
// 1. access props differently
// 2. functional component lack state
// 3. functional components lack lifecycle method

const SushiContainer = (props) => {
  return (
    <Fragment>
      <div className="belt">
        {
          props.sushis.map(sushiObj => {
            return <Sushi {...sushiObj} key={sushiObj.id} handleEaten={props.handleEaten} />
          })

        }
        <MoreButton handleMore={props.handleMore} />
      </div>
    </Fragment>
  )
}

export default SushiContainer
