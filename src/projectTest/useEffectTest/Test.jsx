import { useState, useEffect } from "react";

const Test = () => {

    const [message, setMessage] = useState("Hello Hafsa 👋")
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        let toggle = false;

        if (isRunning) {

        const interval = setInterval(() => {
            setMessage(toggle ? "Hello Hafsa 👋" : "Welcome Back Hafsa 😌");
            toggle = !toggle;
        }, 3000);
    

    return () => clearInterval(interval);
    }
}, [isRunning]);


return (
    <>

        <h1>TEST</h1>

        <p>{message}</p>

         {
                !isRunning ? (
                    <button onClick={() => setIsRunning(true)}>Start</button>
                ) : (
                    <button onClick={()=> {setIsRunning(false); setMessage("Hello Hafsa 👋")}}>Stop</button>
                )
            }

    </>
)
}

export default Test