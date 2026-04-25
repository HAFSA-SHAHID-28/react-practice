import { useEffect, useState } from "react"


const StopWatch = () => {

    const format = (val) => String(val).padStart(2, "0");

    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        let intervalId = null;
        if (isRunning) {
            intervalId = setInterval(() => {
                setTime((prev) => prev + 1)
            }, 1000);
        }

        return () => clearInterval(intervalId);
    }, [isRunning])

    return (
        <>
            <h1>StopWatch</h1>

            {/* <h1>Hours: {Math.floor(time/3600)}</h1>
            <h1>Minutes: {Math.floor((time % 3600)/60)}</h1>
            <h1>Seconds: {time % 60}</h1>  instead of this use that*/}

            <h1>
                {format(Math.floor(time / 3600))} :
                {format(Math.floor((time % 3600) / 60))} :
                {format(time % 60)}
            </h1>

            {
                !isRunning ? (
                    <button onClick={() => setIsRunning(true)}>{time === 0 ? "Start" : "Resume"}</button>
                ) : (
                    <button onClick={() => setIsRunning(false)}>Pause</button>
                )
            }



            <button onClick={() => {
                setIsRunning(false);
                setTime(0)
            }}>Reset</button>
        </>
    )
}

export default StopWatch