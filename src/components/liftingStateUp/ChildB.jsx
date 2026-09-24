import React from 'react'

const ChildB = ({data, updateCount}) => {
  return (
    <>
    <div>ChildB {data}</div>
    <button onClick={()=> updateCount((prev) => prev +1)}>Update</button>
    </>
  )
}

export default ChildB