import React from 'react'
import Comp3 from './Comp3'

const Comp2 = ({name}) => {
  return (
       <>
     <h1>Component2</h1>
     <hr />
     <Comp3 name={name} />
    </>
  )
}

export default Comp2