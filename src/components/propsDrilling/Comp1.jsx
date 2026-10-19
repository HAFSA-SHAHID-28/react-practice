import React from 'react'
import Comp2 from './Comp2'

const Comp1 = ({name}) => {
  return (
    <>
    
    
    <h1>comp1</h1>

<hr />
    <Comp2 name={name}/>
    
    
    </>
  )
}

export default Comp1