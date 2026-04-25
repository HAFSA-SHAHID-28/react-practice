import { useState } from "react"

const Test = () => {

const [show, setShow] = useState(false);

function toggle() {
    // setShow(!show)
    setShow(prev => !prev)

    
}

  return (
    <>
        <h1>Test</h1>
        {show && <p>Hello</p>}
        <button onClick={toggle}>{show? "hide" : "show"}</button>
    </>
  )
}

export default Test