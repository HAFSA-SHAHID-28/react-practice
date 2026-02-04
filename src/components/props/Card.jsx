import React from 'react'

export const Card = (props) => {

    // console.log(props.title);
    

  return (
    <>
        <h1>My Cards</h1>
        <h3>{props.title}</h3>
        <ul>
            <li>
                Price: {props.price || "free"}
            </li>
        </ul>
        <hr />
    </>
  )
}
