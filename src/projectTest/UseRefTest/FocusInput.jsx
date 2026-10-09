import React, { useRef } from 'react'

const FocusInput = () => {

    const focus = useRef(null);


const handleFocus = () =>{

    focus.current.focus()

}


  return (
    <>
    
    
        <input 
        ref={focus}
        type="text" 
        placeholder='type.....'
        />

        <button onClick={handleFocus}>Focus</button>
    
    </>
  )
}

export default FocusInput