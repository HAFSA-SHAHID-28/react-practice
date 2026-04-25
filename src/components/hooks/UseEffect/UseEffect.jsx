import { useState, useEffect } from "react"

const UseEffect = () => {

    const [count, setCount] = useState(0);
    const [count1, setCount1] = useState(0);

    const updateCount = () => {
        setCount(count + 1)
    }

    const updateCount1 = () => {
        setCount1(count1 + 1)
    }

    // useEffect(() => {}, [])  -------------------- basic syntax

    useEffect(() => {
        console.log("hello bacho");

    }, [count, count1]);  // aik se zyada state pr bhi chal skta h!




    return (
        <>

            <h1>{count}</h1>
            {/* <button onClick={() => setCount(count + 1)}>Update</button>   ye tab use kro jab function chota ho tou yahi kam krlo */}
            <button onClick={updateCount}>Update</button>


            <hr />

            <h1>{count1}</h1>
            <button onClick={updateCount1}>Update Count</button>

        </>
    )
}

export default UseEffect