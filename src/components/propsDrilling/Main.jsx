import React from 'react'
import Comp1 from './Comp1';


const username = "Hafsa";



const Main = () => {
  return (
    <div>

        <h1>main</h1>

    <Comp1 name={username}/>


{/* <button className='button'  onClick={()=>window.print()} >Download</button> */}
    </div>
  )
}

export default Main