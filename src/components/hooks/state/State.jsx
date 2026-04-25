import { useState } from "react"

const State = () => {



// const [varName, functionToUpdate] = useState (initialValue) --------   basic syntax
const [count, setCount] = useState (0);

function counter() {
  setCount(count + 1);

  console.log(count);
}


  // ---------------------------------------------------------------------------------

  // ye use nhi hoga qke react men koi bhi cheez jhud se update nhi hoti!, dynamic cheezon ke lia state use hoti h
  // let count = 0;

  // function counter() {
  //   count++

  //   console.log(count);
  // }

  
  

  return (
    <>
    <h1>{count}</h1>
      <button onClick={counter}>Update</button>
    </>
  )
}

export default State